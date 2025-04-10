/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
     // Tabs
     const tabs = document.querySelectorAll(".tabheader__item"),
     tabContens = document.querySelectorAll('.tab_content'),
     tabsParent = document.querySelector('.tabheader__items');
     
     
     function hideTabContens() {
        tabContens.forEach(tabContens =>{
           tabContens.classList.add('hide');
           tabContens.classList.remove('show' , 'fade');
        })
        
        tabs.forEach(tab => {
           tab.classList.remove('tabheader__item_active')
        })
     }
     
     function showTabContens(index = 0) {
        tabContens[index].classList.add('show', 'fade');
        tabContens[index].classList.remove('hide');
        tabs[index].classList.add('tabheader__item_active');
     }
     
     hideTabContens();
     showTabContens();
     
     tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
           tabs.forEach((tab , index) => {
              if (target === tab) {
                 hideTabContens();
                 showTabContens(index);
              }
           })
        } 
     })
     
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");


;
window.addEventListener("DOMContentLoaded", () => { 
   (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])()
   //Loading
   const loaderWrapper = document.querySelector('.loader_wrapper');
   setTimeout(() => {
      loaderWrapper.style.display = 'none'
   }, 1500);
   
   //Timer
   const deadline = '2025-6-01';
   
   //ikki sana orasidagi qolgan vaqtni hisoblab berish
   function getTimeReaining(endtime) {
      const time = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((time / 1000 / 60) % 60),
      seconds = Math.floor((time / 1000) % 60);
      return {
         'total': time,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      }
   }
   //sonlarni ikki xonali formatga keltirish masalan: 4 dan 04 ga
   function farmatNamber(number) {
      if (number >= 0 && number < 10) {
         return `0${number}`;
      } else {
         return number;
         
      }
      
   }
   
   //HTML sahifasida taymer yaratish va uni real vaqtda yangilash uchun ishlatiladi.
   function setClock (selector , endtime) {
      const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
      
      updateClock();
      
      function updateClock() {
         const time = getTimeReaining(endtime);
         
         days.textContent = farmatNamber(time.days);
         hours.textContent = farmatNamber(time.hours);
         minutes.textContent = farmatNamber(time.minutes);
         seconds.textContent = farmatNamber(time.seconds);
         
         if (time.total <= 0) {
            clearInterval(timeInterval);
         }
      }
      
   }
   setClock('.timer', deadline);
   
   //Model
   const modalOpenBtns = document.querySelectorAll('[data-modal]'),
   model = document.querySelector(".modal"),
   // modelCloseBtn = document.querySelector('[data-modal-close]'),
   modalFade = document.querySelector(".modal__content")
   
   //modal ochadigan funtion
   function openModal() {
      modalFade.classList.add("modal_fade")
      model.classList.add("show")
      model.classList.remove("hide")
      document.body.style.overflow = "hidden"
      clearInterval(modalTimerId)
   }
   //modal yopadigan funtion
   function closeModal()  {
      model.classList.add("hide")
      model.classList.remove("show")
      document.body.style.overflow = ""
   } 
   
   modalOpenBtns.forEach(btn =>{
      btn.addEventListener("click" , openModal)
   })
   
   
   model.addEventListener("click" ,  (evt) => {
      if (evt.target === model || evt.target.getAttribute("data-modal-close") === "") { 
         closeModal()
         
      }
   })
   
   //Escape tugma bosilgan ishga tushadigan code
   document.addEventListener("keydown" ,(evt) => {
      if (evt.code === "Escape" && model.classList.contains("show")) {
         closeModal()
      }
   })
   // 6s dan keyin modal oyna avto kurinadi
   const modalTimerId = setTimeout(openModal , 5000)
   
   
   //Class
   class OffersMenu{
      constructor(src , alt, title, descr, discount,sale , perentSelector){
         this.src = src,
         this.alt = alt,
         this.title = title,
         this.descr = descr,
         this.discount = discount,
         this.sale = sale
         this.selector = document.querySelector(perentSelector)
         this.formatToUSD()
      }
      formatToUSD(){
         this.discount = this.discount.toLocaleString("en-US", {style:"currency", currency:"USD"});
         this.sale = this.sale.toLocaleString("en-US", {style:"currency", currency:"USD"});
      }
      render(){
         const element = document.createElement("div")
         element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <div>
              <h3>${this.title}</h3>
              <p>${this.descr}</p>
              <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
            </div>
        `
         this.selector.append(element); 
         
      }
   }
   
   class BarOffer extends OffersMenu {
      constructor(src , alt, title, time, perentSelector){
         super(src , alt, title, "", 0, 0,  perentSelector)
         this.time = time
      }
      
      showrender(){
         const element = document.createElement("div")
         element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <h3>${this.title}</h3>
            <p>${this.time}</p>
        `
         this.selector.append(element); 
         
      }
   }
   
   const bars =[
      {
         src: "./img/breckfastIcon.png", 
         alt:  "Breakfast",
         title: "Breakfast",
         time: "8:00 am to 10:00 am"
      },
      {
         src: "./img/lunchIcon.png", 
         alt:  "Lunch",
         title: "Lunch",
         time: "4:00 pm to 7:00 pm"
      },
      {
         src: "./img/dinnerIcon.png", 
         alt:  "Dinner",
         title: "Dinner",
         time: "9:00 pm to 1:00 Am"
      },
      {
         src: "./img/dessertIcon.png", 
         alt:  "dessert",
         title: "Dessert",
         time: "All day"
      }
   ]


   fetch("http://localhost:3000/offers", {
      method:"GET",
      headers:{"Content-Type": "application/json"}
   }).then(response => response.json())
   .then(data => {
      data.forEach(offer => {
         new OffersMenu(
            offer.src,
            offer.alt,
            offer.title,
            offer.descr,
            offer.discount,
            offer.sale,
            ".offers-items"
         ).render()
      }) 
   })
   
   bars.forEach(bar => {
      new BarOffer(
         bar.src,
         bar.alt,
         bar.title,
         bar.time,
         ".daytime-items"
      ).showrender()
   })
   
   
   //FORM
   
   const form = document.querySelector("form"),
   teligramBot = "7727019370:AAHphCGDIzzpQmV6_v4t6lW4qE1rfVDaPgQ",
   chatId = '1327028569'
   
   const message = {
      loading: "Loading...",
      success:"Thanks for contakting with us!",
      failure:"Something went wrong",
   }
   
   form.addEventListener("submit" , (evt) => {
      evt.preventDefault()

      const loader = document.createElement("div")
      loader.classList.add("loader_center")
      loader.style.width = "30px"
      loader.style.height = "30px"
      loader.style.marginTop = "30px"
      form.append(loader)
      
      const formData = new FormData(form)
      
      
      
      const object = {}
      formData.forEach((value, key) => {
         object[key] = value
      })
      
      fetch(`https://api.telegram.org/bot${teligramBot}/sendMessage` , {
         method:'POST',
         headers: {"Content-Type" : "application/json"},
         body: JSON.stringify({
            chat_id: chatId,
            text: `Name: ${object.name}\nPhone: ${object.phone}`
         })
      }).then(() => {
         showStatusMessage(message.success)
         form.reset()
      })
      .catch(() => {
         showStatusMessage(message.failure)
      })
      .finally(() => loader.remove())
   })
   //modal
   function showStatusMessage(message) {
      const modalDialog = document.querySelector(".modal__dialog")
      modalDialog.classList.add("hide")
      openModal()
      
      const statusModal = document.createElement("div")
      statusModal.classList.add("modal__dialog")
      statusModal.innerHTML = `
         <div class="modal__content salom">
            <div data-modal-close class="modal__close">&times;</div>
            <div class="modal__title1">${message}</div>
         </div>
      `;
      
      document.querySelector(".modal").append(statusModal)
      
      setTimeout(() => {
         statusModal.remove()
         modalDialog.classList.remove("hide")

      },3000)
   }


   class Menu {
      constructor(src, alt, title, descr, sale, parentSelector) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.descr = descr;
         this.sale = sale;
         this.selector = document.querySelector(parentSelector); 
         this.formatToUSD();
      }
   
      formatToUSD() {
         this.sale = Number(this.sale).toLocaleString("en-US", { style: "currency", currency: "USD" });
      }
   
      render() {
         const element = document.createElement("div");
         element.classList.add("menu-item"); // Qo‘shimcha class
   
         element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <div>
               <h3>${this.title} <span class="primary-text">${this.sale}</span></h3>
               <p>${this.descr}</p>
            </div>
         `;
   
         this.selector.append(element);
      }
   }
   
   fetch("http://localhost:3000/menu", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
   })
   .then(res => res.json())
   .then(data => {
      data.forEach((menu, index) => {
         // Navbatma-navbat left yoki right ga joylash
         const parentSelector = index % 2 === 0 ? ".menu-items-left" : ".menu-items-right";
         new Menu(menu.src, menu.alt, menu.title, menu.descr, menu.sale, parentSelector).render();
      });
   });
   
   //SLIDER

   const slides = document.querySelectorAll(".offer__slide"),
         prev = document.querySelector(".offer__slider-prev"),
         next = document.querySelector(".offer__slider-next"),
         total = document.querySelector("#total"),
         current = document.querySelector("#current"),
         sliderWrapper = document.querySelector(".offer__slider-wrapper"),
         sliderInner = document.querySelector(".offer__slide-inner"),
         width = window.getComputedStyle(sliderWrapper).width
         

   let slederIndex = 1,
       offset = 0

   if (slides.length < 10) {
      total.textContent =`0${slides.length}`
      current.textContent = `0${slederIndex}`
   }else{
      total.textContent = slides.length
      current.textContent = slederIndex
   }

   sliderInner.style.width = 100 * slides.length + "%"
   sliderInner.style.display = "flex"
   sliderInner.style.transition = ' all .5s ease'
   sliderWrapper.style.overflow = "hidden"

   slides.forEach(slide => {
      slide.style.width = width
   })

   next.addEventListener("click", () => {
      if (offset === +width.replace(/\D/g , "") * (slides.length - 1)) {
         offset = 0
      }else {
          offset += +width.replace(/\D/g , "")
      }
      sliderInner.style.transform = `translateX(-${offset}px)`
     
      if (slederIndex === slides.length) {
         slederIndex = 1
      } else {
         slederIndex++
      }

     if (slides.length < 10) {
         current.textContent =`0${slederIndex}`
      }else{
         current.textContent = slederIndex
      }

   })
   prev.addEventListener("click", () => {
      if (offset === 0) {
         offset = +width.replace(/\D/g , "") * (slides.length - 1)
      }else {
          offset -= +width.replace(/\D/g , "")
      }
      sliderInner.style.transform = `translateX(-${offset}px)`


      if (slederIndex === 1) {
         slederIndex = slides.length
      } else {
         slederIndex--
      }

     if (slides.length < 10) {
         current.textContent =`0${slederIndex}`
      }else{
         current.textContent = slederIndex
      }
   })
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map