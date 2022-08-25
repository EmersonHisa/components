//实现原生ajax封装

//2.实现new过程
//fn为构造函数
//apply使this指向obj,构造函数的this指向实例对象,起到new的作用
function myNew(fn, ...args) {
  const obj = {};
  obj._proto_ = fn.prototype;
  fn.apply(obj, args);
  return obj;
}

//3.打乱数组
const shuffle = (arr) => {
  return arr.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });
};

const shuffle2 = (arr) => {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
};

//6.数组去重
const unique = (arr) => {
  return [...new Set(arr)];
};

const unique2 = (arr) => {
  const res = [];
  arr.reduce((pre, next) => {
    if (!pre.has(next)) {
      pre.set(next, 1);
      res.push(next);
    }
    return pre;
  }, new Map());
};
