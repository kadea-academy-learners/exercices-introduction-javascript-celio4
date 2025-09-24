// Exercice 5 : conversion Celsius -> Fahrenheit avec fonction

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Exemple d'utilisation
let tempC = 25;
console.log(celsiusToFahrenheit(tempC));

// Exporter la fonction pour que le test Jest puisse l'utiliser
module.exports = { celsiusToFahrenheit };
