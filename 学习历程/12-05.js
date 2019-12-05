/**
 * 把 p 中的可枚举属性复制到 o 中，并返回 o
 * 如果 p 和 o 中含有同名属性，则覆盖 o 中的属性
 * 这个函数并不处理 getter he setter 以及复制属性
 *
 * @param {*} o
 * @param {*} p
 */
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop]
    }
    return o;
}

/**
 * 将 p 中的可枚举属性复制到 o 中，并返回 o
 * 如果 o 和 p 中有同名的属性，o 中的属性将不受影响
 * 这个函数并不处理 getter he setter 以及复制属性
 *
 * @param {*} o
 * @param {*} p
 * @returns
 */
function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty(prop)) continue;
        o[prop] = p[prop]
    }
    return o;
}

/**
 * 如果 o 中的属性在 p 中没有同名属性，则从 o 中删除这个属性
 * 返回 o
 *
 * @param {*} o
 * @param {*} p
 * @returns
 */
function restrict(o, p) {
    for (prop in o) {
        if (!(prop in p)) delete o[prop];
    }
    return o;
}

/**
 * 如果 o 中的属性在 p 中存在同名属性，则从 o 中删除这个属性
 * 返回 o
 *
 * @param {*} o
 * @param {*} p
 * @returns
 */
function subtract(o, p) {
    for (prop in p) {
        delete o[prop];
    }
    return o;
}

/**
 * 返回一个新对象，这个对象拥有同时在 o 的属性和 p 的属性
 * 如果 o 和 p 中有同名属性，使用 p 中的属性
 *
 * @param {*} o
 * @param {*} p
 * @returns
 */
function union(o, p) {
    return extend(extend({}, o), p);
}

/**
 * 返回一个新对象，这个对象拥有同时存在 o 和 p 中的属性
 * 很像求 o 和 p 的交集，但 p 中属性的值被忽略
 *
 * @param {*} o
 * @param {*} p
 * @returns
 */
function intersection(o, p) {
    return restrict(extend({}, o), p);
}

/**
 * 返回一个数组，这个数组包含的是 o 中可枚举的自有属性的名字
 *
 * @param {*} o
 * @returns
 */
function keys(o) {
    if (typeof o !== 'object') throw TypeError();
    var result = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}