const xray = require('x-ray');
const moment = require('moment');

const x = xray();

moment.locale('ja');

const userName = 'tanishi';
const url = `https://github.com/users/${userName}/contributions`;

const xPromise = new Promise((resolve, reject) => {
  x(url, 'rect', [ { count: '@data-count', date: '@data-date' }])((error, results) => {
    if (error) {
      console.log(error);
    } else {
      let continuity = 0;

      results.map(result => {
        const date = result.date;
        const count = result.count;

        if (moment(date).isSameOrAfter('2017-1-1')){
          if (count > 0){
            continuity++;
          }
          else {
            continuity = 0;
          }
        }
      });

      console.log(continuity);
    }
  });
});
