$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(document).ready(function(){
	function heightDetect(){
		$(".main-header").css("min-height", $(window).height());
	};
	heightDetect();
	$( window ).resize(function() {
 		 heightDetect();
	});
	$(".main-header").parallax(	{imageSrc: 'img/bg.jpg'});
	$(".c-hamburger").on("click", function(){
		$(".main-header__nav-wrap").fadeToggle("linear");
	});
	$(".main-nav__link").on("click", function(){
		$(".main-header__nav-wrap").fadeToggle("linear");
		$(".is-active").removeClass("is-active");
	});
	$("a[href*='#']").mPageScroll2id();
});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
