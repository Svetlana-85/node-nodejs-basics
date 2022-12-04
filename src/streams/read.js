import fs from 'node:fs';
import process from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const folderName = 'files';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fileName = 'fileToRead.txt';
    const filePath = join(__dirname, folderName, fileName);

    const stream = new fs.ReadStream(filePath, 'utf8');
    let data = '';
    stream.on('data', chunk => data += chunk);
    stream.on('close', () => process.stdout.write(data));
};

await read();