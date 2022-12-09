import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const folderName = 'files';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fileName = 'fileToRemove.txt';
    const filePath = join(__dirname, folderName, fileName);

    fs.unlink(filePath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
    });

};

await remove();