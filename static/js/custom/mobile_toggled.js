function myFunction(x) {
    if (x.matches) { // If media query matches
     let ul = document.querySelector("#accordionSidebar");
     ul.classList.toggle("toggled");
     let html = document.documentElement; 
     html.style.scrollBehavior="auto"
    }
}
var x = window.matchMedia("(max-width: 576px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes






