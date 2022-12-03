import pc from 'node:process';

const parseEnv = () => {
    const arr = Object.entries(pc.env).filter( (item) => {
        if (item[0].slice(0, 4) == 'RSS_') return 1;
    });
    const result = arr.map((item) => `${item[0]}=${item[1]}`).join('; ');
    console.log(result);
};

parseEnv();