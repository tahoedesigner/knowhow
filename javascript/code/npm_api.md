npmjs库更新检测
===============

```bash
npm install api-npm --save
```

```js
const async = require('async');
const napi = require('api-npm');
const colors = require('colors');

var list = [{
        name: 'npm',
        inuse: '5.6.0'
    },
    {
        name: 'sails',
        inuse: '0.12.14'
    },
    {
        name: 'vue',
        inuse: '2.5.13'
    },
    {
        name: 'vue-cli',
        inuse: '2.9.3'
    },
    {
        name: 'vue-router',
        inuse: '3.0.1'
    },
    {
        name: 'axios',
        inuse: '0.18.0'
    },
    {
        name: 'puppeteer',
        inuse: '1.1.1'
    },
    {
        name: 'colors',
        inuse: '1.1.2'
    },
    {
        name: 'api-npm',
        inuse: '1.0.0'
    },
];

async.eachSeries(list, function (item, cb) {
    napi.getdetails(item.name, body => {
        var newVersion = body['dist-tags']['latest'];
        if (item.inuse == newVersion)
            console.log(item.name, newVersion.green);
        else
            console.error(item.name, item.inuse.green, '->', newVersion.bgRed.bgCyan.bold);
        cb();
    });
}, function (err) {});
```

