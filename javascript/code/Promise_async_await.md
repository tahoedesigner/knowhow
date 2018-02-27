Promise/async/await使用例
=========================

```js
// 普通Promise使用
const p = new Promise(function (resolve, reject) {
    //resolve("ok");
    //reject("error");
    dbupd("0.sql1", result => resolve(result));
});
p.then(result => {
    console.log("[success]" + result);
}, result => {
    console.log("[failure]" + result);
});

// 普通回调函数嵌套
function dbupd(sql, done) {
    setTimeout(() => done(sql + " upd ok."), 800);
}
dbupd("1.sql1", result => {
    console.log(result);
    dbupd("2.sql2", result => {
        console.log(result);
        dbupd("3.sql3", result => {
            console.log(result);
        });
    });
});

// Promise函数嵌套解决方法
function dbupAsync(sql) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(sql + " upd ok.");
            resolve(sql + ".ok");
        }, 800)
    });
    return p;
}
dbupAsync("2.sql1")
    .then(() => dbupAsync("2.sql2"))
    .then(() => dbupAsync("3.sql3"));

// 代码更加简洁的async/await
async function upAllDB() {
    const result1 = await dbupAsync("3.sql1");
    const result2 = await dbupAsync("3.sql2");
    const result3 = await dbupAsync("3.sql3");
    console.log(result1, result2, result3);
}
upAllDB();

```
