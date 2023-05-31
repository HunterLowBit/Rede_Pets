const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const bodyParser = require("body-parser");

const uri =
  "mongodb+srv://hlb_dev:<hlbdev2k>@cluster0.m3kphon.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(express.static("front"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/connect", async (req, res) => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    res.send("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    res.status(500).send("Error connecting to MongoDB");
  } finally {
    await client.close();
  }
});

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/front/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/front/Login.html");
});
app.get("/cadastro", (req, res) => {
  res.sendFile(__dirname + "/front/cadastro.html");
});
app.get("/linhadoTempo", (req, res) => {
  res.sendFile(__dirname + "/front/Linha-do-Tempo.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}\n http://localhost:3000`);
});
