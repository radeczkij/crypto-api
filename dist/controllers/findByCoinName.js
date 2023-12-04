"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coins_1 = __importDefault(require("../models/coins"));
// eslint-disable-next-line no-async-promise-executor
const findCoinByShort = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.default = findCoinByShort;
