/*script burger*/
// var content = document.querySelector("#burger_content");
// var sidebarBody = document.querySelector("#burger_sidebar_body");
// var button = document.querySelector("#burger_button");
// var overlay = document.querySelector("#burger_overlay");
// var activatedClass = "burger_activated";

// sidebarBody.innerHTML = content.innerHTML;

// button.addEventListener("click", function(e) {
//     e.preventDefault();

//     this.parentNode.classList.add(activatedClass);
// });

// button.addEventListener("keydown", function(e) {
//    if (this.parentNode.classList.contains(activatedClass)){

//    if (e.repeat === false && e.which === 27)   Pour eviter erreur sur appui long touche et 27 correspond aà la touche echapp
//        this.parentNode.classList.remove(activatedClass);
//    }
// });

// overlay.addEventListener("click", function(e) {
//     e.preventDefault();

//     this.parentNode.classList.remove(activatedClass);
// });
/*script burger*/
/*script accordion*/
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }
/*script accordion*/
$(".accordion h4").on("click", function(){
           
  if($(this).find("span").hasClass("fa-plus")){ 
      $(".accordion h4").find("span.fa-minus").removeClass("fa-minus").addClass("fa-plus")
      $(".accordion h4").siblings("p").slideUp(400)
      $(this).find("span").addClass("fa-minus").removeClass("fa-plus")
      $(this).siblings("p").slideDown(400)
  }
  
})