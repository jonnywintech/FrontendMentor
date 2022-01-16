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
const page = document.querySelector('body')
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

        const sections = document.querySelectorAll('section');
        const closeSect = ()=>{
            sections.forEach(item=>{
                item.classList.remove('section--active');
            })
        }

        ///testing

        const ob1 = {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 14,
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            textRendering: "optimizeLegibility",
            backgroundImage: "url('../images/background-home-desktop.jpg')",
          }
        const ob2 = {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 14,
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            textRendering: "optimizeLegibility",
            backgroundImage: "url('../images/background-destination-desktop.jpg')",
          }
        
//testing
    navLinks.forEach((item,indx)=>{
        item.addEventListener('click',()=>{
            const mediaTablet = window.matchMedia('(max-width: 1024px)');
            const mediaPhone = window.matchMedia('(max-width: 768px)');
        const headerActive = document.querySelector('.header__item--active');
           if(item.classList.contains('header__item--active')){
               return
           }else{
               headerActive.classList.remove('header__item--active');
               item.classList.add('header__item--active');
               closeSect();
               sections[indx].classList.add('section--active');
               switch(indx){
                   case 0:
                       page.style.backgroundImage="url('images/background-home-desktop.jpg')"
                       if(mediaTablet.matches){
                        page.style.backgroundImage="url('images/background-home-tablet.jpg')"
                       }
                       if(mediaPhone.matches){
                        page.style.backgroundImage="url('images/background-home-mobile.jpg')"
                       }
                       break;
                       case 1:
                           page.style.backgroundImage="url('images/background-destination-desktop.jpg')"
                           if(mediaTablet.matches){
                            page.style.backgroundImage="url(images/background-destination-tablet.jpg')"
                           }
                           if(mediaPhone.matches){
                            page.style.backgroundImage="url('images/background-destination-mobile.jpg')"
                           }
                           break;
                           case 2:
                            page.style.backgroundImage="url('images/background-crew-desktop.jpg')"
                            if(mediaTablet.matches){
                                page.style.backgroundImage="url('images/background-crew-tablet.jpg')"
                               }
                               if(mediaPhone.matches){
                                page.style.backgroundImage="url('images/background-crew-mobile.jpg')"
                               }
                            break;
                            case 3:
                                page.style.backgroundImage="url('images/background-technology-desktop.jpg')"
                                if(mediaTablet.matches){
                                    page.style.backgroundImage="url('images/background-technology-tablet.jpg')"
                                   }
                                   if(mediaPhone.matches){
                                    page.style.backgroundImage="url('images/background-technology-mobile.jpg')"
                                   }
                                break;
               }
           }
        })
    })
}


console.log(navLinks)
appTwo();

const planets= ()=>{
    const planetList = document.querySelectorAll(".explore__item");
    const planetsImages=document.querySelectorAll('.explore__image')
    planetList.forEach((item)=>{
        item.addEventListener('click',()=>{
        const planetActive = document.querySelector('.explore__item--active');
        const headline = document.querySelector('.explore__title');
        const paragraph = document.querySelector('.explore__text');
        const travelTime = document.querySelector('.explore__info-big--first');
        const distance = document.querySelector('.explore__info-big--second');

           if(item.classList.contains('explore__item--active')){
               planetActive;
           }else{
               planetActive.classList.remove('explore__item--active');
               item.classList.add('explore__item--active');
           }
           console.log(planetActive.innerText);
           console.log(planetsImages[0]);

           const dbPlanet =()=>{
              planetsImages.forEach(element => {
                element.style.display='none';
                element.style.visibility='hidden';
                element.style.opacity=0;
              });
           }


           switch(item.innerText){
                  case 'MOON' :
                      dbPlanet();
                      planetsImages[0].style.display='block';
                      planetsImages[0].style.visibility='visible';
                      planetsImages[0].style.opacity=1;
                      headline.innerText='Moon';
                      paragraph,innerText='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
                      travelTime.innerText='384,400 KM';
                      distance.innerText='3 Days';
                      break;
                  case 'MARS' :
                      dbPlanet();
                      planetsImages[1].style.display='block';
                      planetsImages[1].style.visibility='visible';
                      planetsImages[1].style.opacity=1;
                      headline.innerText='Mars';
                      paragraph.innerText='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
                      travelTime.innerText='255 MIL. KM';
                      distance.innerText='9 Months';
                      break;
                  case 'EUROPA' :
                      dbPlanet();
                      planetsImages[2].style.display='block';
                      planetsImages[2].style.visibility='visible';
                      planetsImages[2].style.opacity=1;
                      headline.innerText='Europa';
                      paragraph.innerText='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
                      travelTime.innerText='628 MIL. KM';
                      distance.innerText='3 Years';
                      break;
                  case 'TITAN' :
                      dbPlanet();
                      planetsImages[3].style.display='block';
                      planetsImages[3].style.visibility='visible';
                      planetsImages[3].style.opacity=1;
                      headline.innerText='Titan';
                      paragraph.innerText='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
                      travelTime.innerText='1.6 BIL. KM';
                      distance.innerText='7 years';
                      break;
   
              }
           


        })
    })
}

planets();


const crew = ()=>{
    const crewSwiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    
}

crew();

const tech =()=>{
    const circleBtns = document.querySelectorAll('.tech__page-no');
    const circleBtnActive = document.querySelector('.tech__page-no--active');
    const containers = document.querySelectorAll('.tech__container');
    const closeAll = ()=>{
        containers.forEach(el=>{
            el.classList.remove('tech__container--active');
        })
    }
    
    circleBtns.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            console.log(index)
     switch(index){
         case 0 :
             case 3:
                 case 6:
             closeAll()
             containers[0].classList.add('tech__container--active');
             break;
             
         case 1:
             case 4 :
                 case 7:
                    closeAll()
            containers[1].classList.add('tech__container--active');
            break;
         
         case 2 :
             case 5 :
                 case 8:
                    closeAll()
                    containers[2].classList.add('tech__container--active');
            break;
     }
   })
  })
}

tech();