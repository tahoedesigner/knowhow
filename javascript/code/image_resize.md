图片大小变更
============

```js
const sharp = require('sharp');

sharp('./assets/images/i1.png')
    .resize(250, 124, {
        kernel: sharp.kernel.nearest
    })
    .background({
        r: 0,
        g: 0,
        b: 0,
        alpha: 0
    })
    .embed()
    .toFile('./assets/images/i1.logo.png')
    .then(function (info) {
        console.log(info);
    });
```

