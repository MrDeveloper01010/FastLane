let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let liens = document.getElementsByClassName('menu__link');
let whatsToggle = document.querySelector('.fix-whatsApp-contact .whats-icon')
let chat = document.querySelector('.fix-whatsApp-contact .open-chat-whats')
let clickToFlex = document.querySelector('.fix-whatsApp-contact .form-icon')
let displayContainer = document.querySelector('.our-form')
for(let i = 0 ; i < liens.length ; i++) {
    liens[i].addEventListener('click', function() {
        body.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
    })
}
toggle.addEventListener('click', function() {
    body.classList.toggle('open');
    body.classList.toggle('overflow-hidden');
})

whatsToggle.addEventListener('click', function() {
    chat.classList.toggle('hide')
})

clickToFlex.addEventListener('click', function(){
    displayContainer.classList.toggle('flex-or-not');
})
const selectElement = document.querySelector('select');
const outputElement = document.querySelector('.c-recoltValue input');
const checkInput = document.querySelectorAll('input[name="statu"]');
const mask = document.querySelector(".form-group.hidde")
let selectedValues = [];

selectElement.addEventListener('change', (event) => {
  const selectedOption = event.target.selectedOptions[0];
  const selectedValue = selectedOption.value;
  if (!selectedValues.includes(selectedValue)) {
    selectedValues.push(selectedValue);
    outputElement.value = selectedValues.join(', ');
  }
});
 checkInput[0].addEventListener('click', ()=>{
    mask.style.display = "none";

 })
 checkInput[1].addEventListener('click', ()=>{
    mask.style.display = "block";

 })

let tl = gsap.timeline();

tl.from('.accueil', {
    duration: 1.25,
    filter: "blur(10px)"
})

tl.from('.overlay', {
    duration: 0.75,
    x: '-100%'
})

tl.from('.logo, .menu, .toggle', {
    duration: 0.75,
    opacity: 0
});

tl.from('.accueil__text__top, .accueil__text__mid, .accueil__text__bot', {
    duration: 0.75,
    opacity: 0
})

tl.from('.accueil__text__top .sep', {
    duration: 0.75,
    width: '0px'
})