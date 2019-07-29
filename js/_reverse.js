var card_header = document.getElementById("headingOne");
var icon_reverse = document.getElementById("icon-reverse")
card_header.addEventListener("click", function(){
  icon_reverse.classList.toggle("icon-chevron-down-reverse")
})

var active_click = document.getElementById("active-click");
var tab_a =  document.getElementById("tab-A");
var tab_b =  document.getElementById("tab-B");
tab_a.addEventListener('click', function(){
    tab_b.classList.remove("active-click");
    tab_a.classList.add("active-click");
})
tab_b.addEventListener('click', function(){
    tab_a.classList.remove("active-click");
    tab_b.classList.add("active-click");
})

