import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import Personne from '../../models/personne';

@Component({
  selector: 'app-builder-form',
  imports: [ReactiveFormsModule],
  templateUrl: './builder-form.html',
  styleUrl: './builder-form.css'
})
export class BuilderFormComponent implements OnInit {

  personnes: Personne[] = []
  personneForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.personneForm = this.fb.group({
      nom: ['', checkNomValidator],
      prenom: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z \-]{2,29}/)]],
      age: [0, Validators.min(15)],
      adresse: this.fb.group({
        rue: [''],
        ville: [''],
        codePostal: [''],
      }),
      sports: this.fb.array([])
    })
  }


  ngOnInit(): void {

  }



  public get nom() {
    return this.personneForm.controls['nom']
  }

  public get prenom() {
    return this.personneForm.controls['prenom']
  }

  public get age() {
    return this.personneForm.controls['age']
  }
  public get adresse(): FormGroup {
    return this.personneForm.controls['adresse'] as FormGroup
  }
  public get sports(): FormArray {
    return this.personneForm.controls['sports'] as FormArray
  }
  afficher() {
    console.log(this.personneForm.value);
    this.personnes.push(this.personneForm.value)
    this.personneForm.reset()
    this.sports.clear()
  }

  ajouterSport() {
    this.sports.push(this.fb.control(''))
  }

  sportsAt(i: number) {
    return this.sports.get(i.toString())
  }

  supprimerSport(i: number) {
    console.log(i);
    
    this.sports.removeAt(i)
    console.log(this.sports);
    
  }

}
function checkNomValidator(formControl: { value: string | number[] | null | undefined; }) {
  if (formControl.value == null || formControl.value == undefined || formControl.value == '') {
    return {
      vide: 'Ce champ est obligatoire'
    }
  }
  if (formControl.value[0] < 'A' || formControl.value[0] > 'Z') {
    return {
      majuscule: 'Ce champ doit commencer par une majuscule'
    }
  }
  return null
}