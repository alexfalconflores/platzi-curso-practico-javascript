const NUMBERS = [8, 1, 9, 2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const calcularModa1 = (lista) => {
    const listaCount = {};
    lista.map(elemento => {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    })
    const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);
    const moda = listaArray[listaArray.length - 1];
    return moda[0];
}

const calcularModa2 = (lista) => {
    return lista.sort((a, b) => lista.filter(c => c === a).length - lista.filter(c => c === b).length).pop();
}

console.log(calcularModa1(NUMBERS))
console.log(calcularModa2(NUMBERS))
