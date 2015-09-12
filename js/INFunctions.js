var navList = ["about","gallery","contactUs","cusSrevise"];
$(document).on('click',".nav li", function(){
	$.each(navList, function(index,val){
		$('.col-md-8 section').hide();
	});
	var me = $(this).attr('class');
	$('section.'+me).show();
});
$(document).on('click',".navbar-brand", function(){
	$.each(navList, function(index,val){
		$('.col-md-8 section').hide();
	});
	$('section.INeng').show();
});