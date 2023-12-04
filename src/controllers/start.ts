import { RequestHandler } from 'express';

const startMessage: RequestHandler = (req, res) => {
    res.status(200).json({
        Hello: `Hi! Try to get currency kucoin, coinStats, coinPaprika, coinMarketCap, coinBase.`,
    });
};

export default startMessage;
