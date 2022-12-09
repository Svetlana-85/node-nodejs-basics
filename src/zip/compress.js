import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const compress = async () => {
    const folderName = 'files';
    const fileName = 'fileToCompress.txt';
    const arcName = 'archive.gz';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, folderName, fileName);
    const arcPath = join(__dirname, folderName, arcName);

    const zip = zlib.createGzip();

    const streamRead = fs.createReadStream(filePath);
    const streamWrite = fs.createWriteStream(arcPath);
    streamRead.pipe(zip).pipe(streamWrite);
};

await compress();