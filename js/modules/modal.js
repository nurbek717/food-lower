function modal() {
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
}

export default modal;