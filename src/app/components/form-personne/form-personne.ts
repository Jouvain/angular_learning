import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Personne from '../../models/personne';
import { PersonneService } from '../../services/personne';

@Component({
  selector: 'app-form-personne',
  imports: [FormsModule],
  templateUrl: './form-personne.html',
  styleUrl: './form-personne.css'
})
export class FormPersonneComponent {
  @Input() personne: Personne = {};

  @Output() sendPersonne = new EventEmitter<Personne>();
  @Output() personneChange = new EventEmitter<Personne>();


  activate(form: NgForm) {
    this.sendPersonne.emit(this.personne);
    form.reset();
  }
  // activateBis() {
  //   this.sendPersonne.emit();
  // }
}
