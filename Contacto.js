const resultados = document.querySelector('.Contacto');
const telefono = document.querySelector('#telefono');
const nombre = document.querySelector('#nombre');
const mensaje = document.querySelector('#mensaje');
const correo = document.querySelector('#email');
const enviar = document.querySelector('#enviar');
const aceptar = 0;

enviar.addEventListener('click', valida_envia);

function valida_envia() {

    // Validacion del Nombre
    if (nombre.value.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        nombre.focus();
        return 0;
    }

    // Validacion del Correo
    var s = correo.value;
    var filtro = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filtro.test(s)) {
        alert("El correo electrónico no es válido.");
        correo.focus();
        return 0;
    }

    // Validacion del telefono
    var t = telefono.value;
    var tel = /^([0-9]{10})+$/;

    if (!tel.test(t)) {
        alert("El número de teléfono no es válido. Debe contener 10 dígitos.");
        telefono.focus();
        return 0;
    }

     // Validacion del Mensaje
    if (mensaje.value.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        mensaje.focus();
        return 0;
    }
    
    
    resultados.innerHTML = "Muchas gracias por enviarnos un mensaje,nos pondremos en contacto contigo lo antes posible.";
    function greetings() { fvalida.submit(); }
    //Agregamos un tiempo de espera para simular la que se va la informacion
    setTimeout(greetings, 2000);
}


