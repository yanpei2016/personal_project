let tab = {
    init() {
        // this.switchTab('mouseover'), // 实时切换
        // this.switchTabDelay('mouseover') // 演示切换  用户体验效果更好
        this.autoSwitch()
    },

    // 鼠标移入/点击 切换tab
    switchTab(_type) {
        let _tabTit = $('tab-tit'),
            _item = _tabTit.getElementsByClassName('tab-item'),
            _tanInfo = $('tab-info'),
            _info = _tanInfo.getElementsByClassName('tab-info');

        if (_item.length != _info.length) return; // 保护作用

        for (let i = 0, len = _item.length; i < len; i++) {
            _item[i].setAttribute('data-index', i);

            addEvent(_item[i], _type, function () {
                let _that = this;

                let _index = this.getAttribute('data-index');

                for (let j = 0, _len = _item.length; j < _len; j++) {
                    // 重置状态
                    _item[j].className = 'tab-item';
                    _info[j].className = 'tab-info';
                }
                // 更新active的状态
                _that.className += ' active';
                _info[_index].className += ' active'
            })
        }
    },
    // 鼠标移入/点击 延时切换tab
    switchTabDelay(_type) {
        let _tabTit = $('tab-tit'),
            _item = _tabTit.getElementsByClassName('tab-item'),
            _tanInfo = $('tab-info'),
            _info = _tanInfo.getElementsByClassName('tab-info'),
            timmer = null;

        if (_item.length != _info.length) return; // 保护作用

        for (let i = 0, len = _item.length; i < len; i++) {
            _item[i].setAttribute('data-index', i);

            addEvent(_item[i], _type, function () {
                let _that = this;

                let _index = this.getAttribute('data-index');

                if (timmer) {
                    clearTimeout(timmer);
                    timmer = null
                }

                timmer = setTimeout(function () {

                    for (let j = 0, _len = _item.length; j < _len; j++) {
                        // 重置状态
                        _item[j].className = 'tab-item';
                        _info[j].className = 'tab-info';
                    }
                    // 更新active的状态
                    _that.className += ' active';
                    _info[_index].className += ' active'
                }, 300)

            })
        }
    },

    // 自动切换
    autoSwitch() {
        let _tabTit = $('tab-tit'),
            _item = _tabTit.getElementsByClassName('tab-item'),
            _tanInfo = $('tab-info'),
            _info = _tanInfo.getElementsByClassName('tab-info'),
            timmer = null,
            _len = _item.length,
            _index = 0;

        if (_len != _info.length) return; // 保护作用

        for (let i = 0; i < _len; i++) {
            _item[i].setAttribute('data-index', i);

            addEvent(_item[i], 'mouseover', function () {

                let _targetIndex = this.getAttribute('data-index');
                if(timmer) {
                    clearInterval(timmer);
                    timmer = null
                }
                changeType(_targetIndex);

                _index = _targetIndex //  确保自动轮播时  是从当前指针开始
            });

            addEvent(_item[i], 'mouseout', function () {
                timmer = setInterval(autoPlay, 2000)
            })
        }


        // 当用户操作过快时  页面可能同时开启多个定时器
        //  性能消耗增加 影响用户体验
        // 清除定时器的影响
        if(timmer) {
            clearInterval(timmer);
            timmer = null
        }

        timmer = setInterval(autoPlay, 2000)

        // 自动跳转
        function autoPlay() {
            _index++
            if (_index >= _item.length) {
                _index = 0
            }
            changeType(_index)
        }
        // 更改显示的状态
        function changeType(_index) {
            for (let j = 0; j < _len; j++) {
                // 重置状态
                _item[j].className = 'tab-item';
                _info[j].className = 'tab-info';
            }
            // 更新active的状态
            _item[_index].className += ' active';
            _info[_index].className += ' active'
        }
    }

};

tab.init()

// id选择器
function $(_id) {
    return ( typeof _id === 'string') ? document.getElementById(_id) : _id;
}


// 兼容事件绑定
function addEvent(_target, _type, _fn) {
    if (_target.addEventListener) {
        _target.addEventListener(_type, _fn)
    } else {
        _target.attachEvent('on' + _type, _fn)
    }
}