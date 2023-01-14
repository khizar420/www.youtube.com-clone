const eachButtonsEl = document.querySelectorAll(".a")

for (let i = 0; i < eachButtonsEl.length; i++){
    eachButtonsEl[i].addEventListener("click", ()=>{
        eachButtonsEl[i].classList.toggle("liist");
    })
}



