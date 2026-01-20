import express from "express";
import fs from "fs";
import middleware from "./middleware/middleware.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/internet/Desktop/Visual Studio Projects/week 8/day 1 HTML/html_form_basic/index.html",
  );
});

app.get("/tasks", async (req, res) => {
  res
    .status(200)
    .json(JSON.parse(await fs.promises.readFile("./data.json", "utf-8")));
});

app.post("/mission", middleware, async (req, res) => {
  console.log(req.body);

  const missing = req.body;
  const data = JSON.parse(await fs.promises.readFile("./data.json", "utf-8"));
  data.push({ missing: missing });
  await fs.promises.writeFile(
    "./data.json",
    JSON.stringify(data, null, 2),
    "utf-8",
  );
  res.status(200).send(req.body);
});

app.listen(3000, () => {
  console.log("server running");
});
