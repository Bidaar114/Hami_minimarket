let burger = document.querySelector('.burger');
let navigation = document.querySelector('nav');
let navLinks = document.getElementById('nav_links');





burger.addEventListener('click', () => {
     burger.classList.toggle('active');
     navigation.classList.toggle('active');
   
});

navLinks.addEventListener('click', () => {
    navigation.classList.remove('active');
     burger.classList.remove('active');
});

//home slider

let home1 = document.querySelector('#home');
let home2 = document.querySelector('#home_2');
let home3 = document.querySelector('#home_3');

console.log(home1, home2, home3);


let slides = [home1, home2, home3];

console.log(slides);


let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000);

console.log(currentIndex);


function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}





