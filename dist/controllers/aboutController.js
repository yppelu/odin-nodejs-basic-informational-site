"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAboutPage = getAboutPage;
function getAboutPage(req, res) {
    res.render('./pages/index', { title: 'About' });
}