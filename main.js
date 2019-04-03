var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var modal2 = document.querySelector(".modal2");
var trigger2 = document.querySelector(".trigger2");
var closeButton = document.querySelector(".close-button");
var closeButton2 = document.querySelector(".close-button2");
var bod = document.querySelector("body");
console.log(trigger)
function toggleModal() {
   
    modal.classList.toggle("show-modal");
    bod.classList.toggle("bodyoverflow");
    console.log("trigger")
}
function toggleModal2() {
    modal2.classList.toggle("show-modal");
    bod.classList.toggle("bodyoverflow");
    console.log("trigger2");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }else if(event.target === modal2){
        toggleModal2();
    }
}

trigger.addEventListener("click", ()=>{
    console.log("trigger")
});
trigger.addEventListener("click",toggleModal);
trigger2.addEventListener("click",toggleModal2);
closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick);


