import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Personne from '../../models/personne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css'
})
export class FormulaireComponent {
  personne: Personne = {}
  personnes: Personne[] = []
  // nom = 'Wick'
  // afficherNom(event: Event) {
  //   const value = (event.target as HTMLInputElement).value
  //   this.nom = value
  // }
  ajouter(form: NgForm) {
    this.personnes.push({ ...this.personne });
    // this.personnes.push(form.value);
    console.log(form.value);
    // this.personne = {}
    form.reset()
  }
}
