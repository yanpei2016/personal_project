'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
* 声明变量的方式
* 1. var  声明全局变量
* 2. let 声明局部变量
* 3. const  声明常量
*
* */

/*
* 解构赋值
* 1.对象
* 2.数组
* 3.字符串
* */
{
	var _ref = [1, 3],
	    a = _ref[0],
	    b = _ref[1],
	    _ref$ = _ref[2],
	    c = _ref$ === undefined ? 'default' : _ref$;

	console.log(a + b + c);
}

/*
* 对象扩展运算符...   将数组转为用逗号分隔的参数序列
* rest运算符
*
* */

{
	var _console;

	var arr = [1, 2, 3, 4];
	(_console = console).log.apply(_console, arr);
}

/*
* 模板字符串
* */

{
	var _a2 = 3,
	    _b2 = 5;
	console.log('' + (_a2 + _b2));
}

/*
* 字符串的查找 include  返回布尔值
* */

{
	var s = '你好',
	    str = '我是技术小白，你好';
	console.log(str.indexOf(s));
	console.log(str.includes(s));
	console.log(str.startsWith(s));
	console.log(str.endsWith(s));
}

/*
* 复制字符串 repeat
* */

{
	console.log('abc'.repeat(3));
}

/*
* 数字操作
* Number.isFinite()  验证是否为数字 返回布尔值
* Number.isNAN()  判断NAN值
* Number.isInteger()  验证数字是否为整数
* Number.parseInt()  转换为整数  向下取整
* Number.parseFloat()  验证数字是否为整数
*
* 最大安全整数  Number.MAX_SAFE_INTEGER
* 最小安全整数  Number.MIN_SAFE_INTEGER
*
* Number.isSafeInteger()  判断是否为安全数字
* */

{
	console.log(Number.isFinite('3213123'));
	console.log(Number.isInteger(121));
	console.log(Number.parseInt(121.9));
	console.log(Number.parseFloat(121));
}

/*
* JSON  数组格式装换
*
* Array.from() : 直接将json格式的数据转换成数组
*
* Array.of(): 将文本或者变量直接转换成数组  效率比eval 高
*
* find() 实例的方法 相当于是遍历数组 回调函数有三个参数 value index arr
*
* fill() 实例的方法  填充 三个参数： 填充的元素  开始位置 结束位置
*                   包含开始位置  不包含结束位置
*                   替换！！！！！！！！！！！！！！
*
* for....of  循环数组
*
*       arr.keys()  数组的指针
*       arr.entries()  包含数组的val和指针index
*       entries()实例方发生成的是Iterator形式的数组，
*       那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值
*
* */

{
	var json = {
		'0': '数据1',
		'1': '数据2',
		'2': '数据3',
		length: 3
	},
	    _arr = [1, 2, 3, 4, 5, 6, 7, 8],
	    _a3 = void 0;
	_a3 = Array.from(json);
	console.log(_a3);
	console.log(Array.of(1, 2, 3, 45, 65, 3, 2));
	console.log(Array.of('dasd', 212, 23, 'dasdasd'));
	// let arr = [1,2,3,4,5,6];
	// for(let i of arr) {
	//     console.log(i)
	// };
	// arr.forEach(function (i) {
	//     console.log(i)
	// })
	console.log(Array.from(JSON.parse(JSON.stringify(json))));

	_arr.find(function (value, index, arr) {
		if (value > 5) {
			console.log(value + 'sss');
		}
	});

	_arr.fill('填充的元素', 3, 5);
	console.log(_arr);
	var _entries = _arr.entries();

	console.log(_entries);
	console.log(_entries.next().value);
	console.log(_entries.next().value);
	console.log(_entries.next().value);
	console.log(_entries.next().value);
	console.log(_entries.next().value);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _arr.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    _index = _step$value[0],
			    _val = _step$value[1];

			console.log(_index + ',' + _val);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = _arr.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var index = _step2.value;

			console.log(index + 'index');
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}

/*
* 箭头函数
*   1.抛出错误
*   2.获取需要传递参数的个数
*   3.es6准许携带默认参数
*       注意： 1.携带默认参数是不能使用严格模式的 两者是相互冲突的
*   4.箭头函数不能当做够着函数来使用
*
* */

{
	var result = function result(a, b) {
		if (a == 0) {
			throw new Error('输入有误');
		}
		return a + b;
	};

	console.log(result(2));
	console.log(result.length);

	// 最简单的箭头函数
	(function (a, b) {
		return a + b;
	});

	//===>
	(function (a, b) {
		return a + b;
	});
}

/*
* 对象的函数解构
* */

{
	var _Date = function _Date(_ref2) {
		var a = _ref2.a,
		    _ref2$b = _ref2.b,
		    b = _ref2$b === undefined ? '默认值' : _ref2$b;

		console.log(a + ',' + b);
	};

	var _json = {
		a: 'JSshang',
		b: '技术殇'
	};

	;

	_Date(_json);
}

/*
* 数组的函数解构
* */

{
	var nihao = function nihao(a, b, c) {

		console.log(a);
		console.log(b);
		console.log(c);
		return a + ',' + b + ',' + c;
	};

	var _arr2 = ['参数1', '参数2', '参数3'];

	nihao.apply(undefined, _arr2);
}

/*
* in的用法
*   判断对象或者数组里面是否有某个值
* */

{
	var _arr3 = [1, 2, 3, 4, 5, 6];
	console.log(3 in _arr3);

	var arr1 = [,,,,,,];
	console.log(arr1.length);

	// 这里的0指的是数组下标为0的位置是否有值。
	console.log(0 in arr1);
	console.log(0 in _arr3);
}

/*
* 数组的遍历方法
*   1. forEach(val, index)
*   2. filter() 过滤  也有循环的作用 循环整个数组
*       定义过滤函数  可返回满足过滤条件的数组
*
*   3. some() 过滤  循环整个数组
*       注意：如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
             如果没有满足条件的元素，则返回false。

    4. map()  替换？
 * */

{
	var _arr4 = [3, 4, 2, 5, 7, 83, 2, 4, 6, 5];
	_arr4.forEach(function (val, index) {
		console.log(index + ': ' + val);
	});
	var yp = [],
	    YP = [];
	var arrResult = _arr4.filter(function (i) {
		return i > 5;
	});

	console.log(arrResult);

	var result2 = _arr4.some(function (i) {
		return i > 100;
	});

	console.log(result2);

	var resutl = _arr4.map(function (x, y) {
		return x + y;
	});
	console.log(resutl);
}

/*
* 数组转换字符串
*
*   1.join(); 可以自定义连接模式
*   2.toString() 默认只能是逗号连接
*
* */

{
	var _arr5 = [1, 2, 3, 45, 6, 3],
	    _str = _arr5.join('|'),
	    _str1 = _arr5.toString();
	console.log(_str);
	console.log(_str1);
}

/*
* 对象方法
*   1. 允许将声明的变量  直接复制给对象  对象赋值
*   2. 对象key构建
*   3. 匿名函数赋值
*   4. Object.is() 对象比较
*   	与 === 的区别
*   	===为同值相等，is()为严格相等
*   5. Object.assign() 合并对象
* */

{
	var _a4 = 1,
	    _b3 = 2;
	var obj = { a: _a4, b: _b3 };
	console.log(obj);

	var key = 'skill',
	    obj1 = _defineProperty({}, key, 'key');
	console.log(obj1);

	var obj2 = {
		add: function add(a, b) {
			return a + b;
		}
	};
	console.log(obj2.add(1, 3));

	console.log(+0 === -0); //true
	console.log(NaN === NaN); //false
	console.log(Object.is(+0, -0)); //false
	console.log(Object.is(NaN, NaN)); //true

	var _a = { a: 'jishu' },
	    _b = { b: '技术' },
	    _c = { c: '殇' };
	var _d = Object.assign(_a, _b, _c);
	console.log(_d);
}

/*
* Symbol 是一种原始数据类型
*   1. 声明
*   	let g = Symbol('iColor');
*   	Symbol 值通过Symbol函数生成
*   2. Symbol函数前不能使用new命令
*   3. 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
*   4. Symbol对象元素的保护作用
	   在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用Symbol进行保护。
*
* */

{
	var g = Symbol();
	console.log(g);
	console.log(g.toString());

	var _key = Symbol('key'),
	    _obj2 = _defineProperty({
		key: '你好'
	}, _key, '技术');

	console.log(_obj2[_key]);
	console.log(_obj2.key);
	console.log(_obj2);

	var person = {
		sex: 'man',
		name: 'jon',
		age: 12
	},
	    Marry = Symbol('marry');
	person[Marry] = true;

	// Marry  属性不会被循环显示出来！！！！
	console.log(person);
	for (var i in person) {
		console.log(person[i]);
	}
}

/*
* 	Set  和 WeakSet 数据结构
*		相对来说  使用set  更多
* 	1. Set数据结构是以数组的形式构建的
* 		Set 数据结构内部不允许出现重复的数据    去重
* 	2. 增 add 删 delete 查 has  清空 clear
*   3. 循环
*   	for...of..
*   	forEach()
*   4. size  获取set值的个数
* */

{
	var set = new Set([1, 2, 3, 5, 32, 2, 4, 45, 6, 76, 3, 2, 1, 3, 5, 6, 4, 2]),
	    _arr6 = [];
	set.add('jishushang');
	set.delete(1);
	// set.clear();
	console.log(set);
	console.log(set.has(1));
	console.log(set.has(2));

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = set[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _i = _step3.value;

			_arr6.push(_i);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	console.log(_arr6);
	console.log(set.size);

	set.forEach(function (i) {
		return console.log(i);
	});
}

/*
* WeakSet
*
* 	1. 声明
*  		let g = new WeakSet();
*  	new 关键字声明  不能传递参数
*  	2. 也不允许重复值出现
* */

{
	var _g = new WeakSet();
	var _obj4 = {
		a: 'jishu',
		b: '技术',
		c: '殇'
	};
	_g.add(_obj4);
	console.log(_g);
}

{
	var weakObj = new WeakSet();
	var _obj5 = { a: 'jspang', b: '技术胖' };
	var _obj6 = _obj5;

	weakObj.add(_obj5);
	weakObj.add(_obj6);

	console.log(weakObj);
}

/*
* Map
*
* 1. 设置值 .set(key, value)
* 2. 获取值  .get(key)
* 3. 删 .delete()
* 4. .size 属性  返回map的值的个数
* 5. has()  查找是否有某个元素
* 6. .clear()  清除所有的元素
* */

{
	var _json2 = {
		a: 'jishu',
		b: '技术',
		c: '技术殇'
	},
	    map = new Map(),
	    map1 = new Map();
	map.set('json', _json2);
	map1.set(_json2, 'json');
	map1.delete(_json2);
	console.log(map);
	console.log(map1);
	console.log(map1.get(_json2));
	console.log(map.get('json'));
	console.log(map.size);
	console.log(map1.size);
}

/*
* Proxy
* Proxy 可以理解成，在目标对象之前架设一层“拦截”，
* 外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，
* 可以对外界的访问进行过滤和改写。
* Proxy 这个词的原意是代理，
* 用在这里表示由它来“代理”某些操作，可以译为“代理器”。
*
*
* 1、声明
* 	new Proxy（{},{}）;
* 	第一个花括号就相当于我们方法的主体，
* 	后边的花括号就是Proxy代理处理区域
*
* 	代理区域函数：
* 		get : 	target：得到的目标值
				key：目标的key值，相当于对象的属性
				property：这个不太常用，

		set :	target:目标值。
				key：目标的Key值。
				value：要改变的值。
				receiver：改变前的原始值。
*
*
* */

{
	var pro = new Proxy({
		add: function add(val) {
			return val + 10;
		},
		name: 'I am Jspang'
	}, {
		get: function get(target, key, property) {
			console.log('我在获取值');
			return target[key];
		},
		set: function set(target, key, value, receiver) {
			console.log('我在设置值');
			return target[key] = value;
		}
	});

	console.log(pro.name);
	pro.name = 'jishushang';
	console.log(pro.name);
}
