const express = require("express");
const cors = require("cors");
const db = require("./database/database");
const vehicleRoutes = require("./routes/vehicles");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("🚀 TransitOps Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});