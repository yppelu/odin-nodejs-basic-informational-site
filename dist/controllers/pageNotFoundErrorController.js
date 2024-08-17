"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageNotFoundErrorPage = getPageNotFoundErrorPage;
function getPageNotFoundErrorPage(req, res) {
    res.render('./404.ejs');
}
