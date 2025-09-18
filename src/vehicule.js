export default class Vehicule {
  constructor(nomVehicule, nbrRoue, vitesse) {
    this.nomVehicule = nomVehicule;
    this.nbrRoue = nbrRoue;
    this.vitesse = vitesse;
  }    

  
  detect(){
    if (this.nbrRoue === 2) {
      return "moto";
    } else if (this.nbrRoue === 4) {
      return "voiture";
    } else {
      return "inconnu";
    }
  }


   boost() {
    this.vitesse += 50;
  }
}





