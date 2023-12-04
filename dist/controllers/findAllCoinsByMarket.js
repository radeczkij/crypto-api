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
const findAllCoins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const market = req.params.market;
    coins_1.default.findAll(market).then(([market]) => {
        let result = market;
        result = result.reverse();
        const response = [];
        try {
            for (let i = 0; i < 20; i++) {
                if (result[i] !== undefined) {
                    response.push(result[i]);
                }
            }
        }
        catch (err) {
            res.status(500).send('Please check route correctness!');
        }
        if (response.length !== 0) {
            res.status(200).send(response.reverse());
        }
        else {
            res.send('Something went wrong.(Check route.)');
        }
    });
});
exports.default = findAllCoins;
