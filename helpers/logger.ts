import colors from 'colors';
import dotenv from 'dotenv/config';


const vanillaLogger = (message: string, port: number, color: any) => {
    console.log(`${message}${port}`[color])
};

const errorLogger = (message: string) => {
    console.log(`${message}`.bgRed)
};


export { vanillaLogger, errorLogger };