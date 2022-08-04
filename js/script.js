$(function(){

    $(window).scroll(function(){
        console.log($(window).scrollTop())
    
        if($(window).scrollTop() >300){
    $(".menu").addClass("nav-scroll")
        }else{
            $(".menu").removeClass("nav-scroll") 
        }
    
    
    
        if($(window).scrollTop() >600){
          $(".top-button") .fadeIn()
              }else{
                $(".top-button") .fadeOut()
              }
    
    })


    $(".bg-slider").slick({
        autoplay:true,
        arrows:false,
    })


    $(".phn-slider").slick({
        
        prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
        autoplay:true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplaySpeed:2000,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    })


    $(".brand-slider").slick({
        slidesToShow:5,
        arrows:false,
        autoplay:true,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplaySpeed:2000,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })

    $(".client-slider").slick({
        slidesToShow:1,
        arrows:false,
       dots:true,
       infinite:false,
    })

    AOS.init({
        delay: 50,
        duration: 3000,
    });

    $(".gallery-slider").slick({
        slidesToShow:3,
        centerMode:true,
        prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right next"></i>',

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })

    $('.counter').counterUp();

    $(".top-button").click(function(){
        $("html,body").animate({
          scrollTop:0
        },1000)
        })

})