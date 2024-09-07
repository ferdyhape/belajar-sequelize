import express from "express";
const app = express();

const port = 3000;
import sequelize from "./utils/db.js";

app.get("/", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("connected to the database");
    })
    .catch((error) => {
      res.send("Koneksi gagal: " + error.message);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
