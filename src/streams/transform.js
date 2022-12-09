import { Transform, pipeline } from 'stream';
import process from 'node:process';

const transform = async () => {
    const streamTransform = new Transform({
        transform(chunk, encoding, callback) {
            const result = chunk.toString().trim().split('').reverse().join('');

            callback(null, result + '\n');
        }
    });

    pipeline(process.stdin, streamTransform, process.stdout, (err) => {
        if (err) console.log(err);
    });
};


await transform();