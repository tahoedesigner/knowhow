抓取CSDN新闻
============

```js
var request = require("request");

var options = {
    method: 'GET',
    url: 'https://www.csdn.net/api/articles',
    qs: {
        type: 'more',
        category: 'newarticles',
        shown_offset: Date.now().toString() + "000", //000为csdn格式
    },
    headers: {
        referer: 'https://www.csdn.net/nav/newarticles',
        connection: 'keep-alive',
        'x-requested-with': 'XMLHttpRequest',
        'cache-control': 'no-cache',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
        'accept-language': 'en-US;q=0.9,en;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        pragma: 'no-cache'
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    data = JSON.parse(body);
    data.articles.forEach(item => {
        console.log(item.created_at, item.title);
    });
});
```
