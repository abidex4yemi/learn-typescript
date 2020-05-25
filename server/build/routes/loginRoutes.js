"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
var requiresAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("\n    <div>\n      <h1>Request Forbidden (Please login) </h1>\n    </div>\n  ");
};
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        return res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">logout</a>\n      </div>\n    ");
    }
    return res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    return res.redirect('/login');
});
router.get('/login', function (req, res) {
    return res.send("\n    <form method=\"post\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" />\n      </div>\n\n      <button>Submit </button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        return res.redirect('/');
    }
    else {
        return res.send('Invalid email and password');
    }
});
router.get('/protected', requiresAuth, function (req, res) {
    return res.send("\n    <div>Welcome to protected route, logged in user</div>\n  ");
});
