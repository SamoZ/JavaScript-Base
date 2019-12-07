/** 
 * 给 Object.prototype 添加一个不可枚举的 extend 方法
 * 这个方法继承自调用它的对象，将作为参数传入的对象的属性一一复制
 * 除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性
 * 参数对象的所有自有属性(包括不可枚举属性)也会一一复制
*/
Object.defineProperty(Object.prototype, "extend", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(o) {
        // 得到所有的自属性，包括不可枚举属性
        var names = Object.getOwnPropertyNames(o);
        for (var i = 0; i < names.length; i++) {
            // console.log(this); // 谁调用指向谁
            // 如果属性已存在，则跳过
            if (names[i] in this) continue;
            // 获取 o 中的属性的描述符
            var desc = Object.getOwnPropertyDescriptor(o, names[i]);
            Object.defineProperty(this, names[i], desc);
        }
    }
})