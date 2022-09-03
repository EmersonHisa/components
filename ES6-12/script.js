//1.let and const
//var有变量提升，有初始化提升，值可变
//let有变量提升，没有初始化提升，值可变
//const有变量提升，没有初始化提升，值不可变，如果定义对象，属性可变
//使用 let 关键字声明的全局作用域变量不属于 window 对象:
var name = "tom";
function fn() {
  console.log(name);
  let name = "jerry";
}
fn(); //cannot access name befor initialization

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
