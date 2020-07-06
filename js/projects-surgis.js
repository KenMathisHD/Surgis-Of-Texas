const projectsGalleryGrid = document.getElementById("projects-gallery-grid");
const imagePopup = document.getElementById("image-popup");
const poppedUpImage = document.getElementById("popped-up-image");
const exitButton = document.getElementById("exit-button");
const byTheDivs = document.getElementsByName("divImg");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let jobsInfo = imagePopup.getElementsByClassName("jobInfo")[0].getElementsByTagName("span");
let jobPhotos = imagePopup.getElementsByClassName("jobPhotos")[0].getElementsByTagName("img");
let imageArr = [];
let textArr = [];


exitButton.addEventListener("click", function () {
    imagePopup.classList.remove("imagePopIn");
    poppedUpImage.src = " ";
    for (let s = 0; s < jobsInfo.length; s++) {                     //loops through the spans in the div with the class jobInfo
        jobsInfo[s].innerHTML = " ";                                //resets all their innerHTML's to be empty
        textArr = [];                                               //resets textArr to empty
    }
    for (let i = 0; i < jobPhotos.length; i++) {                    //loops through the images in the div with the class jobInfo
        jobPhotos[i].src = " ";                                     //resets all their sources to be whatever
        imageArr = [];                                              //resets imageArr to empty
    }
});

arrowLeft.addEventListener("click", function () {
    let next = goLeftInfo();
    let nextSrc = imageArr[next];
    poppedUpImage.src = nextSrc;

});

arrowRight.addEventListener("click", function () {
    let next = goRightInfo();
    let nextSrc = imageArr[next];
    poppedUpImage.src = nextSrc;
});



// (function() {

//     document.body.addEventListener("click", function(event){

//         console.log(event.target);

//         var target = event.target;

 

//         // if(event.target.hasAttribute("select-message")){

//         //     var path = target.getAttribute("select-message");

//         //     // document.querySelectorAll(".thatImage").setAttribute("src", path);

//         // }



//         if (event.target.getAttribute("name") == "divImg") {
//             alert("It worked marty!");
//             console.log("It worked marty!");
//         }

//     })

// })();

// document.body.addEventListener("click", function (event) {
//     console.log(event.target.parentElement);
//     // if (event.target.getAttribute("name") == "divImg") {
//     //     alert("It worked marty!");
//     // }

//     if(event.target.hasAttribute("name")){
//         alert("It worked marty!");
//         console.log("It worked marty!");
//         // var path = target.getAttribute("select-message");

//         // document.querySelectorAll(".thatImage").setAttribute("src", path);

//     }
// });



projectsGalleryGrid.addEventListener("click", function () {
    for (let i = 0; i < byTheDivs.length; i++) {          //loops through the elements with the name defined in byTheDivs
        if (document.activeElement == byTheDivs[i]) {     //checks if the current div in the loop is the active element
            let notSeeData = byTheDivs[i].getElementsByClassName("notSeenData")[0].getElementsByTagName("input");
            for (let i = 0; i < notSeeData.length; i++) {
                if (notSeeData[i].getAttribute("name") == "text") {
                    textArr.push(notSeeData[i]);
                }
                if (notSeeData[i].getAttribute("name") == "image") {
                    imageArr.push(notSeeData[i]);
                }
            }

            formatTextArr();
            displayTextArr();
            formatImageArr(byTheDivs[i]);
            displayImageArr();

            let imgSrc = $(byTheDivs[i]).find('img').attr('src'); //gets the image source for the image child of the active div (i.e. the clicked image)
            poppedUpImage.src = imgSrc;                     //sets the source for the popup image as the source for the image in the active div (i.e. the clicked image)
            imagePopup.classList.add("imagePopIn");         //has the clicked image popup

            break;
        }
    }
});
function formatTextArr() {                              //moves all the data to it's place in the array and then returns an array with just the text values needed
    let temp = textArr;
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].getAttribute("category") == "place") {
            temp[0] = textArr[i].getAttribute("textContent");
        }
        else if (textArr[i].getAttribute("category") == "citystate") {
            temp[1] = textArr[i].getAttribute("textContent");
        }
        else if (textArr[i].getAttribute("category") == "surveytype") {
            temp[2] = textArr[i].getAttribute("textContent");
        }
    }
    textArr = temp;
}

function formatImageArr(element) {                     //adds the main source image to the array and returns an array with only the text needed
    let temp = imageArr;
    for (let i = 0; i < imageArr.length; i++) {
        temp[i] = imageArr[i].getAttribute("imageSrc");
    }
    let main = element.getElementsByTagName("img")[0].getAttribute("src");
    temp.unshift(main);
    imageArr = temp;
}

function displayTextArr() {
    for (let i = 0; i < jobsInfo.length; i++) {
        jobsInfo[i].innerHTML = textArr[i];
    }
}

function displayImageArr() {
    for (let i = 0; i < jobPhotos.length; i++) {
        jobPhotos[i].src = imageArr[i];
    }
}

function goRightInfo() {

    let rightData = {
        currentImg: poppedUpImage.getAttribute("src"), //source of current image shown in poppedUpImage
        currentPlace: 0,
        photosLength: (imageArr.length-1),
        distanceToEnd: 0,   //used to record us how far until the last element in the array
        atEnd: false,        //used to record us if we're at the end or not
        nextSpot: 0
    };

    if (rightData.photosLength == 0) {
        rightData.nextSpot = 0;
    }

    else if (rightData.photosLength > 0) {
        for (let i = 0; i < imageArr.length; i++) {
            if (jobPhotos[i].getAttribute("src") == rightData.currentImg) {   //loops through jobPhotos array to see if current photo source in poppedUpImage matches
    
                rightData.currentPlace = i;
                rightData.distanceToEnd = rightData.photosLength-rightData.currentPlace;
    
                if (rightData.distanceToEnd == 0) {
                    rightData.atEnd = true;
                    rightData.nextSpot = 0;
                }
                else if (rightData.distanceToEnd > 0) {
                    rightData.atEnd = false;
                    rightData.nextSpot = (rightData.currentPlace)+1;
                }
                break;
            }
        }
    }

    return rightData.nextSpot;
}

function goLeftInfo() {
    let leftData = {
        currentImg: poppedUpImage.getAttribute("src"), //source of current image shown in poppedUpImage
        currentPlace: 0,
        photosLength: (imageArr.length-1),
        distanceToEnd: 0,   //used to record us how far until the first element in the array
        atEnd: false,        //used to record us if we're at the end or not
        nextSpot: 0
    };

    if (leftData.photosLength == 0) {
        leftData.nextSpot = 0;
    }

    else if (leftData.photosLength > 0) {
        for (let i = 0; i < imageArr.length; i++) {
            if (jobPhotos[i].getAttribute("src") == leftData.currentImg) {   //loops through jobPhotos array to see if current photo source in poppedUpImage matches
                
                leftData.currentPlace = i;
                leftData.distanceToEnd = leftData.photosLength-leftData.currentPlace;
    
                if (leftData.distanceToEnd == leftData.photosLength) {
                    leftData.atEnd = true;
                    leftData.nextSpot = leftData.photosLength;
                }
                else if (leftData.distanceToEnd < leftData.photosLength) {
                    leftData.atEnd = false;
                    leftData.nextSpot = leftData.currentPlace-1;
                }
                break;
            }
        }
    }

    return leftData.nextSpot;
}