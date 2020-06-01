
let ServerName;
if (process.env.REACT_APP_TYPE === "prod") {
    ServerName = 'https://apptor.ru/prod';
} else if (process.env.REACT_APP_TYPE === "dev") {
    ServerName = 'https://apptor.ru/dev';
}

export { ServerName };