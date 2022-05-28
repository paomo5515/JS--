/*
      对象相互赋值的一些关系：
    引入的赋值：指向同一个对象，相互之间会影响；
    对象的浅拷贝：只是浅层的拷贝，内部引入对象时，依然会相互影响；
    对象的深拷贝：两个对象不再有任何关系，不会相互影响；

      通过 JSON.parse 可以实现深拷贝
    这种深拷贝的方式其实对于函数、Symbol等是无法处理的；
    并且如果存在对象的循环应用，也会报错的；
*/