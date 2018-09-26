/*等页面加载完毕后执行的函数*/
window.addEventListener('load', function() {
    /*顶部搜索js部分*/
    var header = document.querySelector('#header');
    window.addEventListener('scroll', scroll);
    scroll();

    function scroll() {
        var scrollTop = document.documentElement.scrollTop;
        var slideHeight = document.querySelector('#shideshow img').offsetHeight;
        var opacity = scrollTop / slideHeight;
        if (opacity > 1) {
            header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
        } else {
            header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
        }
    }
    //初始化轮播图代码
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        }
    })

    /*秒杀倒计时*/
    // 获取未来秒数
    var futureTime = Math.floor(new Date(2018, 8, 22, 22, 00, 00).getTime() / 1000);
    /* 获取当前时间的秒数*/
    var nowTime = Math.floor(new Date().getTime() / 1000);
    /*获取未来时间-当前时间的秒杀的时间差*/
    var time = futureTime - nowTime;
    var spans = document.querySelectorAll('.skillTime span');
    // 开启定时器
    setInterval(function() {
        time--;
        if (time <= 0) {
            time = 7200;
        }
        /*获取时分秒*/
        var hour = Math.floor(time / 3600);
        var minute = Math.floor(time % 3600 / 60);
        var section = Math.floor(time % 60);
        // 把计算好的时分秒放到span里面
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(section / 10);
        spans[7].innerHTML = Math.floor(section % 10);
    }, 1000)



});
