const indexProjectCont = document.getElementById("index-project-cont");
const byNames = document.getElementsByName("divpvm");
const test = document.getElementsByClassName("anchorHoverProjectsIndex");


let windowChecker;

imgChanger();

$(window).scroll( function() {
    imgChanger();
});

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

function imgChanger() {
    if (screen.bottom >= (whereAmI(img1).top - 100)) {

        if (($("#img1").css("background-image").indexOf("1x1.jpeg")) >= 0) {
            
            $("#img1").css("background-image", "url('/img/325/jureczki3.jpeg')");
            $("#img2").css("background-image", "url('/img/325/hillCountryCrossingSurvey.jpeg')");
            $("#img3").css("background-image", "url('/img/325/slimTOPO.jpeg')");
            $("#img4").css("background-image", "url('/img/325/uvalde-stake-1.jpeg')");
            $("#img5").css("background-image", "url('/img/325/bearsprings.jpeg')");
            $("#img6").css("background-image", "url('/img/325/canteraHills.jpeg')");
            $("#img7").css("background-image", "url('/img/325/Huntington.jpeg')");
            $("#img8").css("background-image", "url('/img/325/highlandParkTopo.jpeg')");
        }
    }
}

