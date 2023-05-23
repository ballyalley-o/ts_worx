import express from 'express';
import {vanillaLogger} from './helpers/logger';
import workQueue from './routes/works';
import dotenv from 'dotenv/config';
import colors from 'colors';
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/works', workQueue);

app.listen(PORT, () => {
    // vanillaLogger('SERVER STATUS: Running on PORT:', 3000);
    console.log(`SERVER STATUS: Running on PORT: ${PORT}`);
});

