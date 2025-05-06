const fs = require("node:fs");
const path = require("node:path");

// Fungsi untuk memuat data kontak dari file JSON
const loadDetails = () => {
  const readFileSync = fs.readFileSync("../data/details.json", "utf8");
  const details = JSON.parse(readFileSync); // Renamed from 'contacks' to 'details'
  return details;
};
const findDetail = (id) => {
  const details = loadDetails();
  const detail = details.find((detail) => parseInt(detail.id) === parseInt(id));

  return detail;
};
module.exports = { loadDetails, findDetail };
