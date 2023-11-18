"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coins_1 = __importDefault(require("../models/coins"));
// eslint-disable-next-line no-async-promise-executor
const findCoinByShort = async (req, res) => {
    try {
        const market = req.params.market;
        const short = req.params.short;
        coins_1.default.find(market, short)
            .then(([coin]) => {
            const result = coin;
            if (result.length === 0) {
                res.send('Please check route correctness.');
            }
            else {
                res.send(result.slice(-1));
            }
        })
            .catch((err) => {
            console.log(err.message);
        });
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.default = findCoinByShort;
