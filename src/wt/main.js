import { Worker } from 'node:worker_threads';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'node:os';

const fileName = 'worker.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, fileName);
const numberStart = 10;
const numCPUs = cpus().length; 

const performCalculations = async () => {
    const arrPromise = [];
    for(let i = 0; i < numCPUs; i++) {
        arrPromise[i] = new Promise((resolve) => {
            const worker = new Worker(filePath, { workerData: numberStart + i });
            worker.on('message', res => resolve({status: 'resolved', res}));
            worker.on('error', () => resolve({status: 'error', res: null}));
        });
    }

    await Promise.all(arrPromise).then(val => {
        console.log(val);        
    });
};

await performCalculations();