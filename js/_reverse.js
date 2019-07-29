var card_header = document.getElementById("headingOne");
var icon_reverse = document.getElementById("icon-reverse")
card_header.addEventListener("click", function(){
  icon_reverse.classList.toggle("icon-chevron-down-reverse")
})

var active_click = document.getElementById("active-click");
var tab_a =  document.getElementById("tab-A");
var tab_b =  document.getElementById("tab-B");
var k = 1
// if(k){
//   active_click.addEventListener('click', function(){
//     tab_a.classList.toggle("active-click");
//     k = 0
//   })
// } else{
//     active_click.addEventListener('click', function(){
//       tab_b.classList.toggle("active-click");
//       k = 1
//     })
// }
