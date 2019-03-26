//first, require pg-promise
//call it immediately
// const pgp = require("pg-promise")();
const pgp = require("pg-promise")({
  query: e => {
    console.log("QUERY: ", e.query);
  }
});
//next, define the connections options
const options = {
  host: "localhost",
  database: "restaurant-favs-app"
};

//make a connection to the database specified by the options object
const db = pgp(options);
module.exports = db;
