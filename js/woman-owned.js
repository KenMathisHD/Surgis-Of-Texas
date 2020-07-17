const popupTrigger = document.getElementById('popup-trigger');
const popup = document.getElementById('popup');

function opacityCheck(elem) {
    let opacity = window.getComputedStyle(elem).getPropertyValue("opacity");;
    return opacity;
}

popup.addEventListener("transitionstart", function() {
    let popupOpac = opacityCheck(popup);
    let popTriOpac = opacityCheck(popupTrigger);
    
    if (popupOpac <= 1 && popTriOpac == 0) {
        if (popupOpac == 1) {
            popupTrigger.opacity = 0;
        }
        else {
            popupTrigger.style.opacity = 1;
        }
    }
    else if (popupOpac > 0 && popTriOpac <= 1) {
        popupTrigger.style.opacity = 0;
    }
});
popup.addEventListener("transitionend", function() {
    let popupOpac = opacityCheck(popup);
    let popTriOpac = opacityCheck(popupTrigger);
    
    if (popupOpac == 1) {
        popupTrigger.style.opacity = 0;
    }
    else if (popupOpac < 1 || popupOpac == 0) {
        popupTrigger.style.opacity = 1; 
    }
});
popup.addEventListener("transitioncancel", function() {
    popupTrigger.style.opacity = 1;
});




// aBnds.addEventListener('click', function() {
//     let navHeight = regNav.scrollHeight;
//     let elemTop = (whereAmI(bnds).top)-navHeight;
//     $("html, body").animate({ scrollTop: elemTop }, "slow");
// });