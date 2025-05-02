const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware untuk melayani file statis dari folder "public"
app.use(express.static(path.join(__dirname, "../public")));

// Route untuk melayani file index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/index.html"));
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
