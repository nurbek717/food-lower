function forms(params) {
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
}

export default forms;