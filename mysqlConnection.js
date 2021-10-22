import mySqlConfig from "./mysqlConfig.js";
import Sequelize from "sequelize";
import mysql2 from 'mysql2'


const mySqlcon = mysql2.createConnection({
    host: mySqlConfig.host,
    user: mySqlConfig.USER,
    password: mySqlConfig.PASSWORD,
    database: mySqlConfig.DB
    
  });
  
//   mySqlcon.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM films", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

  export default mySqlcon;