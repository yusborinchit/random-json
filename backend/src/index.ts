import express, { json } from "express";

const PORT = 8080;
const app = express();

app.use(json());

app.get("/", (_, res) => {
  res.status(200).send({
    message: "Hello World from `random-json@backend`",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running in http://localhost:${PORT}/`);
});
