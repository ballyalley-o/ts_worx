"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = exports.vanillaLogger = void 0;
const vanillaLogger = (message, port) => {
    console.log(`${message}${port}`.bgYellow);
};
exports.vanillaLogger = vanillaLogger;
const errorLogger = (message) => {
    console.log(`${message}`.bgRed);
};
exports.errorLogger = errorLogger;
