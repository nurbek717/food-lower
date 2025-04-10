function silider() {
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
}
export default silider;