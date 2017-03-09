function enviar(){

	window.location="timeline.html"
}


function validaciones(){

	var user = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var spanEmail = document.getElementById("email-error");
	var spanContra = document.getElementById("password-error");
	var usuariosValidos = {usuario: "mitrodle@gmail.com", contra: "mishrole"};
	if(user.value.length == 0){
		spanEmail.innerHTML = "El campo de usuario no puede estar en blanco"
	}else if(password.value.length == 0){
		spanContra.innerHTML = "El campo de password no puede estar en blanco"
	}else{
		spanEmail.innerHTML = ""
		spanContra.innerHTML = ""
		if(user.value !== usuariosValidos.usuario){
		spanEmail.innerHTML = "Usuario inválido"
		}else if(password.value !== usuariosValidos.contra){
			spanContra.innerHTML = "Contraseña inválida"
		}else{
			spanEmail.innerHTML = ""
			spanContra.innerHTML = ""
			enviar();
		}
	}
}
