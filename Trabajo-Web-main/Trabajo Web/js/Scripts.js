function validar(rut,nombre,correo,edad,contraseña,direccion){
    var email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var name = /^[a-zA-Z]+$/;
    if(String(rut).length<8 || String(rut).length>9){
        //Aqui deberia ir mensaje de error
    }else if(String(nombre).length<3 || String(nombre).length<20 || !name.test(nombre)){       
        //Aqui deberia ir mensaje de error
    }else if(String(correo)=="" || !email.test(correo)){
        //Aqui deberia ir mensaje de error
    }else if(String(edad)==""){
        //Aqui deberia ir mensaje de error
    }else if(String(contraseña).length<5){
        //Aqui deberia ir mensaje de error
    }else if(String(direccion)==""){
        //Aqui deberia ir mensaje de error
    } else {
        return true
    }
}
    
function validar() {
    let user = document.getElementById("nombre").value;
    let pass = document.getElementById("contraseña").value;
    if (String(user).length >= 5) {
        if (String(pass).length > 3) {
            document.getElementById("nombre").style.border = "1px solid lightgrey";
            document.getElementById("contraseña").style.border = "1px solid lightgrey";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>" +
                "Acceso Concedido</div>"
        } else {
            document.getElementById("contraseña").style.border = "1px solid red";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                "Contraseña debe tener minimo 8 caracteres</div>"
        }
    } else {
        document.getElementById("nombre").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Usuario debe tener minimo 5 y maximo 20 caracteres</div>"
    }
}