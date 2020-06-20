window.addEventListener("scroll",function(){
  if(window.scrollY > 40){
    document.querySelector(".fixedbar").classList.add("active");
  }
  else{
    document.querySelector(".fixedbar").classList.remove("active");
  }
})
if(window.scrollY > 40){
    document.querySelector(".fixedbar").classList.add("active");
  }
$(".fixedbar div:nth-child(2) div").click(()=>{
  $('.fixedbar').toggleClass("togglebar");
  $('#main').toggleClass("togglebar");
  $('nav').toggleClass("togglebar");
  $('.scrollTop').toggleClass("togglebar");
})