const connectDatabase = require("./db");
const express = require("express");
const rootRouter = require("./routes/index");
const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

connectDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
app.use("/api/v1/user", userRouter);
app.use("./api/v1/account", accountRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to https://localhost:${process.env.PORT} `);
});

module.exports = app;
