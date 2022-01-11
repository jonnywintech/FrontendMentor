/// slider if exist ///

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// swiper();


///// navbar //// 
const navLinks = document.querySelectorAll('.header__item');

//dropdown
const burgerBtn = document.querySelector('.header__burger');
const icon = document.querySelector('.icon');
const ulList = document.querySelector('.header__list');

const appTwo = ()=>{
    burgerBtn.addEventListener('click',()=>{
        if(icon.classList.contains('icon-icon-hamburger')){
            icon.classList.remove('icon-icon-hamburger');
            icon.classList.add('icon-icon-close');
            ulList.classList.add('header__list--active')
        }else{
            icon.classList.remove('icon-icon-close');
            icon.classList.add('icon-icon-hamburger');
            ulList.classList.remove('header__list--active')
        }
    })
    //nav active
    navLinks.forEach((item)=>{
        item.addEventListener('click',()=>{
        const headerActive = document.querySelector('.header__item--active');
           if(item.classList.contains('header__item--active')){
               return
           }else{
               headerActive.classList.remove('header__item--active');
               item.classList.add('header__item--active');
           }
        })
    })
}


console.log(navLinks)
appTwo();