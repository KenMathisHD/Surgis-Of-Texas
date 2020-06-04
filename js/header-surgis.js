const contactBar = document.getElementById("contact-bar");
const regNav = document.getElementById("regular-nav");
const navButton = document.getElementById("nav-mobile-button");
const mobileNav = document.getElementById("mobile-nav");
const back2top = document.getElementById("back2top");
const navButtonSpan = document.getElementById("nav-button-span");
const heroImage = document.getElementById("hero-image");

$(window).scroll( function() {
    let scrolledHeight = $(window).scrollTop();
    addBack2Top(scrolledHeight);
    smallHeaderNoContactBar(scrolledHeight);
    console.log(scrolledHeight);
});

navButton.addEventListener('click', function() {
    mobileNav.classList.toggle('list-transform');
    navButtonSpan.classList.toggle('swirly');
});

back2top.addEventListener('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});


function addBack2Top(distToTop) {
    console.log(distToTop);
    if (distToTop > 80) {
        back2top.classList.add('addtoback2top');
    }
    else {
        back2top.classList.remove('addtoback2top');
    }
}

function smallHeaderNoContactBar(distToTop) {
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

function isMyBottomPastTheTop(elem) {
    let screentop = $(window).scrollTop();
    // let screenbottom = docViewTop + $(window).height();    screen view bottom
    let targElem = {
        top: ($(elem).offset().top)-120,
        bottom: (($(elem).offset().top)-60) + $(elem).height()
    };
    if (targElem.bottom < screentop) {
        targElem.status = true;
    }
    else if (targElem.top <= screentop && targElem.bottom > screentop) {
        targElem.status = false;
    }

    return targElem.status;
}
