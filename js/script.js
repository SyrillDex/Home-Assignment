function showSidebar(){
  event.preventDefault(); 
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
function hideSidebar(){ 
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('inactive');
}
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const isClickInside = sidebar.contains(event.target) || event.target.closest('.hamburger-menu');

  if (!isClickInside && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-div").style.top = "50px";
    document.getElementById("header").style.top = "0px";
    document.getElementById('nav-div').style.backgroundColor = 'black';
  } else {
    document.getElementById("nav-div").style.top = "-50px";
    document.getElementById("header").style.top = "-50px";
    document.getElementById('nav-div').style.backgroundColor = 'black';
  }
  if (currentScrollPos === 0) {
    document.getElementById('nav-div').style.backgroundColor = 'transparent';
  }
  prevScrollpos = currentScrollPos;
}
let slideIndex = 0;

function nextSlide() {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('img');
  slideIndex = (slideIndex + 1) % slides.length;
  slider.scrollTo({
    left: slides[slideIndex].offsetLeft,
    behavior: 'smooth'
  });
}

function prevSlide() {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('img');
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  slider.scrollTo({
    left: slides[slideIndex].offsetLeft,
    behavior: 'smooth'
  });
}


