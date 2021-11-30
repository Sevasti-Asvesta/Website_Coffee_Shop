$(function() {
    console.log( "NAV ready!" );
    let aboutus = [
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
   
    $.each(aboutus, function(key, nav) {
        console.log(nav.title)
        $("#navigation").append(`<li class="nav-item">
                    <a class="nav-link" href="${nav.url}">${nav.title}</a>
                </li>`);
    });

    $("#text").append(`<div class="col-md-6">
    <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_500/v1633524213/mario-gogh-hdL4P9BGelQ-unsplash_qzyg89.jpg" /></div>
    <div class="col-md-6"><h1 id="fontawesome">Our Team</h1>
    <p class="p1">While we do everything in our power to roast and serve the happiest coffee feasible, coffee itself isn't really actually the core of our firm. It's our guests.</p></div>`);
 
    $("#text2").append(`<div class="col-md-6"><h1 id="fontawesome">Our Coffee</h1>
    <p class="p1">We intend to nurture a sense of marvel with your experience and also communication with just what we do.</p>
    </div>
    <div class="col-md-6"><img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,h_496/v1633524783/nathan-dumlao-Y3AqmbmtLQI-unsplash_fcyi7x.jpg" /></div>`);
 
    $("#text3").append(`<div class="col-md-6 mt-5">
    <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_500/v1633524447/milo-miloezger-rKYRJu0n06Y-unsplash_nswsqq.jpg" /></div>
    <div class="col-md-6 mt-5"><h1 id="fontawesome">Our Philosophy</h1>
    <p class="p1">Whether you buy a bag of coffee online, go to the cafe or just occur to live down the street from one, we wish you experience our commitment to surprising hospitality and joy-rooted excellence</p></div>`);
 
    $("#text4").append(`<div class="col-md-6 mt-5"><h1 id="fontawesome">Our Speed</h1>
    <p class="p1"> As a missional eCommerce Website Template Cafe focused on lasting options to poverty, we turn profits into hope. We do this by creating a product you love</p>
    </div>
    <div class="col-md-6 mt-5"><img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_500/v1633524454/merve-sehirli-nasir-GWWxr7s6_p8-unsplash_h5lkcx.jpg" /></div>`);
   
    
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
$("#footer").append(`<div class="container-fluid"><div class="row"><div class="col-md-6" id="footercol"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
<p> find us in:<i class="fab fa-instagram" id="font"></i><i class="fab fa-facebook-square" id="font"></i><i class="fab fa-twitter-square" id="font"></i></p></div>
<div class="col-md-6"><ol>
<li><p><a href="https://en.wikipedia.org/wiki/Cookie" target="_blank">Cookies Policy</a></p></li>
<li><p><a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">Privacy Policy</a></p></li>
<li><p>©  2020 Company - All Rights Reserved.</p></li>
</ol>
</div></div></div>`);