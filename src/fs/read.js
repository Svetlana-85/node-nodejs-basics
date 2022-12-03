import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const folderName = 'files';
    const fileName = 'fileToRead.txt';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    })
};

await read();