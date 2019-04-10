var mpeak = 0;
var mip = 0;
var incr = 0;
var runlength = 3000;
var nbrun = 10;
var nbrg = 6.2;

setInterval(function() {

  if (!player.break || player.currentChallenge != "") {
    document.getElementById("bigcrunch").click();
    return;
  }

  if (incr > nbrun) {
    incr = 0;
    mpeak = 0;
    mip = 0;
  }

  var currentIPmin = gainedInfinityPoints().dividedBy(player.thisInfinityTime / 600);

  if (currentIPmin.gt(mpeak)) {
    mip = gainedInfinityPoints();
    mpeak = currentIPmin;
  }

  var est = Math.log(player.replicanti.chance + 1) * 1000 / player.replicanti.interval;
  var estimate = Math.max(Math.log(Number.MAX_VALUE) / est, 0) * 10;
  var stoptime = nbrg * estimate;

  if (gainedInfinityPoints().gte(
          player.infinityPoints.mul(Math.pow(10, 1.1 * Math.log2(player.infinityPoints.e))))) {
    document.getElementById("bigcrunch").click();
    incr++;
    return;
  }

  if (incr != 0 && gainedInfinityPoints().gte(mip)) {
    // document.getElementById("bigcrunch").click();
    // incr++;
    // return;
  }

  if (player.replicanti.unl) {
    if (player.thisInfinityTime > stoptime) {
      document.getElementById("bigcrunch").click();
      incr++;
      return;
    }
  } else {
    if (player.thisInfinityTime > runlength) {
      document.getElementById("bigcrunch").click();
      incr++;
      return;
    }
  }

}, 300);

var activateMA = true;
setInterval(function() {
  if (activateMA) {
    document.getElementById("maxall").click();
  }
}, 30);

setInterval(function() {
  document.getElementById("secondSoftReset").click();
  document.getElementById("softReset").click();
}, 300);

setInterval(function() {
  if (calcSacrificeBoost().gte(4)) {
    document.getElementById("sacrifice").click();
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