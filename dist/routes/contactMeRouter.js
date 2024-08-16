"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactMeController_1 = require("../controllers/contactMeController");
const contactMeRouter = (0, express_1.Router)();
contactMeRouter.get('/', contactMeController_1.getContactMePage);
exports.default = contactMeRouter;
