//Trigger Slide for Tab cotent//
$('.slideNext').click(function(){
 $('.nav-pills > .active').next('li').find('a').trigger('click');
});

 $('.slidePrevious').click(function(){
 $('.nav-pills > .active').prev('li').find('a').trigger('click');
});

// Full Screen Menu
function openNav(){
  document.getElementById('hamBurger').style.height="100%";
};
function closeNav() {
document.getElementById('hamBurger').style.height="0%";
};
