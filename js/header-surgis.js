const contactBar = document.getElementById("contact-bar");
const regNav = document.getElementById("regular-nav");
const navButton = document.getElementById("nav-mobile-button");
const mobileNav = document.getElementById("mobile-nav");
const back2top = document.getElementById("back2top");
const navButtonSpan = document.getElementById("nav-button-span");
const heroImage = document.getElementById("hero-image");
const teamSmallNav = document.getElementById("team-small-nav-point");
const contactUsPage = document.getElementById("contact-us");
const servicesPage = document.getElementById("our-services");
const aboutPage = document.getElementById("about");
let navHeight = 0;


let scrolledHeight = $(window).scrollTop();
addBack2Top(scrolledHeight);
smallHeaderNoContactBar(scrolledHeight);
areWeOnTheMainPage();

$(window).scroll( function() {
    scrolledHeight = $(window).scrollTop();
    addBack2Top(scrolledHeight);
    smallHeaderNoContactBar(scrolledHeight);
});

navButton.addEventListener('click', function() {
    navButtonClassToggles();
});

back2top.addEventListener('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

function navButtonClassToggles() {
    mobileNav.classList.toggle('list-transform');
    navButtonSpan.classList.toggle('swirly');
}


function addBack2Top(distToTop) {
    if (distToTop > 80) {
        back2top.classList.add('addtoback2top');
    }
    else {
        back2top.classList.remove('addtoback2top');
    }
}

function smallHeaderNoContactBar(distToTop) {
    if (heroImage) {
        let heroImageBottom = isMyBottomPastTheTop(heroImage);
        if (heroImageBottom === true) {
            regNav.classList.add("navHolderSquished");
            contactBar.classList.add("contactBarGoAway");
        }
        else {
            regNav.classList.remove("navHolderSquished");
            contactBar.classList.remove("contactBarGoAway");
        }
    }
}

function areWeOnTheMainPage() {
    if (heroImage) {
        return true;
    }
    else {
        regNav.classList.add("navHolderSquishedNoLag");
        contactBar.classList.add("contactBarGoAwayNoLag");
        if (contactUsPage) {
            giveMeSomeSpaceNavBar(contactUsPage);
        }
    }
}

function giveMeSomeSpaceNavBar(elem) {
    let navBottom = whereAmI(regNav).bottom;
    let navTop = whereAmI(regNav).top;
    navHeight = navBottom-navTop;
    elem.style.marginTop = (navHeight-20)+"px";
}

function getMeSomePaddingTop(elem) {
    let padding = $(elem).css('padding-top');
    let temp = takeNumbersFromString(padding);
    return temp;
}

function takeNumbersFromString(str) {
    let matches = str.match(/(\d+)/);   //  ******IMPORTANT*******      (/(\d+)/) is regular expression for extracting number from string, DO NOT CHANGE
    let realNumber = parseInt(matches[0]);  //takes the new number only string portion and converts it into a whole number for mathematical use
    return realNumber;
}

function isMyBottomPastTheTop(elem) {
    let screentop = $(window).scrollTop();
    let targElem = whereAmI(elem).bottom;
    let targElemStatus;

    if (targElem < screentop) {
        targElemStatus = true;
    }
    else if (targElem.top <= screentop && targElem.bottom > screentop) {
        targElemStatus = false;
    }

    return targElemStatus;
}

function isMyTopPastTheNav(elem) {
    let elemPos = whereAmI(elem);
    let navPos = whereAmI(regNav);
    let status;
    if (elemPos.top < navPos.bottom) {
        status = true;
    }
    else if (elemPos.top > navPos.bottom) {
        status = false;
    }
    return status;
}

function whereAmI(elem) {
    let targElem = {
        top: ($(elem).offset().top),
        bottom: (($(elem).offset().top) + $(elem).height())
    };
    return targElem;
}