// get the client
const mysql = require('mysql');
 
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_tracker'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return
  }

  console.log(`Connected to db. ThreadID: ${connection.threadId}`);
});

module.exports = connection;