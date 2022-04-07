import express from "express";
import data from "./data.js";
const app = express();

const API = '/api/v1'

app.get(`${API}/products`, (request, response) => {
  response.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running......");
});
