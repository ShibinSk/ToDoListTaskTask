// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// const Handlebars = require("handlebars");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// const connection = require("./db/connnection");

// const exphbs = require("express-handlebars");
// const helpers = require("handlebars-helpers");
// var app = express();

// app.engine('handlebars', exphbs({
//   layoutsDir: __dirname + '/views/layouts'
// }));

// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

// var http = require("http");
// // view engine setup
// const server = http.createServer(app);
// connection();
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "hbs");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.set('views', path.join(__dirname, 'views'));
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
// server.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

// module.exports = app;

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const Handlebars = require("handlebars");
const connection = require("./db/connnection");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
var http = require("http");
const server = http.createServer(app);
connection();
const hbs = require("express-handlebars");
const helpers = require("handlebars-helpers");
// view engine setup
app.set('views', __dirname + '/views');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

Handlebars.registerHelper('inc', function(num) {
  return num + 1;
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));





app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = app;
