"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageNotFoundErrorPage = getPageNotFoundErrorPage;
function getPageNotFoundErrorPage(req, res) {
    res.render('./pages/404', { title: '404 | Not Found' });
}
