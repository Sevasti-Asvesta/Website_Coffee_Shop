$(function() {
    console.log( "NAV ready!" );
    let index = [
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
   
    $.each(index, function(key, nav) {
        console.log(nav.title)
        $("#navigation").append(`<li class="nav-item">
                    <a class="nav-link" href="${nav.url}">${nav.title}</a>
                </li>`);
    });

    
    $("#text").append(`<div class="col-md-6">
   <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_512/v1633524823/nicolas-j-leclercq-dSdGjecqhKA-unsplash_gn5c7w.jpg" /></div>
   <div class="col-md-6"><h1 id="fontawesome">Come to Our Cafe</h1>
   <p class="p1">Our Cafe was created by the owners of Mobirise eCommerce Website Builder to bring endeavor ready clients, locals, and travelers a truly unique coffee experience.</p></div>`);

   $("#text2").append(`<div class="col-md-6"><h1 id="fontawesome">You will enjoy our cafe if you love...﻿ Homely Atmosphere</h1>
   <p class="p1">Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work.</p>
   </div>
   <div class="col-md-6"><img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_350/v1633523868/jon-tyson-pEGyLHAPfVw-unsplash_dkleh0.jpg" /></div>`);

   $("#text3").append(`<div class="col-md-6 mt-5">
   <img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_541/v1633524058/karl-fredrickson-TYIzeCiZ_60-unsplash_kfxd68.jpg" /></div>
   <div class="col-md-6 mt-5"><h1 class="mt-5" id="fontawesome">Fast Cooking</h1>
   <p class="p1">Our preferred, straightforward and also unique method of developing cool coffee.</p></div>`);

   $("#text4").append(`<div class="col-md-6 mt-5"><h1 class="mt-5" id="fontawesome">Excellent Service</h1>
   <p class="p1">Our preferred, straightforward and also unique method of developing cool coffee at our cafe. The flash-chill procedure enables us to harness each coffee's natural attributes with a hot-water brew, and afterwards lock them in place with an instant decrease in temperature level.</p>
   </div>
   <div class="col-md-6 mt-5"><img class="img-fluid" id="round" src="https://res.cloudinary.com/sev/image/upload/c_scale,w_558/v1633524142/brooke-cagle-X4RJG4aNi8o-unsplash_mlogyu.jpg" /></div>`);

});
  let reviews = [`The best cold brew <br/>coffee in the city.</br><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`, 
`Beautiful interior and awesome coffee.<br/> Highly recommended! </br><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>`, 
`Very good selection of different<br/> coffee types and bagels.</br><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`, 
`Lovely atmosphere and <br/>tasty warm coffee.</br><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`]
 let i = 0;
$.ajax({
    url: 'https://randomuser.me/api/?results=4',
    dataType: 'json',
    success: function(data) {
        
        console.log(data);
        for (person of data['results']){
            
           
            
            
            $("#randoms").append(`<div class="col">
            <img class="rounded-circle" src="${person.picture.large}" />
            <p class="p1">${person.name.first} ${person.name.last}</p>
            <p class="p1">${reviews[i]}</p>
            </div>`);
             
            i = i + 1;
            }
        
    }

    
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

  $("#footer").append(`<div class="container-fluid"><div class="row"><div class="col-md-6"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
  <p> find us in:<i class="fab fa-instagram" id="font"></i><i class="fab fa-facebook-square" id="font"></i><i class="fab fa-twitter-square" id="font"></i></p></div>
  <div class="col-md-6"><ol>
  <li><p><a href="https://en.wikipedia.org/wiki/Cookie" target="_blank">Cookies Policy</a></p></li>
  <li><p><a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">Privacy Policy</a></p></li>
  <li><p>©  2020 Company - All Rights Reserved.</p></li>
  </ol>
  </div></div></div>`);

