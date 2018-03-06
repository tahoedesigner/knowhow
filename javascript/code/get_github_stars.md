爬取Github项目的星数等数据
==========================

```js
const axios = require('axios');
const cheerio = require('cheerio');

const username = 'vuejs';
const project  = 'vue';
const url = 'https://github.com/' + username + '/' + project;
axios.get(url)
    .then(function (response) {
        const $ = cheerio.load(response.data, {
            normalizeWhitespace: true,
            xmlMode: true
        });

        var watchs = $('a[class=social-count]'+'a[href="/' + username + '/' + project + '/watchers"]').html().trim();
        var stars = $('a[class="social-count js-social-count"]'+'a[href="/' + username + '/' + project + '/stargazers"]').html().trim();
        var forks = $('a[class=social-count]'+'a[href="/' + username + '/' + project + '/network"]').html().trim();

        console.log(url);
        console.log('Watch:' + watchs, 'Star:' + stars, 'Fork:' + forks);
    })
    .catch(function (error) {
        console.log(error);
    });
```
