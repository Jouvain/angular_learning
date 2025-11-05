import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Person } from '../../models/person';

@Component({
  selector: 'app-commentaire',
  imports: [ReactiveFormsModule],
  templateUrl: './commentaire.html',
  styleUrl: './commentaire.css'
})
export class CommentaireComponent {
  personnes: Person[] = []
  personneForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.personneForm = this.fb.group({
      nom: [],
      prenom: [],
      commentaires: this.fb.array([])
    })
  }
  get commentaires() : FormArray {
    return this.personneForm.controls['commentaires'] as FormArray
  }
  ajouterPersonne() {
    this.personnes.push(this.personneForm.value)
    this.personneForm.reset()
    this.commentaires.clear()
  }
  ajouterCommentaire() {
    this.commentaires.push(this.fb.group({
      titre: [],
      categorie: [],
      contenu: []
    }))
  }
}
