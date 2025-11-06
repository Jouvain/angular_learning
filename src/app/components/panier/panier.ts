import { Component } from '@angular/core';
import { Produit } from '../../models/produit';
import { Store } from '@ngrx/store';
import { selectProduits } from '../../store/produit/produit.selector';
import { purge, suppression } from '../../store/produit/produit.action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panier',
  imports: [FormsModule],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class PanierComponent {
  produits: Produit[] = [];

  constructor(private store: Store) {
    store.select(selectProduits).subscribe(productList => this.produits = productList)
  }

  supprimerArticle(index:number) {
    this.store.dispatch(suppression({produit: this.produits[index]}));
  }

  purgerPanier() {
    this.store.dispatch(purge());
  }

}
