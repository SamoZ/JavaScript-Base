/**
 * 返回传递的任意对象的类
 *
 * @param {*} o
 * @returns
 */
function classof(o) {
    if (o === null) return 'Null';
    if (o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8, -1);
}
