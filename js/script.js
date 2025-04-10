"use strict"
console.log("salom");

import tabs from "./modules/tabs";
import loader from "./modules/loader";
import timer from "./modules/timer";
import modal from "./modules/modal";
import clas from "./modules/class";
import forms from "./forms";
import silider from "./modules/silider";
window.addEventListener("DOMContentLoaded", () => { 
   tabs('.tabheader__item' , '.tab_content' , '.tabheader__items')
   loader('.loader_wrapper')
   timer()
   modal()
   clas('.offers-items')
   forms()
   silider()

});

