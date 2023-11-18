"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startMessage = (req, res) => {
    res.status(200).json({
        Hello: `Hello. Please send request with '/help' route to see all available commands.`,
    });
};
exports.default = startMessage;
