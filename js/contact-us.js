const findUs = document.getElementById("find-us");
const map = document.getElementById("map");

findUs.addEventListener('click', function() {
    let mapTop = ((whereAmI(map).top)-navHeight);
    $("html, body").animate({ scrollTop: mapTop }, "slow");
});