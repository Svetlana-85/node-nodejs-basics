import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const folderName = 'files';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fileName = 'wrongFilename.txt';
    const fileNewName = 'properFilename.md';
    const filePath = join(__dirname, folderName, fileName);
    const fileNewPath = join(__dirname, folderName, fileNewName);

    fs.stat(filePath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        fs.stat(fileNewPath, (err) => {
            if(!err) {
                throw new Error('FS operation failed');
            }
            fs.rename(filePath, fileNewPath, (err) => {
                if(err) {
                    throw new Error('FS operation failed');
                }
            }); 
        });
    });
};

await rename();