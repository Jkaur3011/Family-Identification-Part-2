Webcam.set({
  width : 400,
  height : 400,
  image_format : "png",
  png_quality : 90
})

camera = document.getElementById("camera"); //camera added
Webcam.attach("#camera"); //camera attached

function capture_img(){
  Webcam.snap(function(image_passed){
      document.getElementById("result").innerHTML = "<img src='"+image_passed+"' id='user_imgcapture' >"
  });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HJS1jqST_/model.json", ModelLoaded);


//ADDITIONAL:
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  
  