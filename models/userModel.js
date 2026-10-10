const db = require('./db');

const User = {
    create: (nickname, code, rememberKey, callback) => {
        db.run(
            `INSERT INTO users (nickname, code, rememberKey) VALUES (?, ?, ?)`,
            [nickname, code, rememberKey],
            function (err) {
                callback(err);
            }
        );
    },
    
    findByNicknameAndCode: (nickname, code, callback) => {
        db.get(
            `SELECT * FROM users WHERE nickname = ? AND code = ?`,
            [nickname, code],
            (err, row) => {
                callback(err, row);
            }
        );
    },

    findByNicknameAndKey: (nickname, rememberKey, callback) => {
        db.get(
            `SELECT * FROM users WHERE nickname = ? AND rememberKey = ?`,
            [nickname, rememberKey],
            (err, row) => {
                callback(err, row);
            }
        );
    },

    updateCode: (nickname, newCode, callback) => {
        db.run(
            `UPDATE users SET code = ? WHERE nickname = ?`,
            [newCode, nickname],
            function (err) {
                callback(err);
            }
        );
    }
};

module.exports = User;
