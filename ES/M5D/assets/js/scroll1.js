// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction1()};

function myFunction1() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 30;
  document.getElementById("myBar").style.width = scrolled + "%";
}
