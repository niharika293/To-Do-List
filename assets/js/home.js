//testing if the script is loaded.
console.log("My Script is loaded!!");

$(document).ready(function(){
    $(" #para_dp input").focus(function(){
      $("span").css("display", "inline");
    });
  });
$('.personal').html('<i class="fas fa-user-clock"></i> PERSONAL').css('background-color','#e91e63');
$('.school').html('<i class="fas fa-school"></i> SCHOOL').css('background-color','#009688');
$('.work').html('<i class="fas fa-briefcase"></i> WORK').css('background-color','#9e9d24');
$('.home').html('<i class="fas fa-home"></i> HOME').css('background-color','#c5a4ff');
$('.cleaning').html('<i class="fas fa-broom"></i> CLEANING').css('background-color','#9c27b0');

