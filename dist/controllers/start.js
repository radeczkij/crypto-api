"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startMessage = (req, res) => {
    res.status(200).json({
        Hello: `Hi! Try to get currency kucoin, coinStats, coinPaprika, coinMarketCap, coinBase.`,
    });
};
exports.default = startMessage;
