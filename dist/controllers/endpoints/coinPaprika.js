"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const axios_1 = __importDefault(require("axios"));
const coins_1 = __importDefault(require("../../models/coins"));
const api_endpoint = 'https://api.coinpaprika.com/v1/ticker?limit=20';
// eslint-disable-next-line no-async-promise-executor
const endpoint = async () => {
    try {
        await axios_1.default.get(api_endpoint).then(async (response) => {
            const respData = response.data;
            for (let i = 0; i < 20; i++) {
                const shop = 'CoinPaprika';
                const short = respData[i].symbol;
                const price = respData[i].price_usd;
                const date = new Date().toLocaleDateString();
                const time = new Date().toLocaleTimeString();
                const coin = new coins_1.default(shop, short, price, date, time);
                await coin.save();
            }
        });
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.default = endpoint;
