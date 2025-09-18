export default class Imc {
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc() {
        let imc = this.poids / (this.taille * this.taille);
        return imc.toFixed(2);
    }

    display() {
        console.log(`${this.nom} pèse ${this.poids} kg, mesure ${this.taille} m et a un IMC de ${this.calculImc()}.`);
    }
}
