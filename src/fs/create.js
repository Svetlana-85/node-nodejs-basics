import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const folderName = 'files';
const fileName = 'fresh.txt';
const textFile = 'I am fresh and young';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);
    console.log(filePath);
    fs.stat(filePath, (err) => {
        if(err) {
            fs.open(filePath, 'w', (err) => {
                if(err) throw new Error('File not created');
                else {
                    fs.writeFile(filePath, textFile, (err) => {
                        if(err) throw new Error('File writing error');
                    });
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();