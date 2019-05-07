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


var btn_next_arriv = document.querySelector('.next_arriv');
var btn_prev_arriv = document.querySelector('.prev_arriv');

var item_arriv = document.querySelectorAll('div.item_arriv');
i = 0;

btn_next_arriv.onclick = function() {
  item_arriv[i].style.display = 'none';
  i++;
  console.log(i);
  console.log(item_arriv.length);

  if (i >= item_arriv.length) {
    i = 0;
  }

  item_arriv[i].style.display = 'block';
};

btn_prev_arriv.onclick = function() {
  item_arriv[i].style.display = 'none';
  i--;
  console.log(i);
  console.log(item_arriv.length);

  if (i < 0) {
    i = item_arriv.length - 1;
  }

  item_arriv[i].style.display = 'block';
};
