// import { menuresoursces } from "../services/get-resoursces";
import getresoursces from "../services/get-resoursces";
import { menuresoursces } from "../services/get-resoursces";

function clas(selector) {

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
 
    
   menuresoursces().then(data => {
      data.forEach((menu, index) => {
        const parentSelector = index % 2 === 0 ? ".menu-items-left" : ".menu-items-right";
        new Menu(menu.src, menu.alt, menu.title, menu.descr, menu.sale, parentSelector).render();
      });
    });
    
   getresoursces().then(data => {
      data.forEach(offer => {
         new OffersMenu(
            offer.src,
            offer.alt,
            offer.title,
            offer.descr,
            offer.discount,
            offer.sale,
            selector
         ).render()
      }) 
   })

   
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

   
   bars.forEach(bar => {
      new BarOffer(
         bar.src,
         bar.alt,
         bar.title,
         bar.time,
         ".daytime-items"
      ).showrender()
   })
   

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

   // fetch("http://localhost:3000/menu", {
   //    method: "GET",
   //    headers: { "Content-Type": "application/json" },
   // })
   // .then(res => res.json())
   // .then(data => {
   //    data.forEach((menu, index) => {
   //       // Navbatma-navbat left yoki right ga joylash
   //       const parentSelector = index % 2 === 0 ? ".menu-items-left" : ".menu-items-right";
   //       new Menu(menu.src, menu.alt, menu.title, menu.descr, menu.sale, parentSelector).render();
   //    });
   // });
}

export default clas;