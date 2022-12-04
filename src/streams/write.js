import fs from 'node:fs';
import process from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const folderName = 'files';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fileName = 'fileToWrite.txt';
    const filePath = join(__dirname, folderName, fileName);

    const streamWrite = fs.createWriteStream(filePath, 'utf-8');
    process.stdin.pipe(streamWrite);
};

await write();