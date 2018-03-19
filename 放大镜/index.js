let _demo = document.getElementById('demo'),
    _small = document.getElementById('small'),
    _big = document.getElementById('big'),
    _bigImg = document.getElementById('big_img'),
    _tag = document.getElementById('tag'),
    _mask = document.getElementById('mask');

_mask.onmouseover = () => {
    _big.style.display = 'block';
    _tag.style.display = 'block';
};

_mask.onmouseout = () => {
    _big.style.display = 'none';
    _tag.style.display = 'none';
}

_mask.onmousemove = (e) => {

    e = e || window.event;
    let _clientX = e.clientX,
        _clientY = e.clientY,  // 鼠标的指针坐标

        _demoLeft = _demo.offsetLeft,
        _demoTop = _demo.offsetTop, // 父级元素距离浏览器的左边距和上边距

        _left = _clientX - _demoLeft - _tag.offsetWidth / 2,
        _top = _clientY - _demoTop - _tag.offsetHeight / 2; //计算目标元素的位置

    if(_left < 0) {
        _left = 0  // 左边界
    }

    if(_left > _small.offsetWidth - _tag.offsetWidth) {
        _left = _small.offsetWidth - _tag.offsetWidth  // 右边界
    }

    if(_top < 0) {
        _top = 0  // 上边界
    }

    if(_top > _small.offsetHeight - _tag.offsetHeight) {
        _top = _small.offsetHeight - _tag.offsetHeight // 下边界
    }

    _tag.style.left = _left + 'px';
    _tag.style.top = _top + 'px';

    // 同比设置放大图片的位置
    _bigImg.style.left = -_left *( _big.offsetWidth / _small.offsetWidth) + 'px';
    _bigImg.style.top = -_top *( _big.offsetHeight / _small.offsetHeight) + 'px';
}