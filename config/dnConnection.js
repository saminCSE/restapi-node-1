const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

let mysql = require("mysql");

let conn = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
});

conn.connect(function (err) {
  if (err) throw err;
  console.log(`${DB_NAME} database connected successfully`);
});
