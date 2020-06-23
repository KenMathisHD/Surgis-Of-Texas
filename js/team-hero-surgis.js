const lydMcC = document.getElementById("lyd-mcc");
const phiHam = document.getElementById("phi-ham");
const kimMar = document.getElementById("kim-mar");
const lydMcCProf = document.getElementById("lyd-mcc-prof");
const phiHamProf = document.getElementById("phi-ham-prof");
const kimMarProf = document.getElementById("kim-mar-prof");

lydMcC.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(lydMcCProf).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
phiHam.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(phiHamProf).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
kimMar.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(kimMarProf).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
