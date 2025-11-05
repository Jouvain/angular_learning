import { Component, Input, OnInit } from '@angular/core';
import Personne from '../../models/personne';
import { PersonneService } from '../../services/personne';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { FormPersonneComponent } from "../form-personne/form-personne";

@Component({
  selector: 'app-personne-details',
  imports: [FormsModule, FormPersonneComponent],
  templateUrl: './personne-details.html',
  styleUrl: './personne-details.css'
})
export class PersonneDetailsComponent implements OnInit {
  personne: Personne = {}
  @Input() id = 0
  constructor(private ps: PersonneService, private router: Router) {
  }
  ngOnInit(): void {
    // this.personne = this.ps.getPersonneById(this.id)
    this.ps.findById(this.id).subscribe(res => {
      this.personne = res;
    })
  }

  modifier(personne: Personne) {
    this.ps.update(personne.id ?? 0, personne).subscribe(res => {
      this.personne = res;
    })
    this.retour();
  }

  // modifier() {
  //   this.ps.update(this.personne.id ?? 0, this.personne).subscribe(res => {
  //     this.personne = res;
  //   })
  //   this.retour();
  // }

  retour() {
    this.router.navigateByUrl('/personne')
  }
}
