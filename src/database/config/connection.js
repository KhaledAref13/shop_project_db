const { Pool } = require("pg");

const { NODE_ENV, DB_URL_PRODUCTION, DB_URL_DEVELOPMENT, DB_URL_TESTING } =
  process.env;

let dbUrl = "";
if (NODE_ENV === "production") {
  dbUrl = DB_URL_PRODUCTION;
} else if (NODE_ENV === "development") {
  dbUrl = DB_URL_DEVELOPMENT;
} else if (NODE_ENV === "testing") {
  dbUrl = DB_URL_TESTING;
}

const option = {
  connectionString: dbUrl,
  ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(option);

module.exports = { connection };
