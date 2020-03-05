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

// Modal origin C3SCHOOL
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
// Get the modal
// Modal origin C3SCHOOL


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i=0; i<imgs.length;i++){
    imgs[i].onclick = onclick_img_alone;   
}
function onclick_img_alone(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// document.getElementById("hidden").onmouseover = function() {mouseOver()};
// document.getElementById("hidden").onmouseout = function() {mouseOut()};

// function mouseOver() {
//   document.getElementById("hidden").show;
// }

// function mouseOut() {
//   document.getElementById("hidden").hide;
// }
//Evènement "mouseover" sur l'élément 1
Event.observe( $('.myFig_Img'), 'mousover', function (e) {
  //Affichage de l'élément 2
  $('.hidden').style.display = '';
});
//Evènement "mouseout" sur l'élément 1
Event.observe( $('.myFig_Img'), 'mouseout', function (e) {
  //Masquage de l'élément 2
  $('.hidden').style.display = 'none';
});