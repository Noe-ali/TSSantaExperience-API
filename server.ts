import express from "express";
import createUserRouter from "./src/routes/users";
require("dotenv").config();

//require routers
//require models

const app = express();
const PORT = process.env.PORT ?? 3000;
app.disable("x-powered-by");

// Routers
app.use("/users", createUserRouter());

app.get("/", (req, res) => {
  res.status(200).send(`listen on port ${PORT} `);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
