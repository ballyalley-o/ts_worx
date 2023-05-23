"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const works_1 = __importDefault(require("./routes/works"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/works', works_1.default);
app.listen(PORT, () => {
    // vanillaLogger('SERVER STATUS: Running on PORT:', 3000);
    console.log(`SERVER STATUS: Running on PORT: ${PORT}`);
});
