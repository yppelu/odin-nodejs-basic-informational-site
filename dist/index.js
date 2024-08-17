"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const aboutRouter_1 = __importDefault(require("./routes/aboutRouter"));
const contactMeRouter_1 = __importDefault(require("./routes/contactMeRouter"));
const pageNotFoundRouter_1 = __importDefault(require("./routes/pageNotFoundRouter"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const html_template_data_1 = require("./consts/html-template-data");
const PORT = 3000;
const app = (0, express_1.default)();
app.set('views', node_path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(node_path_1.default.join(__dirname, 'public')));
app.locals.footerData = html_template_data_1.footerData;
app.use('^/$|/index(.html)?', indexRouter_1.default);
app.get(['/homepage', '/home'], (req, res) => {
    res.status(301).redirect('/');
});
app.use('/about(.html)?', aboutRouter_1.default);
app.use('/contact-me(.html)?', contactMeRouter_1.default);
app.use('*', pageNotFoundRouter_1.default);
app.use(errorHandler_1.default);
app.listen(PORT);
