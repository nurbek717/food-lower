function timer(deadline, selector) {  

   //ikki sana orasidagi qolgan vaqtni hisoblab berish
   function getTimeReaining(endtime) {
      let days,hours,minutes,seconds
      const time = Date.parse(endtime) - Date.parse(new Date())

      if (time <= 0) {
         days = 0
         hours = 0
         minutes = 0
         seconds = 0
      } else {
         days = Math.floor(time / (1000 * 60 * 60 * 24)),
         hours = Math.floor((time / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((time / 1000 / 60) % 60),
         seconds = Math.floor((time / 1000) % 60);
      }
     
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
   setClock(selector, deadline);
}
export default timer;