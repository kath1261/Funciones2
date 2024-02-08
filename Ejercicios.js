//1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
  }



//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//Una factorial es:
//1! = 1 * 1 = 1
//3! = 1 * 2 * 3 = 6
//10! = 1 * 2 * 3 … 8 * 9 * 10 = 3.628.800
//La factorial de 0 y 1 siempre será 1.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) { 
      return 1; //Si el número es igual a 0 o a 1 siempre devolverá 1.
    } else { //de lo contrario
      return numero * calcularFactorial(numero - 1);
    } //devolverá el número * el mismo numero -1
    // return 5 * 4
    //returno 5 * 4 * 3 y asi sucesivamente hasta que tope a 1
  }
  // Ejemplo de uso
  let numero = 5; //declara variable en 5
  let resultado = calcularFactorial(numero);
  //Una vez que multipllique todo se almacenará en resultado.
  console.log(`El factorial de ${numero} es ${resultado}`);
  //Mostrará "El factorial de 5 es 120"
  


//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80. (Reales es moneda brasileña)

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80; //Variable del costo del dolar, es decir 4.80 reales por dolar
  var reales = dolares * cotizacionDolar; //Se multiplica cantidad de dólares (`dolares`) por la tasa de cambio (`cotizacionDolar`). El resultado se almacena en la variable `reales`.
  return reales; //devuelve el valor calculado de reales.
}
// Ejemplo de uso:
//Se establece `valorEnDolar` en 50 dólares y se llama a la función `convertirDolaresAReales()` pasando este valor como argumento. El resultado se almacena en `valorEnReales`, y luego se muestra en la consola utilizando `console.log()`.
let valorEnDolar = 50; //
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);


//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);
  //Manda llamar la función para que haga todo el proceso entre llaves.


  //5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

  function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);
    //Manda llamar la función para que haga todo el proceso entre llaves.



//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
//Mostrará: 7 x 7 = 5 ; hasta llegar a 10.
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);
  
