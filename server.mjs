import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Backend API berjalan dengan baik!" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
