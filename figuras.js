// Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = (lado) => lado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = (lado) => lado * lado;
// console.log("El area cuadrado es: " + areaCuadrado + " cm²");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " cm");

const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log("El area del triangulo es de: " + areaTriangulo + " cm²");

console.groupEnd();

// Codigo del Circulos
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");
//Diametro
const diametroCirculo = (radio) => radio * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");
//PI
const PI = Math.PI;
console.log("PI es: " + PI + " cm");
//Circuferencia
const perimetroCirculo = (radio) => (diametroCirculo(radio)) * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
//Area
const areaCirculo = (radio) => (radio * radio) * PI;
// console.log("El area del circulo es: " + areaCirculo + " cm²");

console.groupEnd();