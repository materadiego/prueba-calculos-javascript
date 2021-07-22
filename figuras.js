// Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//  "Los lados del trianguos miden: " +
//    ladoTriangulo1 +
//    "cm, " +
//    ladoTriangulo2 +
//    "cm, " +
//    baseTriangulo +
//    "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo de circunferencias
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("Radio del circulo: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Perimetro
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd;

// Aquí interactuamos con el HTML

// CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("Perimetro Cuadrado: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("Area Cuadrado: " + area);
}

// TRIANGULO
function calcularPerimetroTriangulo() {
  const inputT1 = document.getElementById("InputTriangulo1");
  const inputT2 = document.getElementById("InputTriangulo2");
  const inputT3 = document.getElementById("InputTriangulo3");

  const valueT1 = Number(inputT1.value);
  const valueT2 = Number(inputT2.value);
  const valueT3 = Number(inputT3.value);

  const perimetro = perimetroTriangulo(valueT2, valueT3, valueT1);
  alert("Perimetro Triangulo: " + perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input4 = document.getElementById("InputTriangulo4");

  const value1 = Number(input1.value);
  const value2 = Number(input4.value);

  const area = areaTriangulo(value1, value2);
  alert("Area Triangulo: " + area);
}

// CIRCULO
function calcularPerimetroCirculo() {
  const inputC1 = document.getElementById("InputCirculo");

  const valueC1 = Number(inputC1.value);

  const perimetro = perimetroCirculo(valueC1);
  alert("Perimetro Circulo: " + perimetro);
}

function calcularAreaCirculo() {
  const inputC1 = document.getElementById("InputCirculo");

  const valueC1 = Number(inputC1.value);

  const area = areaCirculo(valueC1);
  alert("Area Circulo: " + area);
}
