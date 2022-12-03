import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folderName = 'files';
const newFolderName = 'files_copy';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folderPath = join(__dirname, folderName);
    const folderNewPath = join(__dirname, newFolderName);

    fs.stat(folderPath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        fs.stat(folderNewPath, (err) => {
            if(!err) {
                throw new Error('FS operation failed');
            };
            copyFolder(folderPath, folderNewPath);
            
        });
    });
};

function copyFolder(folderPath, folderNewPath) {
    fs.mkdir(folderNewPath, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        fs.readdir(folderPath, {withFileTypes: true, encoding: 'utf8'}, (err, files) => {
            if(err) {
                throw new Error('FS operation failed');
            }
            files.forEach((item) => {
                const pathFile = join(folderPath, item.name);
                const pathNewFile = join(folderNewPath, item.name);

                if(item.isFile()) {
                    fs.copyFile(pathFile, pathNewFile, (err) => {
                        if(err) {
                            throw new Error('Error copy file');
                        }
                    });
                } else {
                    copyFolder(pathFile, pathNewFile);
                }
            });
        });
    });
}

copy();