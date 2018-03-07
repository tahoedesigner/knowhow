列出文件夹文件
==============

```js
var fs = require('fs');
var path = './assets/images/';
fs.readdir(path, function (err, files) {
    if (err) throw err;
    var fileList = files.filter(function (file) {
        //return fs.statSync(path + file).isFile(); //全文件
        return fs.statSync(path + file).isFile() && /.*\.png$/.test(file); //仅png文件
    })
    console.log(fileList);
});
```

