const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const { loadDetails, findDetail } = require("./detail.js");
// Template engine (gunakan ejs)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../")); //
console.log("Views folder:", path.join(__dirname, "../pages"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware untuk melayani file statis dari folder "public"
const serveStatic = require("serve-static");
app.use(serveStatic(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public")));
// Route untuk melayani file index.ejs
app.get("/", (req, res) => {
  res.render("pages/index");
});

// Route untuk melayani file Contohdetail.html
app.get("/detail/:id", (req, res) => {
  const Detail = findDetail(req.params.id);

  res.render("pages/Contohdetail", { Detail });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
module.exports = app;
