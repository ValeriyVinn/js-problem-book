// ! Modal-mobile ----


    const openModalBtn = document.querySelector("[data-open-modal]")
    const closeModalBtn = document.querySelector("[data-close-modal]")
    const backdrop =  document.querySelector("[data-backdrop]")
   
   console.log(openModalBtn)
  
   openModalBtn.addEventListener("click", toggleModal)
   closeModalBtn.addEventListener("click", toggleModal)
   backdrop.addEventListener("click", logBackdropClick)
   
   
   
   function toggleModal() {
     backdrop.classList.toggle("is-hidden")
   }
   
   function logBackdropClick() {
     console.log("This is Click on backdrop")
   }
   
   
   