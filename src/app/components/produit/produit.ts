import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class ProduitComponent {
  @Input() produit!: Produit
  nbrAdded: number = 0;
  
  // @Output() sendCost = new EventEmitter<{quantite: number, prix: number, nom: string}>();
  @Output() sendCost = new EventEmitter<number>();
  isDisabled: boolean = false;

  // public ajouterAuPanier() {
  //   this.sendCost.emit({quantite: this.nbrAdded, prix: this.produit.prix!, nom: this.produit.nom!});
  //   this.isDisabled = true;
  // }

  public ajouterAuPanier() {
    this.sendCost.emit(this.nbrAdded);
    this.isDisabled = true;
  }


  // public ajouterAuPanier() {
  //   this.sendCost.emit();
  //   this.isDisabled = true;
  // }

}
