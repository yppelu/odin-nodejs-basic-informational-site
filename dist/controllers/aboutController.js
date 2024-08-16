"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAboutPage = getAboutPage;
const path_1 = __importDefault(require("path"));
function getAboutPage(req, res) {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'pages', 'about.html'));
}
