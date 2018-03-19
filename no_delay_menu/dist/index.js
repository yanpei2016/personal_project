'use strict';

var menu = {
    init: function init() {
        this.setEvent();
    },
    setEvent: function setEvent() {
        var _demo = $('#demo'),
            // 左侧的列表元素
        _activeLeft = null,
            // 左侧活跃菜单
        _activeRight = null; // 右侧活跃菜单

        _demo.on('mouseover', 'li', function () {
            var _id = $(this).data('id');
            if (_activeLeft) {
                _activeLeft.removeClass('active');
                _activeRight.removeClass('active');
            }

            _activeLeft = $(this);
            _activeRight = $('#' + _id);
            _activeLeft.addClass('active');
            _activeRight.addClass('active');
        }).on('mouseleave', 'li', function () {
            _activeLeft.removeClass('active');
            _activeRight.removeClass('active');
            _activeLeft = _activeRight = null;
        });
    }
};
menu.init();
//# sourceMappingURL=index.js.map