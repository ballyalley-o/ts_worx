"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./helpers/logger");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    (0, logger_1.vanillaLogger)('SERVER STATUS: Running on PORT:', +PORT, 'bgGreen');
});
