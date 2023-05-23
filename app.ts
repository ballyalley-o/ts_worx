import express from 'express';
import {vanillaLogger} from './helpers/logger';
import dotenv from 'dotenv/config';
import colors from 'colors';


const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, () => {
    vanillaLogger('SERVER STATUS: Running on PORT:', +PORT, 'bgGreen');
});