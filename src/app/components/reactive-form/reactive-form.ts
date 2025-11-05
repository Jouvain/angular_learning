import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import Personne from '../../models/personne';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveFormComponent  implements OnInit {

  personnes: Personne[] = []
  personneForm: FormGroup

  constructor() {
      this.personneForm = new FormGroup({
    nom: new FormControl('', checkNomValidator),
    prenom: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z \-]{2,29}/)]),
    age: new FormControl(0, Validators.min(15)),
    adresse: new FormGroup({
      rue: new FormControl(''),
      ville: new FormControl(''),
      codePostal: new FormControl(''),
    })
  })
  }

  ngOnInit(): void {
    // pour initialiser tous les champs du formulaire
    // const data = {
    //   nom: 'Doe',
    //   prenom: 'John',
    //   age: 45,
    //   adresse: {
    //     ville: 'Paris',
    //     codePostal: "75014",
    //     rue: 'plantes'
    //   }
    // }
    // this.personneForm.setValue(data)
    // pour initialiser quelques champs
    this.personneForm.patchValue({
      nom: 'Doe',
      adresse: {
        ville: 'Marseille'
      }
    })
  }
  afficher() {
    console.log(this.personneForm); // instance de FormGroup
    console.log(this.personneForm.value); //valeurs
    console.log(this.personneForm.controls['nom']);
    console.log(this.personneForm.get('nom'));
    console.log(this.personneForm.controls['nom'].value);
    console.log(this.personneForm.get('nom')?.value);
    this.personnes.push(this.personneForm.value)
    this.personneForm.reset()
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

  // nom = new FormControl('Doe')

  // afficherNom() {
  //   console.log(this.nom); // objet de la classe FormControl
  //   console.log(this.nom.value);
  // }
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