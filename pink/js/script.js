(function() { 
    if (!("FormData" in window)) { 
    return; 
    } 
    var form = document.querySelector(".travel-form"); 
    var successModal = document.querySelector(".modal-content--mod");
    var closeModal = successModal.querySelector(".modal-content__link");
    form.addEventListener("submit", function(event){ 
        event.preventDefault(); 
        var data = new FormData(form); 
        var xhr = new XMLHttpRequest( ); 
        var time = (new Date( )).getTime( ); 
        xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time); 
        que.forEach(function(element){
            data.append("images", element.file);
        }); 
        xhr.addEventListener("readystatechange", function( ) { 
            if (xhr.readyState == 4) { 
					console.log(xhr.responseText);
                    successModal.classList.add("modal-content--show"); 
                } 
            }); 
        xhr.send(data); 
    }); 
    closeModal.addEventListener("click", function(event){
        event.preventDefault();
        successModal.classList.remove("modal-content--show");
    });
    if ("FileReader" in window) {
        var uploadImgBtn = form.querySelector("#file-upload"),
            que = [];
            uploadImgBtn.addEventListener("change", function(){
                var files = this.files;
                for (var i=0; i<files.length;i++) {
                    preview(files[i]);
                }
                this.value = "";
            });
        function preview(file) {
            if ( file.type.match(/image.*/)) {
                var reader = new FileReader();
                reader.addEventListener("load", function(event){
                    var template = document.querySelector("#template").innerHTML,
                        parent = form.querySelector(".photos-form__attached");
                    Mustache.parse(template);
                    var html = Mustache.render(template, {
                        "source": event.target.result,
                        "name":   file.name
                    });
                    var div = document.createElement("div");
                    div.classList.add("photos-form__item");
                    div.innerHTML = html; 
                    parent.appendChild(div);
                    div.querySelector(".photos-form__remove-photo").addEventListener("click", function() {
                        removePreview(div);
                    });
                    que.push({
                        "file": file,
                        "div": div
                    });
                })
                reader.readAsDataURL(file);
            }
        }
        function removePreview(div) {
            que = que.filter(function(element) {
                return element.div != div;
            });
            div.parentNode.removeChild(div);
        }   
    }
})();