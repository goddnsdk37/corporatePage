//슬라이드시 텍스트 등 애니메이션 효과적용시
//1.slick-active 클래스를 사용하여 css 애니메이션을 적용하거나,
//2.slideChange 이벤트에 애니메이션 스크립트 코드를 작성 


//main visual slide  -------------------------------------------
const swiper1 = new Swiper("#visual", {
    loop: true,
    effect: "fade",
    simulateTouch: false,
    // on:{
    //     slideChangeTransitionStart: function () {
    //             //텍스트 숨김
    //             $('.swiper-slide-active .mainCon h3').css({
    //                 opacity: 0
    //             });
    //         },
    //     slideChangeTransitionEnd: function () {
    //             //텍스트 표시
    //             $('.swiper-slide-active .mainCon h3').stop().animate({
    //                 opacity: 1,
    //             }, 400);
    //         }
    // },
    speed: 700,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// $(function(){
//     $('.swiper-slide-active .mainCon h3').animate({
//         opacity:1
//     });
// }); 


//Sliding Text Event --------------------------------------------------------------------
slidingTxt(".txt1", 600, 0);
slidingTxt(".txt2", 600, 300);

function slidingTxt(el, speed, delay) {
    var ease = "easeInExpo";
    var bgColor = $(el).children("span").css("color");

    $(el).append(
        $("<em class='mask'>")
            .css({
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: bgColor,
                position: "absolute",
                top:0,
                left:"-100%"
            })
    );

    $(el).find(".mask").stop().delay(delay).animate({
        left: 0
    }, speed, ease, function(){
        $(this).prev("span").css({ opacity: 1});
        $(this).stop().animate({ left : "100%"},speed, ease ,function(){
            $(this).remove();
        })
    });
}


    
//mainGallery slide  -------------------------------------------
const swiper = new Swiper("#galleryView", {
    effect: "coverflow",
    loop: true,
    direction:'horizontal',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50, //슬라이드 회전각
    stretch: -100, //슬라이더간 거리
    depth: 180, //깊이 효과값
    modifier: 1, //효과 배수
    slideShadows: false, //슬라이더 그림자
    },
    
    pagination: {
    el: ".swiper-pagination",
    type:'fraction'
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});