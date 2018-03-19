'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    var _a = 3,
        _b = 5;
    console.log('' + (_a + _b));
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
        _a2 = void 0;
    _a2 = Array.from(json);
    console.log(_a2);
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
            console.log(value);
        }
    });

    _arr.fill('填充的元素', 3, 5);
    console.log(_arr);
    var _entries = _arr.entries();
    console.log(_entries);
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

    // 这里的0指的是数组下标位置是否为空。
    console.log(0 in arr1);
    console.log(0 in _arr3);
}

/*
* 数组的遍历方法
*   1. forEach(val, index)
*   2. filter() 过滤  也有循环的作用 循环整个数组
*       定义过滤函数  可返回满足过滤条件的额数组
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
