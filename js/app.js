$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });

    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });


    $(window).scroll(function(){

        let sc = $(window).scrollTop();
        if(sc > 100) {
            $(".nav").addClass("sticky");
        }
        else{
            $(".nav").removeClass("sticky");

        }

    });

$('.testimonials-wrapper').slick({
    dorts:false,
    arrow:false,
    autoplay: true,
    autoplaySpeed:3000
});



});