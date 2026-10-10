const User = require('../models/userModel');

exports.signup = (req, res) => {
    const { nickname, code, rememberKey } = req.body;
    User.create(nickname, code, rememberKey, (err) => {
        if (err) {
            return res.status(400).json({ error: 'Nickname already exists!' });
        }
        res.json({ success: true });
    });
};

exports.login = (req, res) => {
    const { nickname, code } = req.body;
    User.findByNicknameAndCode(nickname, code, (err, row) => {
        if (row) {
            res.json({ success: true });
        } else {
            res.status(401).json({ error: 'Invalid nickname or code!' });
        }
    });
};

exports.verifyKey = (req, res) => {
    const { nickname, rememberKey } = req.body;
    User.findByNicknameAndKey(nickname, rememberKey, (err, row) => {
        if (row) {
            res.json({ success: true });
        } else {
            res.status(401).json({ error: 'Invalid nickname or remember key!' });
        }
    });
};

exports.resetCode = (req, res) => {
    const { nickname, rememberKey, newCode } = req.body;
    User.findByNicknameAndKey(nickname, rememberKey, (err, row) => {
        if (row) {
            User.updateCode(nickname, newCode, (err) => {
                if (err) return res.status(500).json({ error: 'Database error' });
                res.json({ success: true });
            });
        } else {
            res.status(401).json({ error: 'Invalid nickname or remember key!' });
        }
    });
};
