function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.prototype) {
		return Object.create(p);
	}
	var t = typeof p;
	if (t !== 'object' || t !== 'function') throw TypeError();
	function f() {}
	f.prototype = p;
	return new f();
}
// var o = { x: 1, y: 2};
// var o1 = inherit(o);
// console.log(o1);
// o1.x = 3;
// console.log(o, o1);
