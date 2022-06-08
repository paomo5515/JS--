// 当遇到 yeild 时候就会暂停函数的执行
// 当遇到 return 的时候 生成器就停止执行了
function* foo() {
  console.log("函数开始执行了~")

  const value1 = 100
  console.log("第一段代码:", value1)
  yield value1  // 第一段代码的返回值,也可以放一个 表达式 或者一个函数

  const value2 = 200
  console.log("第二段代码:",value2)
  yield

  const value3 = 300
  console.log("第三段代码:",value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

// generator 本质上是一个特殊的 iterator
const generator = foo()

/*
  下边四个打印结果为
  函数开始执行了~
  第一段代码: 100
  返回值1 { value: 100, done: false }
  第二段代码: 200
  返回值2 { value: undefined, done: false }
  第三段代码: 300
  返回值3 { value: undefined, done: false }
  数执行结束~
  返回值3 { value: '123', done: true }
*/
console.log("返回值1",generator.next())
console.log("返回值2",generator.next())
console.log("返回值3",generator.next())
console.log("返回值4",generator.next())

