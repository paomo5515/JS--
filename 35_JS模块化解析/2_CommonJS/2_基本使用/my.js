const name = "my"
const age = 18
function sum(num1, num2) {
  return num1 + num2
}

// 1.导出方案：module.exports
module.exports = {
  // aaa: "aaa",
  // bbb: "bbb"

  name,
  age,
  sum
}