const butt = document.querySelector("button");


butt.addEventListener("click", () => {
  let nomProduit = document.getElementById("nom_produit").value;
  let quantite = document.getElementById("quantite").value;
  let prixHT = document.getElementById("prix_ht").value;
  let resultatDiv = document.getElementById("resultat");

  if (nomProduit == "" || quantite == "" || prixHT == "" || resultatDiv == null) {
    alert("Veuillez remplir tous les champs obligatoires");
    return false;
  }

  let montantTTC = quantite * prixHT;
  resultatDiv.innerHTML = `Le montant total TTC pour ${quantite} ${nomProduit}(s) est de ${montantTTC} euros.`;
});