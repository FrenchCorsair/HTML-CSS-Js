$(function() {
  // Ici, le DOM est entièrement défini
  $("#bouton1").mouseenter(function(){
      $(this).css("background-color","#4A78E0");
    }); 
  $("#bouton1").mouseleave(function(){
      $(this).css("background-color","#C39DD5");
    }); 
  $("#bouton1").click(function(){
      $(this).html("Et voilà!").css("background-color","#FE0A24");
      $("#bouton2").show("#bouton2");
    }); 
  $("#bouton2").mouseenter(function(){
      $(this).css("background-color","#4A78E0");
    }); 
  $("#bouton2").mouseleave(function(){
      $(this).css("background-color","#C39DD5");
    }); 
  $("#bouton2").click(function(){
      $(this).html("Et voilà!").css("background-color","#FE0A24");
      $("#bouton3").show("#bouton3");
    }); 
});