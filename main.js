const xray = require('x-ray');
const x = xray();

const userName = 'tanishi';
const url = `https://github.com/users/${userName}/contributions`;

x(url, 'rect', [ { count: '@data-count', date: '@data-date' }])((error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
});
