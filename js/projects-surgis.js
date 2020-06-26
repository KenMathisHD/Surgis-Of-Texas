const projectsGalleryGrid = document.getElementById("projects-gallery-grid");
const imagePopup = document.getElementById("image-popup");
const poppedUpImage = document.getElementById("popped-up-image");
const exitButton = document.getElementById("exit-button");
const byTheDivs = document.getElementsByName("divImg");


exitButton.addEventListener("click", function () {
    imagePopup.classList.remove("imagePopIn");
    poppedUpImage.src = " ";
    let jobsInfoHolder = $(imagePopup).find(".jobInfo");            //targets the div in popup with the class jobInfo
    let jobsInfo = jobsInfoHolder.find($("span"));                  //targets the spans in the div with the class jobInfo and puts them in an array to be accessed later
    for (let i = 0; i < jobsInfo.length; i++) {                     //loops through the spans in the div with the class jobInfo
        jobsInfo[i].innerHTML = " ";                                //resets all their innerHTML's to be empty
    }
});

projectsGalleryGrid.addEventListener("click", function () {
    console.log("got me too");
    for (let i = 0; i < byTheDivs.length; i++) {          //loops through the elements with the name defined in byTheDivs
        if (document.activeElement == byTheDivs[i]) {     //checks if the current div in the loop is the active element
            let imgSrc = $(byTheDivs[i]).find('img').attr('src'); //gets the image source for the image child of the active div (i.e. the clicked image)
            poppedUpImage.src = imgSrc;                     //sets the source for the popup image as the source for the image in the active div (i.e. the clicked image)
            imagePopup.classList.add("imagePopIn");         //has the clicked image popup
            let notSeenDataHolder = $(byTheDivs[i]).find(".notSeenData");   //targets the div with class notSeenData
            let notSeenDataHolderSpans = notSeenDataHolder.find($("span")); //targets the spans in the div with the class notSeenData and puts them in an array to be accessed later
            let jobsInfoHolder = $(imagePopup).find(".jobInfo");            //targets the div in popup with the class jobInfo
            let jobsInfo = jobsInfoHolder.find($("span"));                  //targets the spans in the div with the class jobInfo and puts them in an array to be accessed later
            let spanDataArray = [];                         //array to hold the innerHTML from the spans with the targeted image
            for (let i = 0; i < notSeenDataHolderSpans.length; i++) {   //loop through to collect the data
                jobsInfo[i].innerHTML = notSeenDataHolderSpans[i].innerHTML; //grabbing the data from the spans in activated image and putting them into the spans in popup
            }
        }
    }
});