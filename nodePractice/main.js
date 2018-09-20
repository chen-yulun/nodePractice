let methods = require('./hello');

let name = 'Mike';

methods.greet(name);

methods.say();
// 下一次事件响应执行函数
process.nextTick(function () {
    console.log('nextTick callback!'); // 后执行
});
console.log('nextTick was set!');  // 先执行