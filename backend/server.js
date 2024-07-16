const express = require("express");
const dotenv = require("dotenv");
const connectedDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

const app = express();
connectedDB();

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server started on ", port);
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ "message": 'Registeration successfull' });
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username, password: password });
        if (user && user.password === password) {
            res.status(201).json({ "message": 'Login successfull' });
        } else {
            res.status(404).json({ "message": "wrong credentials" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});