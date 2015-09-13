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
// var data = {
    // name: $("#form_name").val(),
    // email: $("#form_email").val(),
    // message: $("#msg_text").val()
// };
$(document).on('click','#submitMail',function(){
	var data = {
	    name: "haim",
	    email: "haimyyy@gmail.com",
	    message: "massage"
	};
	$.ajax({
	    type: "POST",
	    url: "email.php",
	    data: data,
	    success: function(){
	        $('.success').fadeIn(1000);
	    }
	});
});