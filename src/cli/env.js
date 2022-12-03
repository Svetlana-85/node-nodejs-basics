import pc from 'node:process';

const parseEnv = () => {
    const result = Object.entries(pc.env).filter( (item) => item[0].slice(0, 4) == 'RSS_')
    .map((item) => `${item[0]}=${item[1]}`).join('; ');
    console.log(result);
};

parseEnv();