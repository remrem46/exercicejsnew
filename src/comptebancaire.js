export default class CompteBancaire {
    constructor(nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }

    ajouter(montant) {
        this.solde += montant;
    }

    retirer(montant) {
        if (montant <= 0) {
            throw new Error("Montant invalide");
        }
        if (montant > this.solde) {
            throw new Error("Fonds insuffisants");
        }
        this.solde -= montant;
    }

    virement(montant, target) {
        if (montant <= 0) {
            throw new Error("Montant invalide");
        }
        if (montant > this.solde) {
            throw new Error("Fonds insuffisants");
        }
        this.solde -= montant;
        target.solde += montant;
    }

    afficher() {
        console.log(`Compte de ${this.nom} : ${this.solde} €`);
    }
}

const compteAlex = new CompteBancaire("Alex", 1000);
const compteClovis = new CompteBancaire("Clovis", 500);
const compteMarco = new CompteBancaire("Marco", 1500);

try {
    compteAlex.retirer(100);
    compteMarco.virement(300, compteClovis); 
    compteAlex.retirer(100); 
} catch (error) {
    console.log(error.message);
}

console.log("\n--- Soldes finaux ---");
compteAlex.afficher();
compteClovis.afficher();
compteMarco.afficher();
