const lista1 = [
    100, 200, 300, 500
];
const lista2 = [
    1, 14, 151, 98
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

console.log(calcularMediaAritmetica(lista1))
console.log(calcularMediaAritmetica(lista2))

