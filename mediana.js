const lista1 = [
    100, 200, 500, 800, 400000000
];
const lista2 = [
    1, 2, 1000000, 14, 151, 98
];


const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const esPar = (numero) => {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const calcularMediana = (lista) => {
    let mediana;
    let list = lista.sort((a, b) => a - b);
    const mitadLista = parseInt(list.length / 2);
    if (esPar(list.length)) {
        const elemento1 = list[mitadLista - 1];
        const elemento2 = list[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    }
    else {
        mediana = list[mitadLista]
    }
    return mediana;
}

console.log(calcularMediana(lista1));
console.log(calcularMediana(lista2));