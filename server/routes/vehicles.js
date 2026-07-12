const express = require("express");
const router = express.Router();
const db = require("../database/database");

// GET all vehicles
router.get("/", (req, res) => {
  db.all("SELECT * FROM vehicles", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ADD vehicle
router.post("/", (req, res) => {
  const { registration, name, type, capacity, status } = req.body;

  db.run(
    `INSERT INTO vehicles (registration, name, type, capacity, status)
     VALUES (?, ?, ?, ?, ?)`,
    [registration, name, type, capacity, status],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        id: this.lastID,
        message: "Vehicle Added Successfully",
      });
    }
  );
});

// UPDATE vehicle
router.put("/:id", (req, res) => {
  const { registration, name, type, capacity, status } = req.body;

  db.run(
    `UPDATE vehicles
     SET registration=?, name=?, type=?, capacity=?, status=?
     WHERE id=?`,
    [registration, name, type, capacity, status, req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Vehicle Updated Successfully",
      });
    }
  );
});

// DELETE vehicle
router.delete("/:id", (req, res) => {
  db.run(
    "DELETE FROM vehicles WHERE id=?",
    [req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Vehicle Deleted Successfully",
      });
    }
  );
});

module.exports = router;