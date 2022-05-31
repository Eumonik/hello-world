//Mouse Hover Function to update caption
function mePhinks(imgs) {
  var caption = document.getElementById("caption");
  caption.innerHTML = imgs.alt;
}

//Mouse Click function to update border and display main image
function meFawnky(imgs) {

  thumb1.style.border = "0px solid #dadb0d"
  thumb2.style.border = "0px solid #dadb0d"
  thumb3.style.border = "0px solid #dadb0d"
  thumb4.style.border = "0px solid #dadb0d"
  thumb5.style.border = "0px solid #dadb0d"


  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";

  if (expandImg) {
    imgs.style.border = "7px solid #ff6633";
  }


}
