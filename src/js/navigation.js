const popupNav = document.querySelector("#popup-nav")
const links = Array.from(document.querySelectorAll(".nav__link"))
let currentLink = null;

setCurrentLink()


links.forEach(link=>{
    link.addEventListener("click", ()=>{
        currentLink.className = "nav__link"
        link.className = "nav__link current"
        setCurrentLink()
    })
})

function setCurrentLang(){
    langs.forEach(lang=>{
        if(lang.className=="lang__btn current"){
            currentLang = lang
        }
    })
}

function setCurrentLink(){
    links.forEach(link=>{
        if(link.className=="nav__link current"){
            currentLink = link
        }
    })
}

function openPopupNav(){
    popupNav.style = "display: flex"
    links.forEach(link => {
        link.addEventListener("click", closePopupNav)
    })
}

function closePopupNav() {
    popupNav.style = "display: none"
    links.forEach(link => {
        link.removeEventListener("click", closePopupNav)
    })
}

links.forEach(link => {
    link.addEventListener("click", closePopupNav)
})