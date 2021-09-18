'use strict'

$(document).ready(function(){
   $('.providence_photo').slick({
      arrows: true,
      dots: false,
      slidesToShow:3,
      centerMode:true,
      asNavFor:".providence_content",
      responsive:[
         {
            breakpoint: 767,
            settings: {
               slidesToShow:1
            }
         }
      ]
   });
   $('.providence_content').slick({
      arrows: false,
      dots: false,
      asNavFor:".providence_photo",
      adaptiveHeight: true
   });
});


const inputChoose = document.querySelector('#chooseIndividualScroll');
const choose_left = document.querySelector('.choose_left');
const choose_right = document.querySelector('.choose_right');
const starter = document.querySelector('.starter');
const pro = document.querySelector('.pro');
const proButtonTwo = document.querySelector('.pro_button_two');
const starterButtonTwo = document.querySelector('.starter_button_two');

inputChoose.oninput = (() => {
   const valueInput = inputChoose.value;

   if(valueInput > 5){
      choose_right.classList.add('choose_right_viceVersa');
      choose_left.classList.add('choose_left_viceVersa');
      pro.classList.add('proStarter');
      starter.classList.add('starterPro');
      proButtonTwo.classList.add('pro_button_twoStarter');
      starterButtonTwo.classList.add('starter_button_twoPro');
   } else
   if(valueInput < 5){
      choose_right.classList.remove('choose_right_viceVersa');
      choose_left.classList.remove('choose_left_viceVersa');
      pro.classList.remove('proStarter');
      starter.classList.remove('starterPro');
      proButtonTwo.classList.remove('pro_button_twoStarter');
      starterButtonTwo.classList.remove('starter_button_twoPro');
   }
});

const opacity = document.querySelectorAll('.link');
const burger = document.getElementById('nav_links');
const burgerDown = document.getElementById('nav_links-blocks');
const navTour = document.querySelector('.nav_tour');
const navHelp = document.querySelector('.nav_help');
const bodyClass = document.querySelector('.body-class');

burger.addEventListener('click', function (){
   for(let i = 0; i < opacity.length; i++){
      opacity[i].classList.toggle('opacity');      
   }
   burger.classList.toggle('burgerUp');   
});
burgerDown.addEventListener('click', function (){
   navTour.classList.toggle('burgerTour');
   navHelp.classList.toggle('burgerHelp');
   burgerDown.classList.toggle('burgerDown');
   bodyClass.classList.toggle('body-scroll');
});

const whatButton = document.querySelector('.what_button');
const close = document.querySelector('.close');

whatButton.addEventListener('click', () => { bodyClass.classList.add('body-scroll');});
close.addEventListener('click', () => {bodyClass.classList.remove('body-scroll');});

const columnsTitleOne = document.querySelector('.columns_title-one');
const columnsTitleTwo = document.querySelector('.columns_title-two');
const columnsTitleThree = document.querySelector('.columns_title-three');
const columnsTextOne = document.querySelectorAll('.columns_text-one');
const columnsTextTwo = document.querySelectorAll('.columns_text-two');
const columnsTextThree = document.querySelectorAll('.columns_text-three');

columnsTitleOne.addEventListener('click', function (){
   columnsTitleOne.classList.toggle('columns_title-oneShow');
   for(let i = 0; i < columnsTextOne.length; i++){
      columnsTextOne[i].classList.toggle('columns_text-oneShow');      
   }
});
columnsTitleTwo.addEventListener('click', function (){
   columnsTitleTwo.classList.toggle('columns_title-twoShow');
   for(let i = 0; i < columnsTextTwo.length; i++){
      columnsTextTwo[i].classList.toggle('columns_text-twoShow');      
   }
});
columnsTitleThree.addEventListener('click', function (){
   columnsTitleThree.classList.toggle('columns_title-threeShow');
   for(let i = 0; i < columnsTextThree.length; i++){
      columnsTextThree[i].classList.toggle('columns_text-threeShow');      
   }
});
