"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
const indexRouter = (0, express_1.Router)();
indexRouter.get('/', indexController_1.getIndexPage);
indexRouter.get(['/homepage', '/home'], (req, res) => {
    res.status(301).redirect('/');
});
exports.default = indexRouter;
