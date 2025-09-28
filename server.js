const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! 🚀 Це твоя соцмережа + месенджер стартує.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
