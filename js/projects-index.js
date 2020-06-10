const indexProjectCont = document.getElementById("index-project-cont");
const byNames = document.getElementsByName("divpvm");
const test = document.getElementsByClassName("anchorHoverProjectsIndex");
let windowChecker;


$(window).resize(function() {
    let browsWidth = $(window).width();
        if (browsWidth < 1200) {
            windowChecker = true;
        }
        else if (browsWidth >= 1200) {
            windowChecker = false;
        }
});

indexProjectCont.addEventListener("click", function() {     //checks to see if somebody clicked anywhere in this section
    if (windowChecker === true) {
        for (let i = 1; i < byNames.length+1; i++) {            //loops through the list of elements with the name divpvm
            let pvmId = "pvm"+(i);                              //defines what id we're looking at
            if (document.activeElement == document.getElementById(pvmId)) { //if the element with matching ID is focused currently
                document.getElementById(pvmId).addEventListener("transitionend", function() {   //adds event listener for transitionend
                    let pvmOpacity = opacityCheck(document.getElementById(pvmId));  //opacity check of focused element
                    let pvmAnchor = "pvm-anchor-"+i;    //defines anchor tag that will match element
                    if (pvmOpacity == 1) {  //if opacity is 1
                        document.getElementById(pvmAnchor).style.pointerEvents = "initial"; //basically activate anchor tag
                    }
                    else if (pvmOpacity == 0) { //else if opacity is 0
                        document.getElementById(pvmAnchor).style.pointerEvents = "none";    //basically deactivate anchor tag
                    }
                });
            }
        }
    }
});

