function menuShowHide() {
  var x = document.querySelector('#header .menu');
  var y = document.querySelector('#header .header-content');
  // console.log('Show = ', x.style.display);
  if (x.style.display != "flex") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}

var btn_next = document.querySelector('.next');
var btn_prev = document.querySelector('.prev');
var slide_number = document.querySelector('.current-slide');
var total_slides = document.querySelector('.total-slides');

var slides = document.querySelectorAll('div.slide');
var i = 0;


total_slides.innerHTML = slides.length;


btn_next.onclick = function() {
  slides[i].style.display = 'none';
  i++;

  if (i >= slides.length) {
    i = 0;
  }

  slides[i].style.display = 'block';
  slide_number.innerHTML = '0'+(i+1);
};

btn_prev.onclick = function() {
  slides[i].style.display = 'none';
  i--;

  if (i < 0) {
    i = slides.length - 1;
  }

  slides[i].style.display = 'block';
  slide_number.innerHTML = '0'+(i+1);
};
