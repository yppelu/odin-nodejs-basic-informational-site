"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler(error, req, res, next) {
    res.status(500).send('500 | Internal Server Error');
}
