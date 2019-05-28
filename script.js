var nbep = "1";

setInterval(function() {

  if (!player.break || player.currentChallenge != "") {
    document.getElementById("bigcrunch").click();
    return;
  }

  var currentIPmin = gainedInfinityPoints().dividedBy(player.thisInfinityTime / 600);

  var est = Math.log(player.replicanti.chance + 1) * 1000 / player.replicanti.interval;
  var estimate = Math.max(Math.log(Number.MAX_VALUE) / est, 0) * 10;
  if (player.timestudy.studies.includes(133)) estimate *= 10;
  if (player.timestudy.studies.includes(131)) estimate *= 1.5;
  if (player.timestudy.studies.includes(62)) estimate /= 3;
  var stoptime = (1 + player.replicanti.gal) * estimate;

  if (gainedInfinityPoints().gte(
          player.lastTenRuns[0][1].mul(Math.pow(10, 1.9 * Math.log2(player.lastTenRuns[0][1].e))))) {
    document.getElementById("bigcrunch").click();
    return;
  }

  if (gainedInfinityPoints().gte(1) && player.infinityPoints.lte(1)) {
    document.getElementById("bigcrunch").click();
    return;
  }

  if (player.thisInfinityTime > stoptime) {
    document.getElementById("bigcrunch").click();
    return;
  }

}, 300);

var activateMA = true;
setInterval(function() {
  if (activateMA) {
    document.getElementById("maxall").click();
  }
}, 30);

setInterval(function() {
  if (player.eightAmount.gte(getGalaxyRequirement())) {
    maxBuyGalaxies(true);
  }
  maxBuyDimBoosts(true);
}, 300);

setInterval(function() {
  if (calcSacrificeBoost().gte(4)) {
    document.getElementById("sacrifice").click();
  }
  if (gainedInfinityPoints().gte(1e140) && !player.replicanti.unl) {
    unlockReplicantis();
  }
  if (gainedEternityPoints().gte(nbep)) {
    eternity(true, true);
  }
}, 1000);

setInterval(function() {
  document.getElementById("newDimensionButton").click();
  document.getElementById("replicantireset").click();
  document.getElementById("replicantiinterval").click();
  document.getElementById("replicantichance").click();
  document.getElementById("replicantimax").click();
  document.getElementById("infMax1").click();
  document.getElementById("infMax2").click();
  document.getElementById("infMax3").click();
  document.getElementById("infMax4").click();
  document.getElementById("infMax5").click();
  document.getElementById("infMax6").click();
  document.getElementById("infMax7").click();
  document.getElementById("infMax8").click();
  document.getElementById("infiMult").click();
}, 500);
