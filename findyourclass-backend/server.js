const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

let scheduleData = [];

// Izinkan akses dari frontend (localhost:3000)
app.use(cors());

// Membaca CSV ke dalam array saat server dimulai
fs.createReadStream("jadwal.csv")
  .pipe(csv())
  .on("data", (row) => {
    scheduleData.push(row);
  })
  .on("end", () => {
    console.log("CSV file has been loaded.");
  });

// Fungsi pencarian jadwal
function searchSchedule(keyword) {
  keyword = keyword.trim().toUpperCase();
  let words = keyword.split(" ");

  // Ambil semua mata kuliah unik
  let mataKuliahCandidates = [...new Set(scheduleData.map(row => row["MATA KULIAH"].toUpperCase()))];
  let matchedMataKuliah = [];

  for (let i = 1; i <= words.length; i++) {
    let potentialMatkul = words.slice(0, i).join(" ");
    if (mataKuliahCandidates.some(mk => mk.includes(potentialMatkul))) {
      matchedMataKuliah.push(potentialMatkul);
    }
  }

  // Ambil mata kuliah dengan kecocokan terpanjang
  let mataKuliah = matchedMataKuliah.sort((a, b) => b.length - a.length)[0] || "";
  let dosen = mataKuliah ? words.slice(mataKuliah.split(" ").length).join(" ") : keyword;

  // Filter berdasarkan mata kuliah dan/atau dosen
  return scheduleData.filter(row => {
    let matchMatkul = mataKuliah ? row["MATA KULIAH"].toUpperCase().includes(mataKuliah) : true;
    let matchDosen = dosen ? row["DOSEN"].toUpperCase().includes(dosen) : true;
    return matchMatkul && matchDosen;
  });
}

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword harus diberikan" });
  }

  const result = searchSchedule(keyword);

  res.json(result); // Mengembalikan data saja
});


// Endpoint API
app.get('/api/data', (req, res) => {
  res.json({ message: "Data berhasil diambil!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di PORT: ${PORT}`);
});
