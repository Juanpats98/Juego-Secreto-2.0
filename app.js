let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemnto ( elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
   let númeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

   
   if (númeroDeUsuario === numeroSecreto) {
        asignarTextoElemnto ("p",`Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    // El usuario no acertó
        if(númeroDeUsuario > numeroSecreto) {
            asignarTextoElemnto("p","El número secreto es menor");
        } else {
            asignarTextoElemnto("p","El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
   }
    return;
}
function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemnto('p','Ya se sortearon todos los numeros posibles');
        } else {
      //Si el numero generado esta incluido en la lista

      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }  else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemnto ("h1","juego del número secreto");
    asignarTextoElemnto ("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego (){
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');
}

condicionesIniciales(); 


