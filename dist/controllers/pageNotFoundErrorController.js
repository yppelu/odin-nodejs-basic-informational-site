"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageNotFoundErrorPage = getPageNotFoundErrorPage;
const path_1 = __importDefault(require("path"));
function getPageNotFoundErrorPage(req, res) {
    res.status(404).sendFile(path_1.default.join(__dirname, '..', '..', 'pages', '404.html'));
}
