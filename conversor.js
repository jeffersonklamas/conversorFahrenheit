//Convert Celsius to Fahrenheit
// Para converter Celsius em Fahrenheit Multiplique por 1.8 e adicione 32 


function conversor(temperatura) {
    if (typeof(temperatura) != 'number') {
        return 'Não é um número!'
    } else {
        return (temperatura * 1.8 + 32).toString() + '°F'
    }
}

console.log(conversor(25))

module.exports = conversor;
