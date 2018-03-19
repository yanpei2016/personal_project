(function () {
    let rating = {
        init(id, num) {
            let $rating = $(id),
                $item = $rating.find('.rating-item'),
                _num = num,
                _this = this;

            _this.lightOn($item, _num)
            // 鼠标事件  点亮星星
            $rating.on('mouseover', '.rating-item', function () {
                let _index = $(this).index() + 1;
                /*
                *   根据指针，遍历循环 点亮星星
                * */
                _this.lightOn($item, _index)
            }).on("mouseleave", function () {
                _this.lightOn($item, _num)
            }).on('click', '.rating-item', function () {
                _num = $(this).index() + 1;
                /*
                *   根据指针，遍历循环 点亮星星
                * */
                _this.lightOn($item, _num)
            })
        },
        lightOn(el, num) {
            // 点暗星星
            el.each(function () {
                $(this).removeClass('active')
            });

            // 根据指针 ，点亮星星
            for (let i = 0; i < num; i++) {
                $(el[i]).addClass('active')
            }
        }
    };

    // 扩展 jquery 插件
    $.fn.extend({
        rating: function (num) {
            return this.each(function () {
                rating.init(this,num)
            })
        }
    })
})()




