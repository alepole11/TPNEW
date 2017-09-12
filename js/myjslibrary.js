//CODICI JAVASCRIPT UTILIZZATI

//MENU RESPONSIVE SEMPLICE
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function viewMobileMenu() { //not used
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function viewMobileMenu2(){
	document.getElementById("myTopnav").classList.toggle("responsive");
}

//DROPDOWN MENU
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openCloseDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

  	console.log('sono fuori dal dropdown');

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  };
  //poi correggo effetto collaterale (ma non so più qual era?!?!?)
  if ((!event.target.matches('.icon')) && (!event.target.matches('.dropbtn'))) {

  	console.log('ci sono');

    var dropdowns = document.getElementsByClassName("topnav");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('responsive')) {
        openDropdown.classList.remove('responsive');
      }
    }
  }
}



//MOSTRA IL PULSATE TO TOP
			// When the user scrolls down 20px from the top of the document, show the button
			// Modificata per poter (poi) nascondere bottone quando sono nel footer
			function displayToTopBtn() {
				//if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
			    if (
			    	(document.body.scrollTop > 20 && 1) || 
			    	(document.documentElement.scrollTop > 20 && 1))
			    	{

			        document.getElementById("scrollToTopBtn").style.display = "block";
			    } else {
			        document.getElementById("scrollToTopBtn").style.display = "none";
			    }
			}

			// When the user clicks on the button, scroll to the top of the document
			function ScrollToTopFunction() {
			    	$('html,body').animate({
				    	 scrollTop: 0
					}, 1000);
			}


//ANIMAZIONE SU CLICK PULSANTE MENU
	    	$(document).ready(function(){   
	    
			//When btn is clicked
			$(".icona-menu").click(function() {
				$(".main-menu").toggleClass("show");
				$("body").toggleClass("stop-scrolling");
				$('body').bind('touchmove', function(e){e.preventDefault()})
				$(".effetto-opaco").toggleClass("show");
				//$(".icona-menu-attivo").toggleClass("show");
			});  
			//menu mobile
			$(".icona-menu-2").click(function() {
				$(".main-menu-2").toggleClass("show");
				$("body").toggleClass("stop-scrolling");
				$('body').bind('touchmove', function(e){e.preventDefault()})
				$(".effetto-opaco").toggleClass("show");
				//$(".icona-menu-attivo").toggleClass("show");
			}); 
			//submenu
			$(".parent-menu").click(function() {
				$(".child-menu").toggleClass("show");
				$("body").toggleClass("stop-scrolling");
				$('body').bind('touchmove', function(e){e.preventDefault()});
			}); 

	    });


//EFFETTO SCROLL PAGE SU LINK ANCORE
	    	$(function() {
				$('a[href*=#]:not([href=#])').click(function() {
					//$(".effetto-opaco").toggleClass("show");  l'avevo messo io???
					//$(".main-menu").toggleClass("show");
				if (document.body.scrollTop > 200){ //se sono sceso nella pagina, agisco solo su 2) quelli del menu fisso
					$(".main-menu-2").toggleClass("show");
					$("body").toggleClass("stop-scrolling");
					$('body').unbind('touchmove');
					$(".effetto-opaco").toggleClass("show");
				} else {
					$(".main-menu").toggleClass("show");
					$("body").toggleClass("stop-scrolling");
					$('body').unbind('touchmove');
					$(".effetto-opaco").toggleClass("show");
				}
				if (location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") && 
					location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top - 50 // per scendere sotto il top menu
				}, 1000);
				return false;
				}
				}
				});
				});	    	

//EFFETTO APPARIZIONE CONTENUTO MENTRE STAI SCORRENDO LA PAGINA

	    	function effettoDelay(elem) {
	    		var docViewTop = $(window).scrollTop();
			    var docViewBottom = docViewTop + $(window).height();
			    var elemTop = $(elem).offset().top;
			    var elemBottom = elemTop + $(elem).height();
			    return(docViewBottom >= elemTop + 50);
			};	    	



//CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myCarousel");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//OTHER SLIDESHOW

var slideIndex2 = 1;
showDivs(slideIndex2);

function plusDivs(n) {
  showDivs(slideIndex2 += n);
}

function currentDiv(n) {
  showDivs(slideIndex2 = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " w3-opacity-off";
}
