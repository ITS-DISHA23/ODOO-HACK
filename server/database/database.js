const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./transitops.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("✅ SQLite Connected");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS vehicles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      registration TEXT,
      name TEXT,
      type TEXT,
      capacity TEXT,
      status TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS drivers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      phone TEXT,
      license TEXT,
      status TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS trips (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vehicle TEXT,
      driver TEXT,
      origin TEXT,
      destination TEXT,
      status TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS fuel_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vehicle TEXT,
      driver TEXT,
      fuelType TEXT,
      liters REAL,
      cost REAL,
      odometer INTEGER,
      date TEXT
    )
  `);
});

module.exports = db;