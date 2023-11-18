"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const axios_1 = __importDefault(require("axios"));
const coins_1 = __importDefault(require("../../models/coins"));
const api_endpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD';
const api_key = 'e06c8663-3101-464c-85c0-83e3d855620e';
// eslint-disable-next-line no-async-promise-executor
const endpoint = async () => {
    try {
        await axios_1.default
            .get(api_endpoint, {
            headers: {
                'X-CMC_PRO_API_KEY': api_key,
            },
        })
            .then((response) => {
            const respData = response.data.data;
            respData.forEach(async (e) => {
                const shop = 'CoinMarketCap';
                const short = e.symbol;
                const price = e.quote.USD.price;
                const date = new Date().toLocaleDateString();
                const time = new Date().toLocaleTimeString();
                const coin = new coins_1.default(shop, short, price, date, time);
                await coin.save();
            });
        });
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.default = endpoint;
