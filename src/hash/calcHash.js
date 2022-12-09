import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const calculateHash = async () => {
    const folderName = 'files';
    const fileName = 'fileToCalculateHashFor.txt';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        const hash = crypto.createHash('sha256').update(data).digest('hex');
        console.log(hash);
    })
};

await calculateHash();