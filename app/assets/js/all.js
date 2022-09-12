$(function () {
    $('#searchBtn').on("click" , function(){
        $('#searchFrame').removeClass('d-none');
    });

    $('#backBtn').on("click" , function(){
        $('#searchFrame').addClass('d-none');
    })
});

var indexSwiper = new Swiper ('#indexSwiper', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 自動切換
    autoplay:true,

    // pagination換頁
    pagination : {
        el: '.swiper-pagination',
        clickable : true,
        bulletClass : 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },

});

var artworksSwiper = new Swiper ('#artworksSwiper', {
    loop: true, // 循环模式选项

    slidesPerView: 2,
    spaceBetween: 16,
    
    // 斷點時多欄
    breakpoints: {
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    },

    // 自動切換
    autoplay:true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // pagination換頁
    pagination : {
        el: '.swiper-pagination',
        clickable : true,
        bulletClass : 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    
})     