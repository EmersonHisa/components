//1.实现ajax
const ajax = {
  get(url, fn) {
    const xhr = new XMLHttpRequest();
    if (!xhr) {
      return false;
    }
    xhr.onreadystatechange = alertContents;
    xhr.open("GET", url, true);
    xhr.send();
    function alertContents() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          fn(xhr.responseText);
        }
      }
    }
  },
  post(url, fn, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        fn(xhr.responseText);
      }
    };
    xhr.send();
  },
};
//2.实现new过程: 1创建空对象 2设置原型链 3将构造函数的this指向新对象obj并执行代码
//fn为构造函数
//apply使this指向obj,构造函数的this指向实例对象,起到new的作用

function myNew(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, args);
  return obj;
}
function Person(name, age) {
  this.userName = name;
  this.age = age;
}
var person1 = new Person("lulu", 19);
var person3 = myNew(Person, "kuku", 20);
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

//4.防抖函数 debounce
const optimisedSearchHandler = debounceFunc(searchHandler, 500);
const debounceFunc = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
//5.节流函数 throttle
window.addEventListener(onclick, handlerTrigger);
const handlerTrigger = () => {
  fireShot(); // Expensive call
};
const optimisedTriggerHandler = throttleFunc(handlerTrigger, 100);
const throttleFunc = (func, interval) => {
  let flag = true;
  return function (...args) {
    const context = this;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, interval);
    }
  };
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
//7.setTimeout 实现 setIntetval
//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
//The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
const mySetInterval = (fn, delay) => {
  let timer = null;
  const interval = () => {
    fn();
    timer = setTimeout(interval, delay);
  };
};

//18.(a==1 && a==2 && a==3) true
let a = {
  num: 1,
  toString: function () {
    return this.num++;
  },
};

let a2 = [1, 2, 3];
a2.toString = a2.shift;

var val = 0;
Object.defineProperty(window, "a", {
  get: function () {
    return ++val;
  },
});
//数组方法
//影响原数组push pop shift unshift reserve sort splice
//不影响原数组 join concat map forEach filter every some reudce flat slice
//26.foreach
//The forEach() method executes a provided function once for each array element.
Array.prototype.sx_forEach = (cb) => {
  for (let i = 0; i < this.length; i++) {
    cb && cb(this[i], i, this);
  }
};

//27.map
//The map() method creates a new array populated with the results of calling a provided
// function on every element in the calling array.
Array.prototype.sx_map = (cb) => {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = cb && cb(this[i], i, this);
  }
};
//28.filter
//The filter() method creates a shallow copy of a portion of a given array, filtered
//down to just the elements from the given array that pass the test implemented by the
//provided function.
Array.prototype.sx_filter = (cb) => {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    cb && cb(this[i], i, this) && res.push(this[i]);
  }
};

//29.every
//The every() method tests whether all elements in the array pass the test implemented
//by the provided function. It returns a Boolean value.
Array.prototype.sx_every = (cb) => {
  for (let i = 0; i < this.length; i++) {
    if (!cb && cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

//30.some
//The some() method tests whether at least one element in the array passes the test
//implemented by the provided function. It returns true if, in the array, it finds an
//element for which the provided function returns true; otherwise it returns false.
//It doesn't modify the array.
Array.prototype.sx_some = (cb) => {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
//31.reduce
//The reduce() method executes a user-supplied "reducer" callback function on each element of the
//array, in order, passing in the return value from the calculation on the preceding element.
//The final result of running the reducer across all elements of the array is a single value.

//The first time that the callback is run there is no "return value of the previous calculation".
//If supplied, an initial value may be used in its place. Otherwise the array element at index 0
//is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

//Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in
//an array:
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// providing a way to represent variadic functions in JavaScript.
Array.prototype.sx_reduce = function (cb, ...args) {
  let pre,
    start = 0;
  if ((args.length = 0)) {
    pre = args[0];
  } else {
    pre = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    pre = cb(pre, this[i], i, this);
  }
  return pre;
};

//32.findIndex
//The findIndex() method returns the index of the first element in an array that satisfies the
//provided testing function. If no elements satisfy the testing function, -1 is returned.
Array.prototype.sx_findIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb && cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
//33.find
//The find() method returns the first element in the provided array that satisfies the provided
//testing function. If no values satisfy the testing function, undefined is returned.
Array.prototype.sx_find = function (cb) {
  for (let i = 0; i < this, length; i++) {
    if (cb && cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
//34.fill
//The fill() method changes all elements in an array to a static value, from a start index (default 0)
// to an end index (default array.length). It returns the modified array.
Array.prototype.sx_fill = function (value, start = 0, end) {
  end = end || this.length;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};
//35.includes
//The includes() method determines whether an array includes a certain value among its entries,
//returning true or false as appropriate.
Array.prototype.sx_includes = function (value, start = 0) {
  const isnan = Number.isNaN(value);
  for (let i = start; i < this.length; i++) {
    if (this[i] === value || (isnan && Number.isNaN(this[i]))) {
      return true;
    }
  }
  return false;
};
//36.join
//The join() method creates and returns a new string by concatenating all of the elements in an
//array (or an array-like object), separated by commas or a specified separator string.
//If the array has only one item, then that item will be returned without using the separator.
Array.prototype.sx_join = function (str = ",") {
  let res = "";
  for (let i = 0; i < this.length; i++) {
    res = i === 0 ? this[i] : `${res}${str}${this[i]}`;
  }
  return res;
};
//37.flat
//The flat() method creates a new array with all sub-array elements concatenated into it
//recursively up to the specified depth.
Array.prototype.sx_flat = function (dep = 1) {
  let arr = this,
    i = 0;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
    i++;
    if (i >= dep) break;
  }
  return arr;
};
//对象方法
//39.entries
//The Object.entries() method returns an array of a given object's own enumerable string-keyed property
// [key, value] pairs. This is the same as iterating with a for...in loop,
//except that a for...in loop enumerates properties in the prototype chain as well.

//The order of the array returned by Object.entries() is the same as that provided by a for...in loop.
//If there is a need for different ordering, then the array should be sorted first,
//like Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));.
Object.sx_entires = function (obj) {
  const res = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]]);
  }
  return res;
};

//40.fromEntries
//The Object.fromEntries() method transforms a list of key-value pairs into an object.
Object.sx_fromEntires = function (arr) {
  const obj = {};
  for (let item of arr) {
    const [key, value] = item;
    obj[key] = value;
  }
  return obj;
};

//41.keys
Object.sx_keys = function (obj) {
  const res = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push(key);
  }
  return res;
};

//42.values
//The Object.values() method returns an array of a given object's own enumerable property
// values, in the same order as that provided by a for...in loop.
//(The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
Object.sx_values = function (obj) {
  const res = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push(obj[key]);
  }
};

//43.instanceOf
//The instanceof operator tests to see if the prototype property of a constructor appears
//anywhere in the prototype chain of an object. The return value is a boolean value.
//Its behavior can be customized with Symbol.hasInstance.
const sx_instanceof = function (parent, child) {
  const pp = parent.prototype;
  let cp = children.__proto__;
  while (cp) {
    if (fp === cp) {
      return true;
    }
    cp = cp.__proto__;
  }
  return false;
};

//45.assign
//The Object.assign() method copies all enumerable own properties from one or more source
//objects to a target object. It returns the modified target object.
Object.sx_assign = function (target, ...params) {
  if (target === null || target === undefined) {
    throw new TypeError("cannot convert undefined or null to object");
  }
  target = Object(target);
  for (let obj of args) {
    for (let key in obj) {
      obj.hasOwnProperty(key) && (target[key] = obj[key]);
    }
  }
  return target;
}; //throw typeerror

//promise方法
//46.all
//47.race
//48.allSettled
//49.any
//50.finally

//函数方法
//51.call
//The call() method calls the function with a given this value and arguments provided
//individually.
Function.prototype.sx_call = function (thisParam, ...params) {};
//52.apply
//53.bind

//字符串方法
//54.slice
//55.substr
//56.substring
