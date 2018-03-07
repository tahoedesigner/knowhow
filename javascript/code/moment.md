日期处理函数moment
==================

```js
const moment = require('moment');

var result = "";
var fmt = 'YYYY/MM/DD HH:mm:ss.SSS';

result = moment(new Date()).format(fmt);
p(result);

result = moment().format(fmt);
p(result);

p(Date.now());

var now = moment();
p(now.toObject());
p(now.toJSON());
p(now.toDate().getTime());
p(now.format(fmt));
p(now.hours());
now.utc();
p(now.hours());
now.local();
p(now.hours());
p(now.add(-1, 'minutes').format(fmt));
p(now.add(-1, 'hours').format(fmt));
p(now.add(-1, 'days').format(fmt));
p(now.add(-1, 'months').format(fmt));
p(now.add(-1, 'years').format(fmt));

p(moment([2018, 0, 29]).fromNow());

var date1 = moment('2018-02-01 12:00:00');
p(date1.format(fmt));
var date2 = moment('2018/03/01 12:00:00', 'YYYY/MM/DD HH:mm:ss');
p(date2.format(fmt));

if (date1.isBefore(date2))
    console.log('date1在date2前');
else
    console.log('date1不在date2前');

p(moment.duration(date2 - date1).humanize());

function p(c) {
    console.log(c);
}
```
