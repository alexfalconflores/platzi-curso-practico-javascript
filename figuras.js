console.group("Cuadrados");
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;
console.groupEnd();

console.group("Circulos");
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
console.log("PI es: " + PI + " cm");
const perimetroCirculo = (radio) => (diametroCirculo(radio)) * PI;
const areaCirculo = (radio) => (radio * radio) * PI;
console.groupEnd();

console.group("Isosceles");
const alturaTrianguloIsosceles = (lado1, lado2, base) => {
    if (lado1 == null || lado2 == null || base == null) {
        return "Ingrese datos";
    }
    else if (lado1 == 0 || lado2 == 0 || base == 0) {
        return "Datos no pueden ser 0";
    }
    else if (lado1 != lado2) {
        return "No es isosceles";
    }
    else if (lado1 === lado2 && lado1 !== base) {
        const baseMitad = base / 2;
        const altura = Math.sqrt((lado1 * 2) - (baseMitad * 2));
        return altura
    }
}
console.groupEnd();

// Aquí interactuamos con el HTML
let resultadoCuadrado = document.getElementById("resultadoCuadrado");
let resultadoTriangulo = document.getElementById("resultadoTriangulo");
let resultadoTrianguloIsosceles = document.getElementById("resultadoTrianguloIsosceles");
let resultadoCirculo = document.getElementById("resultadoCirculo");

// Cuadrado
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    resultadoCuadrado.innerText = "Perimetro: " + perimetro + " cm";
};
const calcularAreaCuadrado = () => {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    resultadoCuadrado.innerText = "Area: " + area + " cm²";
};

// Triangulo
const calcularPerimetroTriangulo = () => {
    const lado1 = document.getElementById("inputTrianguloLado1");
    const lado2 = document.getElementById("inputTrianguloLado2");
    const base = document.getElementById("inputTrianguloBase");
    const valueLado1 = lado1.value;
    const valueLado2 = lado2.value;
    const valueBase = base.value;
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    resultadoTriangulo.innerText = "Perimetro: " + perimetro + " cm";
};
const calcularAreaTriangulo = () => {
    const base = document.getElementById("inputTrianguloBase");
    const altura = document.getElementById("inputTrianguloAltura");
    const valueBase = base.value;
    const valueAltura = altura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    resultadoTriangulo.innerText = "Area: " + area + " cm²";
};

// Triangulo Isosceles
const calcularAlturaTrianguloIsosceles = () => {
    const lado1 = document.getElementById("inputTrianguloIsoscelesLado1");
    const lado2 = document.getElementById("inputTrianguloIsoscelesLado2");
    const base = document.getElementById("inputTrianguloIsoscelesBase");
    const valueLado1 = lado1.value;
    const valueLado2 = lado2.value;
    const valueBase = base.value;
    const altura = alturaTrianguloIsosceles(valueLado1, valueLado2, valueBase);
    resultadoTrianguloIsosceles.innerText = "Altura: " + altura + " cm";
};

// Circulo
const calcularPerimetroCirculo = () => {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const perimetro = perimetroCirculo(radio);
    resultadoCirculo.innerText = "Perimetro: " + perimetro + " cm";
};
const calcularAreaCirculo = () => {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    const area = areaCirculo(radio);
    resultadoCirculo.innerText = "Area: " + area + " cm²";
};