$(document).ready(function(){
    $(".main-nav__tab:first-child a").click(function(event){
        event.preventDefault();
        activate(".main-nav__tab:first-child a", ".main-nav__link--active", "main-nav__link--active" );
        showSlide(".slider__slide:first-child", ".slider__show", "slider__show");
    });
    $(".main-nav__tab:nth-child(2) a").click(function(event){
        event.preventDefault();
        activate(".main-nav__tab:nth-child(2) a", ".main-nav__link--active", "main-nav__link--active" );
        showSlide(".slider__slide:nth-child(2)", ".slider__show", "slider__show");
    });
    var activate = function(target, elem, activeElem){
        $(elem).removeClass(activeElem);
        $(target).addClass(activeElem);
    };
    var showSlide = function(target, elem, showElem){
        $(elem).removeClass(showElem);
        $(target).addClass(showElem);
    };
});