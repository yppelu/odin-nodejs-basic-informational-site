"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutController_1 = require("../controllers/aboutController");
const aboutRouter = (0, express_1.Router)();
aboutRouter.get('/', aboutController_1.getAboutPage);
exports.default = aboutRouter;
