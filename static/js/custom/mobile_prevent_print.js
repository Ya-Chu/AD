
let mobile_el = document.getElementsByName("mobile");
let form_Edit_el = document.querySelector("#form_Edit");
var mobile_value ="";
function wFunction(width) {
    console.log("test");
    if (width.matches) { // If media query matches
        mobile_value = "1";
        form_Edit_el.removeAttribute("target");
    }else{
        mobile_value = "2";
        form_Edit_el.setAttribute("target", "_blank");
    }
    mobile_el[0].value = mobile_value;    
}
var width = window.matchMedia("(max-width: 576px)")
wFunction(width) // Call listener function at run time
width.addListener(wFunction) // Attach listener function on state changes