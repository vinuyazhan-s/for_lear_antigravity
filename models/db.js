const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./cats.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to the SQLite database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        nickname TEXT UNIQUE,
        code TEXT,
        rememberKey TEXT
    )`);
});

module.exports = db;
