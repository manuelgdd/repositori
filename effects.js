jQuery(document).ready(function ($) {
    
$(".effects-login").hide();

$('.slogan').click(function(e){ 
    e.stopPropagation();
    $('.effects-login').slideToggle("fast");
    $("body").css("overflow-y","hidden");

});
$('.login').click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
     $('.effects-login').slideUp("fast");
     $("body").css("overflow-y","visible");
});

$('.register-danone .complete strong').mouseover(function(){ 
$('.register-danone .complete strong').rotate(12);
}).mouseout(function(){
$('.register-danone .complete strong').rotate(0);
});

$('.find-link').hover(function(){
    $('.submenu').slideToggle("fast");
});



});