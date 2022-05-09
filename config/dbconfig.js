const mongoose = require("mongoose");
const env = process.env.NODE_ENV;
require("dotenv").config();

const connectionString = `mongodb+srv://myysports:MyySports2022@cluster0.rdjdi.mongodb.net/twitter?retryWrites=true&w=majority`;

console.log("connectionString :>> ", connectionString);

const connection = mongoose.connect(connectionString, (err, db) => {
  if (err) {
    console.error(err);

    throw new Error("Unable to connect MongoDB");
  }

  console.log(`###### Connected to MongoDB! ###### ${connectionString}`);
});

module.exports = {
  sequelize: connection,
};
