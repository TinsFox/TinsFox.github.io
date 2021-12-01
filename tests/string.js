Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  // 获取参数
  const args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    console.log('args', args);
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? new fn(...arguments) : context,
      args.concat(...arguments),
    );
  };
};
function fn(...args) {
  console.log(this, args);
}
let obj = {
  myname: '张三',
};

const bindFn = fn.myBind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1, 2); // this指向obj
fn(1, 2); // this指向window
