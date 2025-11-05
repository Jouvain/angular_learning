import { Component } from '@angular/core';
import Stagiaire from '../../classes/stagiaire';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { GetCharPipe } from "../../pipes/get-char-pipe";
import { EvenValuePipe } from "../../pipes/even-value-pipe";
import { StrToArrayPipe } from "../../pipes/str-to-array-pipe";

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, GetCharPipe, EvenValuePipe, StrToArrayPipe],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  // attributs
  title = 'angular-standalone';
  aujourdhui = Date.now()
  stagiaire: Stagiaire = new Stagiaire(100, "Wick", "John")
  stagiaire2: Stagiaire = new Stagiaire(200, "Dalton")
  numbers: number[] = [2, 3, 8, 5, 1]
  monId = "introduction"
  isDisabled = true
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  moyennes: number[] = [18, 5, 11, 15]
  couleur = 'white'
  bgCouleur = 'tomato'
  style = {
    color: 'white',
    backgroundColor: 'dodgerblue'
  }
  ville = 'Lille'
  cp = '59000'
  // constructor
  constructor(private router: Router) { }

  // méthodes
  direBonjour(): string {
    return "Bonjour Angular 20.3.0"
  }
  alertBonjour() {
    alert("Bonjour")
  }
  switchState() {
    this.isDisabled = !this.isDisabled
  }
  afficherTexte(event: Event) {
    console.log((event as InputEvent).data);
    console.log((event.target as HTMLInputElement).value);
  }
  goToStagiaire() {
    // this.router.navigateByUrl(`/stagiaire/${this.stagiaire.nom}/${this.stagiaire.prenom}`)
    this.router.navigate(['/stagiaire', this.stagiaire.nom, this.stagiaire.prenom])
  }
  goToLyon() {
    this.router.navigate(['/adresse'], {
      queryParams: {
        ville: 'Lyon',
        codePostal: '69000'
      }
    })
  }
}
