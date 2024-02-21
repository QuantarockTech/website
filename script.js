// document.querySelector("#show-contact").addEventListener("click", function(){
//     document.querySelector(".popup").classList.remove("active");
// });
// document.querySelector(".popup .close-btn").addEventListener("click", function(){
//     document.querySelector(".popup").classList.remove("active");
// });
document.getElementById("openFormBtn").addEventListener("click", openForm);

function openForm() {
    document.getElementById("contactFormPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("contactFormPopup").style.display = "none";
}
