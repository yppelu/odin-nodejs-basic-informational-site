"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexPage = getIndexPage;
function getIndexPage(req, res) {
    res.render('./pages/index', { title: 'Homepage' });
}
