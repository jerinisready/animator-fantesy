$(document).ready(function(){
    console.log('Ready!')
});

window.onscroll = function() {scroll_marker(); };

function scroll_marker() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
