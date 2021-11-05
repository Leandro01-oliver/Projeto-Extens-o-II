//Capturar o DOM do elemento html relacionado a Search//
let boxIconSearch = document.querySelectorAll(".box-icon-search"),
     hiddenSearch = document.querySelectorAll(".hidden-search");
//------------------------------------------------//

//Capturar o DOM do elemento html relacionado ao DarkMode//
let boxDarkMode = document.querySelector(".box-dark-mode"),
    iconLigth = document.querySelector(".icon-ligth"),
     iconDark = document.querySelector(".icon-dark");
//------------------------------------------------//

//Captura do DOM de elementos que serão usados nas animações do darkmode e redimencionamento de largura//
let NavBar = document.querySelector(".container-navbar"),
    SadBar = document.querySelector(".container-sadbar"),
    containerContent = document.querySelector(".container-content"),
    clipSearch = document.querySelectorAll(".clip-search"),
    search = document.querySelectorAll(".search"),
    navLink = document.querySelectorAll(".nav-link"),
    dropMenu = document.querySelector(".drop-menu"),
    boxMenu  = document.querySelector(".box-menu"),
    boxFilter  = document.querySelector(".box-filter"),
    textSadBtn  = document.querySelectorAll(".text-sad-btn"),
    SadLink  = document.querySelectorAll(".sad-link"),
    iconArrow  = document.querySelector(".icon-arrow");
    
    
//-----------------------------------------------------------------------------------------------------//

boxIconSearch.forEach(n => n.onclick = () =>{
    hiddenSearch.forEach(n => n.classList.toggle("active-search")) ;
});

containerContent.onclick = () =>{
    hiddenSearch.forEach(n => n.classList.remove("active-search")) ;
    dropMenu.classList.remove("active-drop-menu");
    SadBar.classList.remove("active-open-filter");
    containerContent.classList.remove("active-open-filter");
    textSadBtn.forEach(n => n.classList.remove("active-open-filter"));
    SadLink.forEach(n => n.classList.remove("active-open-filter"));
}


boxDarkMode.onclick = () => {
    iconLigth.classList.toggle("active-darkmode");
    iconDark.classList.toggle("active-darkmode");
    SadBar.classList.toggle("active-darkmode");
    containerContent.classList.toggle("active-darkmode");
    NavBar.classList.toggle("active-darkmode");
    clipSearch.forEach(n => n.classList.toggle("active-darkmode"));
    search.forEach(n => n.classList.toggle("active-darkmode"));
    dropMenu.classList.toggle("active-darkmode");
    boxIconSearch.forEach(n => n.classList.toggle("active-darkmode"));
    navLink.forEach(n => n.classList.toggle("active-darkmode"));
    boxFilter.classList.toggle("active-darkmode");
    SadLink.forEach(n => n.classList.toggle("active-darkmode"));
}

boxMenu.onclick = () => {
    dropMenu.classList.toggle("active-drop-menu");
    
}

boxFilter.onclick = () => {
    iconArrow.classList.toggle("active-open-filter");
    SadBar.classList.toggle("active-open-filter");
    containerContent.classList.toggle("active-open-filter");
    textSadBtn.forEach(n => n.classList.toggle("active-open-filter"));
    SadLink.forEach(n => n.classList.toggle("active-open-filter"));
    dropMenu.classList.toggle("active-open-filter");
}