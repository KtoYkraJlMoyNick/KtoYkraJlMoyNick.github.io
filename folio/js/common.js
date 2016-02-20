(function () {
	var mainNav = document.querySelector(".main-nav"),
		linkNav = mainNav.querySelectorAll(".main-nav__link"),
		contentToggle = document.querySelector(".content__toggle"),
		checkboxHidden = document.querySelector(".content__checkbox"),
		toggle = document.querySelector(".toggle"),
		heightCtrl = document.querySelector(".heightCtrl-1"),
		activeLinkNav = mainNav.querySelector(".main-nav__link--active");

	for( var i=0; i< linkNav.length; i++) {
		linkNav[i].addEventListener("click", function () {
			activeLinkNav.classList.remove("main-nav__link--active");
			this.classList.add("main-nav__link--active");
			activeLinkNav = this;
		})
	};
	contentToggle.addEventListener("click", function(){
		if ((checkboxHidden.checked)) {
			toggle.classList.remove("wrap-up");
			toggle.classList.add("wrap-down");

		} else {
			toggle.classList.remove("wrap-down");
			toggle.classList.add("wrap-up");
		}
	});
})();

