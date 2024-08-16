"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageNotFoundErrorController_1 = require("../controllers/pageNotFoundErrorController");
const pageNotFoundErrorRouter = (0, express_1.Router)();
pageNotFoundErrorRouter.get('/', pageNotFoundErrorController_1.getPageNotFoundErrorPage);
exports.default = pageNotFoundErrorRouter;
