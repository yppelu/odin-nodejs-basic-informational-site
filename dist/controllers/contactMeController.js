"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactMePage = getContactMePage;
function getContactMePage(req, res) {
    res.render('./pages/index', { title: 'Contact Me' });
}
