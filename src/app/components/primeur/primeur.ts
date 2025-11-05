import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProduitComponent } from '../produit/produit';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-primeur',
  imports: [ProduitComponent, ReactiveFormsModule],
  templateUrl: './primeur.html',
  styleUrl: './primeur.css'
})
export class PrimeurComponent {

  // ---------- ATTRIBUTS -----------------------------
  @ViewChildren(ProduitComponent) enfants! : QueryList<ProduitComponent>

  produits: Produit[]  = [
    {nom: " bananes \u{1F34C}", prix: 3, quantite: 15},
    {nom: "fraises \u{1F353}", prix: 10, quantite: 20},
    {nom: "poivrons \u{1FAD1}", prix: 5, quantite: 10}
  ]

  produitForm: FormGroup
  total:number = 0;
  isActualizationDisabled = false;

  constructor(private fb: FormBuilder) {
    this.produitForm = this.fb.group({
      nom: "",
      prix: 0,
      quantite: 0
    });
  }

  // ------------- METHODES -----------------------

  ajouterProduit() {
    this.produits.push(this.produitForm.value);
    this.produitForm.reset();
  }

  // public recalculerTotal(event: {quantite: number, prix: number, nom: string}) {
  //   this.total += (event.quantite * event.prix);
  //   let produitCible = this.produits.filter(p => p.nom === event.nom)[0];
  //   produitCible.quantite! -= event.quantite;
  // }

  public recalculerTotal(nbrAdded: number, index:number) {
    console.log("nb reçu : ", nbrAdded);
    console.log("index : ", index);
    this.total += nbrAdded * (this.produits[index].prix ?? 0);
    if(this.produits[index].quantite) {
      this.produits[index].quantite -= nbrAdded;
    }
  }

  public recalculerViaEnfants() {
 
    this.enfants.forEach(child => {
      this.produits.forEach(produit => {
        if(produit.nom === child.produit.nom) {
          if(produit.quantite) {
            produit.quantite -= child.nbrAdded;
          } 
          this.total += child.nbrAdded * (child.produit.prix ?? 0);
        }
      })
    });
    this.isActualizationDisabled = true;
    
  }

}
