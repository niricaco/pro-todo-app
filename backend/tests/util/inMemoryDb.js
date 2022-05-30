const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");

const startDb = async () => {
  const server = await MongoMemoryServer.create();
  const uri = server.getUri();
  const connection = await mongoose.connect(uri);
  return [server, connection];
};

const stopDb = async (connection, server) => {
  await connection.disconnect();
  await server.stop();
};

const deleteAll = async (...collections) => {
  const promises = collections.map((collection) => collection.deleteMany());
  await Promise.all(promises);
};

module.exports = { startDb, stopDb, deleteAll };
