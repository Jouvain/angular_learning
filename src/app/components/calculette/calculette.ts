import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculette.html',
  styleUrl: './calculette.css'
})
export class CalculetteComponent {
  valeur1: null | number = null
  valeur2: null | number = null
  resultat: null | number = null
  erreur: null | string = null
  compute(op: string) {
    if (this.valeur1 == null || this.valeur2 == null) {
      this.erreur = "Merci de saisir deux nombres"
      return;
    } else if (this.valeur2 == 0 && op == '/') {
      this.erreur = 'Problème de division par zéro'
      return;
    }
    this.erreur = null
    this.resultat = calculer(this.valeur1 ?? 0, this.valeur2 ?? 0, op)
  }
}
function calculer(a: number, b: number, op: string): number {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '/': return a / b
    default: return a * b
  }
}
