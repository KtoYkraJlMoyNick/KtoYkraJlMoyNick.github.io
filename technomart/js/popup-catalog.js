 var   linkBasket = document.querySelectorAll(".action-button-buy"), 
         popupBasket = document.querySelector(".popup-add-basket"),
         closechestBasket = popupBasket.querySelector(".popup-close"),
         closebuttonBasket = popupBasket.querySelector(".popup-btn-close"),
         searchField = document.querySelector(".search-field");

 for (i = 0; i < linkBasket.length; i ++) {
    linkBasket[i].addEventListener("click", function(event) {
        popupBasket.classList.add("popup-show");
    });
}

 closechestBasket.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popupBasket.classList.remove("popup-show"); 
 });

 closebuttonBasket.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popupBasket.classList.remove("popup-show"); 
 });

 window.addEventListener("keydown", function(event) { 
	if (event.keyCode == 27) { 
		if (popupBasket.classList.contains("popup-show")) { 
			popupBasket.classList.remove("popup-show"); 
			} 
		} 
 });

searchField.addEventListener("focus", function() {
     var parent = document.getElementById("search");
     parent.classList.add("red-icon-search");
 });

 searchField.addEventListener("blur", function() {
     var parent = document.getElementById("search");
     parent.classList.remove("red-icon-search");
 });

 searchField.addEventListener("mouseover", function() {
     var parent = document.getElementById("search");
     parent.classList.add("white-icon-search");
 });

 searchField.addEventListener("mouseout", function() {
     var parent = document.getElementById("search");
     parent.classList.remove("white-icon-search");
 });