let _showingBg2 = true;
$(document).ready(function() {
  $("#bg1").prop("src", "img/bg/" + (Math.floor(Math.random() * 20)) + ".jpg");
  $("#bg2").prop("src", "img/bg/" + (Math.floor(Math.random() * 20)) + ".jpg");
  window.setInterval(function(){
    if (_showingBg2) {
      $("#bg1").prop("src", "img/bg/" + (Math.floor(Math.random() * 20)) + ".jpg");
      $("#bg2").animate({opacity: 0}, 6000);
    } else {
      $("#bg2").prop("src", "img/bg/" + (Math.floor(Math.random() * 20)) + ".jpg");
      $("#bg2").animate({opacity: 1}, 6000);
    }
    _showingBg2 = !_showingBg2;
  }, 80000);
});
