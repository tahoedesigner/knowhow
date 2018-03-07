图片最小化
==========

```js
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['./assets/images/*.{jpg,png}'], './dist/build/images', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({
            quality: '65-80'
        })
    ]
}).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});
```
