const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const CLIENT_PORT = process.env.CLIENT_PORT;
const app = express();

// Allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `*`);
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json()); //To parse JSON bodies (Applicable for Express 4.16+)

// MIDDLEWARE
app.use(express.static("public")); // Exposing the public folder to the client
app.use(express.urlencoded({ extended: true })); // Encoding your requests so they are Javascript formatted
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); // Allowing your server to read your views folder and the jsx files inside of them

// Routes
app.get("/", (req, res) => {
  res.send("<h1>March Server</h1>");
});

app.use("/users", require("./controllers/userRoutes"));
app.use("/maps", require("./controllers/mapsRoutes"));
app.use("/party", require("./controllers/partyRoutes"));
// 404 Page
// app.get("*", (req, res) => {
//   res.render("404");
// });

app.listen(PORT, () => {
  console.log("nomming at posrts", PORT);
});
