'use strict';

(function () {
    //    构造函数实例化对象
    var Rating = function Rating(el, options) {
        // 构造函数

        if (!$.isPlainObject(options)) {
            // 判断用户输入的是否是纯粹的对象
            throw '请输入合法的配置';
        }
        // 配置默认参数
        var _default = {
            mode: 'whole', // 表示点亮星星的模式  半颗或者整颗（half&&whole）
            num: 2, // 默认点亮两颗星星
            readOnly: false // 是否允许用户进行操作 默认是允许
        };

        this._mode = { // 内置两种模式
            half: 'half',
            whole: 'whole'
        };

        this.$el = $(el);
        this.$item = this.$el.find('.rating-item');
        this.opts = $.extend({}, _default, options);
        this.addHalf = 1; // 是否显示半颗星星 1 表示整颗 0.5 表示半颗


        // 选择显示模式
        switch (this._mode[this.opts.mode]) {
            case 'half':
                this.isHalf = true;
                break;
            case 'whole':
                this.isHalf = false;
                break;
            default:
                this.isHalf = false;
        }

        // 初始化函数
        this.init();
    };

    // 初始化实例对象
    Rating.prototype.init = function () {
        this.LightOn(this.opts.num); // 初始化点亮

        if (!this.opts.readOnly) {
            this.bindEvent(); // 绑定用户交互操作
        }
    };

    // 点亮星星
    Rating.prototype.LightOn = function (num) {
        // 点亮整颗星星
        var _num = void 0,
            _this = this,
            _type = num === parseInt(num);

        _num = _type ? num : parseInt(num);

        lingWhole(_num);
        linghtHalf(_type, _num);

        function lingWhole(num) {
            // 点亮整颗星星
            _this.$item.each(function (index) {
                if (index < num) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
                $(this).removeClass('half');
            });
        }

        function linghtHalf(_halftype, num) {
            // 点亮半颗星星
            if (_halftype) {
                // 表明是整颗星星
                _this.$item.eq(num - 1).removeClass('half').addClass('active');
            } else {
                _this.$item.eq(num).addClass('half');
            }
        }
    };

    // 绑定用户的交互事件
    Rating.prototype.bindEvent = function () {
        var _this = this;

        _this.$el.on('click', '.rating-item', function () {
            _this.opts.num = $(this).index() + _this.addHalf;
            _this.LightOn(_this.opts.num);
        }).on('mouseleave', function () {
            _this.LightOn(_this.opts.num);
        });

        if (this.isHalf) {
            _this.$el.on('mousemove', '.rating-item', function (e) {
                e = e || window.event;
                var _index = void 0;
                if (e.pageX - this.offsetLeft < this.offsetWidth / 2) {
                    // 显示半颗
                    _this.addHalf = 0.5;
                } else {
                    _this.addHalf = 1;
                }
                _index = $(this).index() + _this.addHalf;
                _this.LightOn(_index);
            });
        } else {
            _this.$el.on('mouseover', '.rating-item', function () {
                var _index = $(this).index() + _this.addHalf;
                _this.LightOn(_index);
            });
        }
    };

    // 将构造函数注册到全局变量上去
    window.Rating = Rating;
})();
//# sourceMappingURL=index1.js.map