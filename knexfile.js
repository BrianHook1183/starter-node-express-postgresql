const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      // tells Knex to store migration files in the migrations folder at src/db/migrations.
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
  },
};
