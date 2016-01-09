 var   linkContact = document.querySelector(".btn-write-us"),
         linkBasket = document.querySelectorAll(".action-button-buy"), 
         popupContact = document.querySelector(".popup-contact-form"),
         popupBasket = document.querySelector(".popup-add-basket"),
         closechestContact = popupContact.querySelector(".popup-close"),
         closebuttonContact = popupContact.querySelector(".popup-btn-close"),
         closechestBasket = popupBasket.querySelector(".popup-close"),
         closebuttonBasket = popupBasket.querySelector(".popup-btn-close"),
         nameField = popupContact.querySelector("[name=name-field]"),
         emailField = popupContact.querySelector("[name=email-field]"),
         form = popupContact.querySelector("form"),
         storageName = localStorage.getItem("nameField"),
         storageEmail = localStorage.getItem("emailField"),
         commentField = popupContact.querySelector("[name=comment-field]"),
         searchField = document.querySelector(".search-field");
 
 linkContact.addEventListener("click", function(event) { 
	event.preventDefault();
	popupContact.classList.add("popup-show");
	if (storageName && storageEmail) { 
		nameField.value = storageName; 
		emailField.value = storageEmail;
		commentField.focus(); 
		} else { 
		nameField.focus(); 
		}
 });
 
 closechestContact.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popupContact.classList.remove("popup-show"); 
 });
 
 closebuttonContact.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popupContact.classList.remove("popup-show"); 
 });
 
 form.addEventListener("submit", function(event) {  
	if (!(nameField.value && emailField.value)) { 
		event.preventDefault(); 
		popupContact.classList.add("popup-error"); 
	} else { 
		localStorage.setItem("nameField", nameField.value);
		localStorage.setItem("emailField", emailField.value);
	}
 });
 
 window.addEventListener("keydown", function(event) { 
	if (event.keyCode == 27) { 
		if (popupContact.classList.contains("popup-show")) { 
			popupContact.classList.remove("popup-show"); 
			} 
		} 
 });
 
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