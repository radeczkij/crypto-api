import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import getEndpoints from './controllers/cronController';

import router from './routes/router';

const PORT = 5000;
const app = express();

app.use('/api', router);

app.listen(PORT, () => {
    getEndpoints();
    console.log(`Server is running on port ${PORT}.`);
});
