const popupNav = document.querySelector("#popup-nav")
const links = Array.from(document.querySelectorAll(".nav__link"))
const firstLink = document.querySelector(".nav__link")
const overlay = document.querySelector('.popup-overlay')

firstLink.style="color: #070707";

links.forEach(link => {
    link.addEventListener("mouseenter", ()=>{
        link.style="color: #070707"
        firstLink.style="color: #828282"
    })
    link.addEventListener("mouseout", ()=>{
        link.style="color: #828282"
        firstLink.style="color: #070707"
    })
})

popupNav.addEventListener('touchmove', e => {
    e.preventDefault()
}, false);


function openPopupNav(){
    popupNav.style = "transform: translateX(-100%)"
    overlay.style = "display: block"
    links.forEach(link => {
        link.addEventListener("click", closePopupNav)
    })
}

function closePopupNav() {
    popupNav.style = "transform: unset"
    overlay.style = "display: none"
    links.forEach(link => {
        link.removeEventListener("click", closePopupNav)
    })
}

links.forEach(link => {
    link.addEventListener("click", closePopupNav)
})