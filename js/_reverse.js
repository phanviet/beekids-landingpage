var card_header = document.getElementById("headingOne");
var icon_reverse = document.getElementById("icon-reverse")
card_header.addEventListener("click", function(){
  icon_reverse.classList.toggle("icon-chevron-down-reverse")
})
