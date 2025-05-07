const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const { loadDetails, findDetail } = require("./detail.js");
// Template engine (gunakan ejs)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../")); // Atur folder views ke "c:\Users\Lenovo\portofolio-5\views"
console.log("Views folder:", path.join(__dirname, "../pages"));
app.use(express.json());

// Middleware untuk melayani file statis dari folder "public"
app.use(express.static(path.join(__dirname, "views", "public")));

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
