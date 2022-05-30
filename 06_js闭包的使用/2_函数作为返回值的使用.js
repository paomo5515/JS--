// JS 语法允许函数内部再定义函数
function foo() {
  function bar() {
    console.log("bar")
  }
  return bar
}

var fn = foo()
fn() // "bar"


function makeAdder(count) {
  function add(num) {
    return count + num
  }
  return add
}

var add5 = makeAdder(5)
console.log(add5(6));

var add10 = makeAdder(10)

/*
  高阶函数：把一个函数 如果接收另外一个函数作为参数，或者该函数会
  返回另外一个函数作为返回值的函数，那么这个函数就称之为是一个高阶函数
*/