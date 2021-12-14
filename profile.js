var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

let today = new Date();
console.log(today);


var date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date);
