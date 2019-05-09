setInterval(function() {

  if (gainedInfinityPoints().gte(
          player.lastTenRuns[0][1].mul("2e308"))) {
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

