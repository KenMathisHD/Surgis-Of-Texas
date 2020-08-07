const aBnds = document.getElementById("a-bnds");
const aTopos = document.getElementById("a-topos");
const aConstrs = document.getElementById("a-constrs");
const aAnts = document.getElementById("a-ants");
const aTnls = document.getElementById("a-tnls");
const aFemafls = document.getElementById("a-femafls");

const bnds = document.getElementById("b-n-d-s");
const topos = document.getElementById("topo-s");
const constrs = document.getElementById("constr-s");
const ants = document.getElementById("a-n-t-s");
const tnls = document.getElementById("t-n-l-s");
const femafls = document.getElementById("fema-fl-s");



aBnds.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(bnds).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
aTopos.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(topos).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
aConstrs.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(constrs).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
aAnts.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(ants).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
aTnls.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(tnls).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});
aFemafls.addEventListener('click', function() {
    let navHeight = regNav.scrollHeight;
    let elemTop = (whereAmI(femafls).top)-navHeight;
    $("html, body").animate({ scrollTop: elemTop }, "slow");
});