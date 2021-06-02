const { PORT = 5000 } = process.env;

const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

// The server now imports Knex and calls knex.migrate.latest(), which applies all migrations that have not yet been applied and returns a promise containing the migrations that were applied, if any. If the migration is successful, the app is started on the specified port. Otherwise, the error is printed to console.error() and then explicitly tears down the connection to the database by calling knex.destroy().

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });
