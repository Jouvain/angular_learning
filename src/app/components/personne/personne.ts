import { Component, DoCheck, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne';
import Personne from '../../models/personne';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormPersonneComponent } from "../form-personne/form-personne";

@Component({
  selector: 'app-personne',
  imports: [FormsModule, RouterLink, FormPersonneComponent],
  templateUrl: './personne.html',
  styleUrl: './personne.css'
})
export class PersonneComponent implements OnInit, DoCheck {
  personne: Personne = {}
  personnes: Personne[] = []
  erreur: string | null = null
  constructor(private ps: PersonneService) {  }

  ngOnInit(): void {
    // this.personnes = this.ps.getPersonnes()
    this.ps.findAll().subscribe({
      next: res => this.personnes = res,
      error: err => {
        console.log(err);
        this.erreur = "Liste temporairement indisponible";
      }
    });
  }

  ngDoCheck(): void {
    this.ps.findAll().subscribe(res => this.personnes = res);
  }

  ajouter(personne:Personne) {
    // this.personnes.push({ ...this.personne });
    // this.personnes.push(form.value);
    // this.personne = {}

    // this.ps.save(form.value)
    // console.log(form.value);
    // form.reset()
    this.ps.save(personne).subscribe(res => {
      console.log(res);
      this.personnes.push(res);
      // form.reset();
    })
    
  }

  supprimer(ind: number, id:number|undefined|null) {
    // this.ps.remove(ind)
    this.ps.remove(id ?? 0).subscribe(res => {
      this.personnes.splice(ind, 1);
    })
  }
}
