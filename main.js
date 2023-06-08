document.title = 'Portofolio';
const body = document.body
body.style.overflowX = 'hidden'

//navbar
const navbar = document.querySelector('.navbar')
navbar.style.background = '#0B2447'
navbar.style.zIndex = '100'
navbar.style.position = 'fixed'
navbar.style.top = '0'
navbar.style.width = '100%'

const div = document.querySelector('#navbar2')
div.style.marginLeft = '130vh'

const contact = document.getElementById('contact')
contact.style.background = '#19376D'
contact.style.color = 'white'
contact.style.height = '40vh'
contact.style.marginTop = '30vh'

//home
const videoContainer = document.getElementById('videoContainer');

const videoElement = document.createElement('video');
videoElement.src = './img/home.mp4';
videoElement.autoplay = true;
videoElement.loop = true;
videoElement.muted = true;

videoElement.style.position = 'absolute';
videoElement.style.top = '8.2vh';
videoElement.style.left = '0';
videoElement.style.width = '100%';
videoElement.style.height = '100%';
videoElement.style.objectFit = 'cover';

videoContainer.insertBefore(videoElement, videoContainer.firstChild);

const headingElement = document.createElement('h1');
headingElement.textContent = 'Hi, Im Almer Rafi Sabana';

headingElement.style.position = 'absolute';
headingElement.style.top = '50%';
headingElement.style.left = '50%';
headingElement.style.transform = 'translate(-50%, -50%)';
headingElement.style.color = '#fff';
headingElement.style.textAlign = 'center';
headingElement.style.color = 'black'

home.appendChild(headingElement);

//project
const project = document.getElementById('project')
project.style.height = '93vh'

//laravel
const laravel = document.getElementById('laravel')
laravel.style.color = '#205295'
laravel.style.marginTop = '11vh'

//carousel-laravel
const carouselLaravel = document.getElementById('carouselExampleDark')
carouselLaravel.style.marginTop = '11vh'

//js
const js = document.getElementById('js')
js.style.color = '#205295'

//navigasi
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

//loading
var loadingAnimation = document.getElementById("loading-animation");
loadingAnimation.style.marginTop = '30vh'
loadingAnimation.style.marginLeft = '95vh'

function showLoadingAnimation() {
  loadingAnimation.style.display = "block";
}

function hideLoadingAnimation() {
  loadingAnimation.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  hideLoadingAnimation();
});

var link1 = document.getElementById("link1");
link1.addEventListener("click", function(event) {
  event.preventDefault();
  showLoadingAnimation();
  // Lakukan aksi yang diinginkan saat mengklik tautan 1
  setTimeout(function() {
    hideLoadingAnimation();
  }, 150);
});

var link2 = document.getElementById("link2");
link2.addEventListener("click", function(event) {
  event.preventDefault();
  showLoadingAnimation();
  // Lakukan aksi yang diinginkan saat mengklik tautan 2
  setTimeout(function() {
    hideLoadingAnimation();
  }, 500);
});

var link3 = document.getElementById("link3");
link3.addEventListener("click", function(event) {
  event.preventDefault();
  showLoadingAnimation();
  // Lakukan aksi yang diinginkan saat mengklik tautan 3
  setTimeout(function() {
    hideLoadingAnimation();
  }, 500);
});

var link3 = document.getElementById("link4");
link3.addEventListener("click", function(event) {
  event.preventDefault();
  showLoadingAnimation();
  // Lakukan aksi yang diinginkan saat mengklik tautan 3
  setTimeout(function() {
    hideLoadingAnimation();
  }, 400);
});

//button detail laravel
const detail = document.getElementById('detail');
detail.style.background = '#0081C9'
detail.style.borderRadius = '2vh'
detail.style.color = 'white'
detail.style.border = 'none'

//button detail js
const detjs = document.getElementById('detail-js');
detjs.style.background = '#0081C9'
detjs.style.borderRadius = '2vh'
detjs.style.color = 'white'
detjs.style.border = 'none'

//about
const about = document.getElementById('about');
about.style.marginTop = '80vh'

//person
const person = document.getElementById('person');
person.style.height = '80vh'
person.style.width = '50vh'
person.style.marginTop = '13vh'
person.style.borderTopLeftRadius = '50vh'
person.style.borderTopRightRadius = '50vh'

//person-name
const personName = document.getElementById('personName');
personName.style.marginTop = '13vh'
personName.style.fontFamily = 'Montserrat, sans-serif'
personName.style.textAlign = 'center'
personName.style.marginLeft = '2vh'
personName.style.color = '#205295'

//person-about
const personAbout = document.getElementById('personAbout');
personAbout.style.textAlign = 'justify'
personAbout.style.fontSize = '17px'
personName.style.fontFamily = 'Montserrat, sans-serif'