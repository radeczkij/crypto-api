"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cronController_1 = __importDefault(require("./controllers/cronController"));
const router_1 = __importDefault(require("./routes/router"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use('/', router_1.default);
app.listen(PORT, () => {
    (0, cronController_1.default)();
    console.log(`Server is running on port ${PORT}.`);
});
