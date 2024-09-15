
function login() {

    let user=document.getElementById("usuario").value
    let pass=document.getElementById("contraseña").value
        
        if (user=="Marcelo" && pass=="123456") {
        window.location="juego.html"
    }
    else {
        alert("Datos mal ingresados")
    }
}
