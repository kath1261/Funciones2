//Hacer el código más pequeño.

function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;
  
    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  
  const numero = 5;
  const resultado = calcularDobleTriple(numero);
  console.log(resultado);

  //Solución:
  //Esta opción es correcta porque divide la funcionalidad en dos funciones separadas, calcularDoble y calcularTriple, lo que mejora la modularidad y facilita la comprensión del código. Además, utiliza variables explícitas (doble y triple) para almacenar los resultados, lo que hace que el código sea más legible.

  function calcularDoble(numero) {
    return numero * 2;
  }
  
  function calcularTriple(numero) {
    return numero * 3;
  }
  
  const numero = 5;
  const doble = calcularDoble(numero);
  const triple = calcularTriple(numero);
  
  console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);

  