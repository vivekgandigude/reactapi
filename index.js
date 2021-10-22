import express from "express";
import router from "./route.js";
import cors from "cors";
import mySqlcon from "./mysqlConnection.js";
const handleError = (err, res) => {
  const { success, data } = err;
  console.log(err);
  //errorlog.InsertError(err.message);
  let errorMsg = "";
  if (data === undefined && err !== undefined) errorMsg = err.message;
  else if (data.message === undefined) errorMsg = data.data;
  else errorMsg = data.message;
  res.send({ success: success, data: errorMsg });
};

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://localhost:3000");
//   next();
// });
app.use(router);
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/getMySql", (req, res) => {
  mySqlcon.query("SELECT * FROM film", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
app.listen(port, () => {
  console.log(`App running on port : ${port}.`);
});
