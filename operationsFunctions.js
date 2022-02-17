const drawCalculator = (numberOne, numberTwo) => {
    return `
    <h1>Resultados</h1><h2>
    <p>${numberOne} + ${numberTwo} = ${
        numberOne + numberTwo
    }</p><p>${numberOne} - ${numberTwo} = ${
        numberOne - numberTwo
    }</p><p>${numberOne} * ${numberTwo} = ${
        numberOne * numberTwo
    }</p><p>${numberOne} / ${numberTwo} = ${numberOne / numberTwo}</p>
    </h2>`;
};

module.exports = { drawCalculator };
