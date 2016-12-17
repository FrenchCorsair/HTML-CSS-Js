$(function() {
  // Ici, le DOM est entièrement défini
  $("#bouton1").mouseenter(function(){
      $(this).css("background-color","#4A78E0");
    }); 
  $("#bouton1").mouseleave(function(){
      $(this).css("background-color","#C39DD5");
    }); 
  $("#bouton1").click(function(){
      $(this).html("<audio src='toc.mp3' autoplay></audio>Et voilà!").css("background-color","#FE0A24");
      $("#bouton2").show("#bouton2");
    }); 
  $("#bouton2").mouseenter(function(){
      $(this).css("background-color","#4A78E0");
    }); 
  $("#bouton2").mouseleave(function(){
      $(this).css("background-color","#C39DD5");
    }); 
  $("#bouton2").click(function(){
      $(this).html("<audio src='toc.mp3' autoplay></audio>Et voilà!").css("background-color","#FE0A24");
      $("#bouton3").show("#bouton3");
    }); 
   $("#bouton3").mouseenter(function(){
      $(this).css("background-color","#4A78E0");
    }); 
  $("#bouton3").mouseleave(function(){
      $(this).css("background-color","#C39DD5");
    }); 
  $("#bouton3").click(function(){
      $(this).html("<audio src='toc.mp3' autoplay></audio>Et voilà!").css("background-color","#FE0A24");
      $("#bouton4").show("#bouton4");
    }); 
  $("#bouton4").mouseenter(function(){
      $(this).css("background-color","#4A78E0");
    }); 
  $("#bouton4").mouseleave(function(){
      $(this).css("background-color","#C39DD5");
    }); 
  $("#bouton4").click(function(){
      $(this).html("<audio src='toc.mp3' autoplay></audio>Et voilà!").css("background-color","#FE0A24");
      $("body").css("background-color", "pink");
    }); 
});