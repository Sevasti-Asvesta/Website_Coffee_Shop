$(function() {
    console.log( "NAV ready!" );
    let ourteam = [
        {
            "url": "index.html",
            "title": "Home"
        },
        {
            "url": "menu.html",
            "title": "Menu"
        },
        {
            "url": "aboutus.html",
            "title": "About our Coffee"
        },
        {
            "url": "ourteam.html",
            "title": "Meet our Team"
        },  
        {
            "url": "contactus.html",
            "title": "Contact"
        },
    ]
   
    $.each(ourteam, function(key, nav) {
        console.log(nav.title)
        $("#navigation").append(`<li class="nav-item">
                    <a class="nav-link" href="${nav.url}">${nav.title}</a>
                </li>`);
    });


    $("#text").append(`<div class="col-md-6">
    <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_350/v1633524236/brooke-cagle-9fHMo1-5Io8-unsplash_hgydmu.jpg" /></div>
    <div class="col-md-6"><h1 id="fontawesome">Amanda Adams </br> Barista</h1>
    <p class="p1"> The coolest coffee maker you've ever found. She knows how to wow her clients with a cup of fresh coffee.</p></div>`);
 
    $("#text2").append(`<div class="col-md-6">
    <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_500/v1633523837/akshar-dave-sNut2MqSmds-unsplash_l9d3me.jpg" /></div>
    <div class="col-md-6"><h1 id="fontawesome">John Smith </br> Musician</h1>
    <p class="p1">He creates the best mood in the Cafe and makes you happy.</p></div>`);
 
    $("#text3").append(`<div class="col-md-6">
    <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_500/v1633524050/brooke-cagle-NoRsyXmHGpI-unsplash_b5bikm.jpg" /></div>
    <div class="col-md-6"><h1 id="fontawesome">Ashley Cage </br> Purchasing</h1>
    <p class="p1">She knows exactly what you want and will offer the coffee for your taste.</p></div>`);
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//footer
$("#footer").append(`<div class="container-fluid"><div class="row"><div class="col-md-6"><p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
<p> find us in:<i class="fab fa-instagram" id="font"></i><i class="fab fa-facebook-square" id="font"></i><i class="fab fa-twitter-square" id="font"></i></p></div>
<div class="col-md-6"><ol>
<li class="list"><p><a href="https://en.wikipedia.org/wiki/Cookie" target="_blank">Cookies Policy</a></p></li>
<li class="list"><p><a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">Privacy Policy</a></p></li>
<li class="list"><p>©  2020 Company - All Rights Reserved.</p></li>
</ol>
</div></div></div>`);