'use strict';
 var mySlider=[
"photo/home-1-slider-image-1.jpg",
"photo/home-1-slider-image-2.jpg",
"photo/home-1-slider-image-3.jpg",
]
var currentSlide=0;
var img=document.querySelector(".slider img")
img.src=mySlider[0]
var next=document.querySelector(".next")
var prev=document.querySelector(".prev")
next.onclick=function(){
    currentSlide++;
    if(currentSlide>=mySlider.length){
        currentSlide=0
    }
    img.src=mySlider[currentSlide]
}
prev.onclick=function(){
    currentSlide--;
    if(currentSlide==-1){
        currentSlide=mySlider.length-1
    }
    img.src=mySlider[currentSlide]
}