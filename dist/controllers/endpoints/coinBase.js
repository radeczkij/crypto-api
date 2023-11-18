"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const coinBaseEnpoints_1 = __importDefault(require("../../utils/coinBaseEnpoints"));
const coins_1 = __importDefault(require("../../models/coins"));
const endpoint = async () => {
    try {
        const promise = coinBaseEnpoints_1.default.map((endpoint) => axios_1.default.get(endpoint).then(async (response) => {
            const endRes = response.data.data;
            const shop = 'CoinBase';
            const short = endRes.base;
            const price = endRes.amount;
            const date = new Date().toLocaleDateString();
            const time = new Date().toLocaleTimeString();
            const coin = new coins_1.default(shop, short, price, date, time);
            await coin.save();
        }));
        Promise.all([...promise]);
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.default = endpoint;
