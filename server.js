require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));