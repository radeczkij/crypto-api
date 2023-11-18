"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coins_1 = __importDefault(require("../models/coins"));
// eslint-disable-next-line no-async-promise-executor
const findPriceByTime = async (req, res) => {
    try {
        const market = req.params.market;
        const short = req.params.short;
        const timePeriod = req.params.timePeriod;
        coins_1.default.findByTime(market, short).then(([coin]) => {
            let result = coin;
            result = result.reverse();
            let sum = 0;
            try {
                switch (true) {
                    case timePeriod === '30m':
                        for (let index = 0; index < 6; index++) {
                            sum += Number(result[index].price);
                        }
                        sum = sum / 6;
                        break;
                    case timePeriod === '1h':
                        for (let index = 0; index < 12; index++) {
                            sum += Number(result[index].price);
                        }
                        sum = sum / 12;
                        break;
                    case timePeriod === '3h':
                        for (let index = 0; index < 36; index++) {
                            sum += Number(result[index].price);
                        }
                        sum = sum / 36;
                        break;
                    case timePeriod === '6h':
                        for (let index = 0; index < 72; index++) {
                            sum += Number(result[index].price);
                        }
                        sum = sum / 72;
                        break;
                    case timePeriod === '12h':
                        for (let index = 0; index < 144; index++) {
                            sum += Number(result[index].price);
                        }
                        sum = sum / 144;
                        break;
                    case timePeriod === '1d':
                        for (let index = 0; index < result.length; index++) {
                            sum += Number(result[index].price);
                        }
                        sum = sum / result.length;
                        break;
                    default:
                        sum = 0;
                }
                if (sum !== 0) {
                    res.status(200).json({
                        market: market,
                        coin: short,
                        AveragePrice: sum.toFixed(5),
                        timePeriod: timePeriod,
                    });
                }
                else {
                    res.send('Something went wrong.(Check route or time period.)');
                }
            }
            catch (err) {
                res.send('Not enough data in database. Please try smaller time period or choose "1d" to get today\'s average price.');
            }
        });
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.default = findPriceByTime;
