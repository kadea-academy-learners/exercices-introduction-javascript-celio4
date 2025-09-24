// Héritage total
const maison = 60000000;
const terrains = 40000000;
const liquidites = 20000000;
const patrimoineTotal = maison + terrains + liquidites;

// Première catégorie : 75% pour les enfants
const partEnfants = patrimoineTotal * 0.75;

// Paul et Marie ont chacun 1 part
let paul = partEnfants / 3;
let marie = partEnfants / 3;

// Alain est décédé, représenté par Éric et Claire
let eric = (partEnfants / 3) / 2;
let clair = (partEnfants / 3) / 2;

// Deuxième catégorie : 25% pour le conjoint et frères/nièce
const partAutres = patrimoineTotal * 0.25;

// Répartition à parts égales entre Madame MUKUNA, Joseph et Sarah
let madameMukuna = partAutres / 3;
let joseph = partAutres / 3;
let sarah = partAutres / 3;

// Affichage (optionnel, juste pour vérifier)
console.log("Paul :", paul);
console.log("Marie :", marie);
console.log("Éric :", eric);
console.log("Claire :", clair);
console.log("Madame MUKUNA :", madameMukuna);
console.log("Joseph :", joseph);
console.log("Sarah :", sarah);

// Si le test demande les variables exactes, elles sont toutes déclarées ci-dessus
module.exports = { paul, marie, eric, clair, madameMukuna, joseph, sarah };
