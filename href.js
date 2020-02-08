about = document.getElementById("about_button");
offer = document.getElementById("offer_button");
contact = document.getElementById("contact_button");
var redirect = function(e){
    if(e.id == 1){
        window.location.href = "#about";
    }else if(e.id == "offer_button"){
        window.location.href = "#asor";
    }else if(e.id == "contact_button"){
        window.location.href = "#contact";
    }
}

about.addEventListener("click", function (){redirect(about[0])});
offer.addEventListener("click", function (){redirect(offer)});
contact.addEventListener("click", function (){redirect(contact)});

