
import sql from "mssql";
class MyElancoDbservice {
  dbConnect = async () => {
    try {
      console.log("DbConnection started");
      var dbconfig = {
        user: "acc",
        password: "123",
        database: "GileadRAReact",
        driver: "msnodesqlv8",
        server: "LAPTOP-5ODR40BA",
        options: {
          encrypt: false,
          enableArithAbort: false,
        },
        dialectOptions: {
          instanceName: "SQLEXPRESS",
        },
      };
      let data = await this.getDBConnection(dbconfig);
      return data;
    } catch (error) {
      throw error;
    }
  };

  getDBConnection = (dbconfig) =>
    new Promise(async (resolve, reject) => {
      try {
        const poolPromise = new sql.ConnectionPool(dbconfig)
          .connect()
          .then((pool) => {
            console.log("Connected to MSSQL");
            resolve(pool);
          })
          .catch((err) =>
            console.log("Database Connection Failed! Bad Config: ", err)
          );
      } catch (error) {
        reject(error);
      }
    });
}
const elacodbService = new MyElancoDbservice();
export default elacodbService;
