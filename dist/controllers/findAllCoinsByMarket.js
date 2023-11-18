"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coins_1 = __importDefault(require("../models/coins"));
// eslint-disable-next-line no-async-promise-executor
const findAllCoins = async (req, res) => {
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
};
exports.default = findAllCoins;
