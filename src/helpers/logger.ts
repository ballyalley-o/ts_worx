import colors from 'colors';
import dotenv from 'dotenv/config';


const vanillaLogger = (message: string, port: number) => {
    console.log(`${message}${port}`.bgYellow)
};

const errorLogger = (message: string) => {
    console.log(`${message}`.bgRed)
};


export { vanillaLogger, errorLogger };