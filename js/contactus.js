$(function() {
    console.log( "NAV ready!" );
    let contactus = [
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
   
    $.each(contactus, function(key, nav) {
        console.log(nav.title)
        $("#navigation").append(`<li class="nav-item">
                    <a class="nav-link" href="${nav.url}">${nav.title}</a>
                </li>`);
    });
});

function initMap() {

    let macc = {lat: 52.523032299415476, lng: 13.41752611422872};

    let map = new google.maps.Map(

        document.getElementById('map'), {zoom: 15, center: macc});

    let marker = new google.maps.Marker({position: macc, map: map});

  }
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
  $("#footer").append(`<div class="container-fluid"><div class="row"><div class="col-md-6"><p class="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
  <p class="p1"> find us in:<i class="fab fa-instagram" id="font"></i><i class="fab fa-facebook-square" id="font"></i><i class="fab fa-twitter-square" id="font"></i></p></div>
  <div class="col-md-6"><ol>
  <li class="list"><p><a href="https://en.wikipedia.org/wiki/Cookie" target="_blank">Cookies Policy</a></p></li>
  <li class="list"><p><a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">Privacy Policy</a></p></li>
  <li class="list"><p>©  2020 Company - All Rights Reserved.</p></li>
  </ol>
  </div></div></div>`);