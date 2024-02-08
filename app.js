let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Esta función se utiliza para actualizar el contenido de texto de un elemento HTML.
//document.querySelector(elemento): Encuentra el primer elemento HTML al que se dirigirá ('p', 'div', '#elementId', 'elementClass') y lo alamcena en la variable "elementoHTML".
//Actualiza la "innerHTML" propiedad del elemento HTML seleccionado al valor del texto.

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//Recupera el valor ingresado por el usuario de un elemento de entrada HTML con el ID "valorUsuario" y lo convierte a un número entero usando parseInt y lo almacena en la variable numeroDeUsuario.
    
    if (numeroDeUsuario === numeroSecreto) { //Si el numeroDeUsuario es igual al numeroSecreto
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
//Llama a la función donde llama el elemento P y coloca el texto "Acertaste el número en 5 veces" ó si intentos es igual a 1 entonces debe decir vez.
        document.getElementById('reiniciar').removeAttribute('disabled');
//Seleccionamos un botón con el ID reiniciar.
//El removeAttribute disable es para quitarle el atributo al botón de Nuevojuego de inactivo y pase a activo.
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
//Si el numeroDeUsuario es mayor al numeroSecreto, llamará la función con elemento P y con el mensaje "El número secreto es menor"
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
//Si el numeroDeUsuario es menor al numeroSecreto, llamará la función con elemento P y con el mensaje "El número secreto es mayor"
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//Incrementa el contador de intentos y borra el campo de entrada.


function limpiarCaja() {
    document.querySelector('#valorUsuario').value="";
    //Esta función sirve para que el usuario limpie el campod onde digita el número y no tengamos que estar borrando para colocar el próximo número.
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    //El título
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    //El subtitulo
    numeroSecreto = generarNumeroSecreto();
    //Llamar la función y vaciarla en la variable.
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //Seleccionamos  un botón con el ID reiniciar.
    //El setAttribute tiene dos parámetros, donde dice: que disabled debe ser reemplazado por true.
    
}

condicionesIniciales();