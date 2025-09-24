// Exercice 8 : gestion simple de budget

// 1. Salaire
let salaireMensuel = 500;

// 2. Dépenses
let loyer = salaireMensuel * 0.3;        // 30%
let nourriture = salaireMensuel * 0.2;   // 20%
let transport = salaireMensuel * 0.1;    // 10%
let autresDepenses = 50 + 25;            // ajouter 25 à 50

// 3. Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 4. Reste
let reste = salaireMensuel - totalDepenses;

// Export pour les tests
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste
};
