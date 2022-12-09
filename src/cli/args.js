import pc from 'node:process';

const parseArgs = () => {
    const result = pc.argv.filter((val) => val.slice(0,2) === '--')
    .map((item) => `${item.slice(2)} is ${pc.argv[pc.argv.indexOf(item)+1]}`).join(', ');
    console.log(result);
};

parseArgs();