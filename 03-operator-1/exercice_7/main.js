// Exercice 7 : calcul des âges avec opérateurs

let ageEnfant = 10;                  // âge de l'enfant
let agePere = ageEnfant * 2;         // âge du père = double de l'enfant
let ageMere = agePere - 5;           // âge de la mère = père - 5
let ageGrandPere = ageMere * 2 + ageEnfant / 2; // grand-père = double de la mère + moitié de l'enfant
let ageOncle = agePere + 10;         // oncle = père + 10

// Exporter les variables pour les tests
module.exports = { ageEnfant, agePere, ageMere, ageGrandPere, ageOncle };
