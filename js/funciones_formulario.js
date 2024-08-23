$(function(){

	$("#send").click(function(){

	var nombre = $("#full_name").value();
	var correo = $("#email").value();
	var telefono = $("#phone_number").value();
	var comentarios = $("#comments").value();

	var data = 'full_name=' +nombre 
			 +'&email=' +correo 
			 +'&phone_number=' +telefono 
			 +'&comments=' +comentarios;

	$.ajax({
		type: "POST",
		url: "../php/conexion_bd.php",
		data: data,
		success: function(){
			alert("Los datos se guardaron correctamente");
        },
        error: function(){
        	alert("Sucedio un error");
        }
    });    
    //para evitar recargar la página

    return false;

            
	});

	




});