const app = require("../app");
const mockserver = require("supertest");
const User = require("../models/user");
const { startDb, stopDb, deleteAll } = require("./util/inMemoryDb");

describe("/API/dasboard/ get test", () => {
  let server;
  let connection;
  let client;

  beforeAll(async () => {
    [server, connection] = await startDb();
    client = mockserver.agent(app);
  });

  afterEach(async () => {
    await deleteAll(User);
  });

  afterAll(async () => {
    await stopDb(connection, server);
  });

  test("new user gets empty list", async () => {
    // given
    const newUser = new User({
      username: "user",
      email: "email",
      password: "password",
    });
    await newUser.save();
    client.set("authorization", newUser._id);

    // when
    const response = await client.get("/api/dashboards");

    // then
    expect(response.status).toBe(200);
    const responseData = response.body;
    expect(responseData.user.dashboards).toStrictEqual([]);
  });

  test("deleted user receives nothing", async () => {
    // given
    const newUser = new User({
      username: "user",
      email: "email",
      password: "password",
    });
    await newUser.save();
    client.set("authorization", newUser._id);
    await User.deleteMany();

    // when
    const response = await client.get("/api/dashboards");

    // then
    expect(response.status).toBe(200);
    const responseData = response.body;
    expect(responseData.user).toBeNull();
  });
});
