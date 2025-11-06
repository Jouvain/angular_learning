import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectValeur } from '../../store/counter/counter.selector';
import { Produit } from '../../models/produit';
import { selectProduits } from '../../store/produit/produit.selector';
// import { selectValeurPanier } from '../../store/produit/produit.selector';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  title = 'angular-standalone';
  number: number = 0;
  panierTotal: number = 0;
  panier: Produit[] = [];


  constructor(private store: Store) {
    store.select(selectValeur).subscribe(v => this.number = v);
    // store.select(selectValeurPanier).subscribe(v => this.panierTotal = v);
    store.select(selectProduits).subscribe(productList => {
      this.panier = productList;
      console.log(this.panier)
      this.panierTotal = this.panier.reduce(
        (total, produit) => total + ( (produit.prix ?? 0) * (produit.quantite ?? 0)),
        0
      );
    });
  }
}
