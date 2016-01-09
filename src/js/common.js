$(document).ready(function(){
    $(".main-nav__tab:first-child a").click(function(event){
        event.preventDefault();
        $(".main-nav__link--active").removeClass("main-nav__link--active");
        $(this).addClass("main-nav__link--active");
        $(".slider__show").removeClass("slider__show");
        $(".slider__slide:first-child").addClass("slider__show");
    });
    $(".main-nav__tab:nth-child(2) a").click(function(event){
        event.preventDefault();
        $(".main-nav__link--active").removeClass("main-nav__link--active");
        $(this).addClass("main-nav__link--active");
        $(".slider__show").removeClass("slider__show");
        $(".slider__slide:nth-child(2)").addClass("slider__show");
    });
    $(".main-nav__tab:nth-child(3) a").click(function(event){
        event.preventDefault();
        $(".main-nav__link--active").removeClass("main-nav__link--active");
        $(this).addClass("main-nav__link--active");
        $(".slider__show").removeClass("slider__show");
        $(".slider__slide:nth-child(3)").addClass("slider__show");
    });
});