require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

// Passport Local Strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        if (username === "wixi" && password === "wixi123")
            return done(null, { id: 1, name: "William" });
        done(null, false);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, { id: id, name: "William" });
});

// Routes
app.get("/", (req, res, next) => {
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
}, (req, res) => {
    res.send("Welcome, " + req.user.name + "!");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));