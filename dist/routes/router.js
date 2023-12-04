"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const start_1 = __importDefault(require("../controllers/start"));
const findByCoinName_1 = __importDefault(require("../controllers/findByCoinName"));
const findAllCoinsByMarket_1 = __importDefault(require("../controllers/findAllCoinsByMarket"));
const coinPriceByTimePeriod_1 = __importDefault(require("../controllers/coinPriceByTimePeriod"));
const router = (0, express_1.Router)();
router.get('/', start_1.default);
router.get('/:market/', findAllCoinsByMarket_1.default);
router.get('/:market/:short', findByCoinName_1.default);
router.get('/:market/:short/:timePeriod', coinPriceByTimePeriod_1.default);
router.use(body_parser_1.default.json());
exports.default = router;
