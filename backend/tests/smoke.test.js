const mockserver = require("supertest");
const app = require("../app");

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  // given
  // no setup required

  // when
  const result = sum(1, 2);

  //then
  expect(result).toBe(3);
});

test("/random endpoint response 404", async () => {
  // given
  const server = mockserver(app);

  // when
  const response = await server.get("/api/random");

  //then
  expect(response.status).toBe(404);
});
