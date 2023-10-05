const  faqs = document.querySelectorAll(".faq");
const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay");

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active")
    })
})


menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});