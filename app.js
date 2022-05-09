const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const server = require("http").createServer(app);
var tweetsRouter = require("./routers/v1/tweets/tweets");
var twitterUserRouter = require("./routers/v1/twitter_user/twitter_user");
var mongoConfig = require("./config/dbconfig");

app.use(express.json({ limit: "5mb", extended: true }));
app.use(
  express.urlencoded({ limit: "5mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());

var port = process.env.PORT || 10010;

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/v1/tweets", tweetsRouter);
app.use("/api/v1/twitter_user", twitterUserRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
server.listen(port);
console.log("App running on :>> ", port);
module.exports = app;
