const { MongoClient } = require("mongodb");

let dbInstance = null;

const connectDB = async (dbname) => {
  if (dbInstance) return dbInstance;
  try {
    let uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    dbInstance = await client.db(dbname);
    console.log("Succefully Connected to The database: ", dbname);
    return dbInstance;
  } catch (err) {
    return `DB_CONNECTION: ${err.name}_${err.message}`;
  }
};

module.exports = { connectDB };
