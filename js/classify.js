  $(function() {
      var jdCategory = new JdCategory();
      // 1. 初始化左侧滑动
      jdCategory.initLeftSlide();
      // 2.初始化右侧滑动
      jdCategory.initRightSlide();
      // 3.左侧点击吸顶效果
      jdCategory.leftCeiling();
  });


  // 把这些方法都放在构造函数原型里面，避免变量名污染
  var JdCategory = function() {

  }
  JdCategory.prototype = {
      //初始化左侧滑动
      initLeftSlide: function() {
          var swiper = new Swiper('#categoryLeft .swiper-container', {
              direction: 'vertical', //滑动方向
              slidesPerView: 'auto', //轮播图宽高自适应
              freeMode: true, //是否开启弹簧效果
              scrollbar: {
                  el: '.swiper-scrollbar', //添加滚动条
              },
              mousewheel: true, //允许鼠标滚轮滚动;
          });
      },
      //左侧点击吸顶效果
      leftCeiling: function() {
          $ul = $('#categoryLeft ul');
          $lis = $ul.children();
          // console.log($lis);
          $lis.each(function(index, ele) {
              $(ele).attr('index', index);
          });
          $ul.on('tap', function(e) {
              $li = $(e.target).parent();
              //子元素高度
              $liHeight = $li.height();
              //当前移动的高度
              $index = $li.attr('index');
              $moveHeight = -$liHeight * $index;
              // 检测最大距离
              $maxHeight = $('#categoryLeft').height() - $ul.height();
              console.log($maxHeight);
              if (Math.abs($moveHeight) < Math.abs($maxHeight)) {
                  $('#categoryLeft .swiper-wrapper').css('transform', 'translate3d(0px, ' + $moveHeight + 'px, 0px)');
              } else {
                  $('#categoryLeft .swiper-wrapper').css('transform', 'translate3d(0px, ' + $maxHeight + 'px, 0px)');
              }
              $('#categoryLeft .swiper-wrapper').css('transition-duration', '300ms');
              // 再使用排他思想，添加active类
              $lis.removeClass('active');
              $li.addClass('active');
          })


      },
      //初始化右侧滑动
      initRightSlide: function() {
          var swiper = new Swiper('.swiper-container', {
              direction: 'vertical', //滑动方向
              slidesPerView: 'auto', //轮播图宽高自适应
              freeMode: true, //是否开启弹簧效果
              scrollbar: {
                  el: '.swiper-scrollbar', //添加滚动条
              },
              mousewheel: true, //允许鼠标滚轮滚动;
          });
      }
  }
