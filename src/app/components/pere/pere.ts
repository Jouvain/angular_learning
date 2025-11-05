import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from "../fils/fils";

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css'
})
export class PereComponent {
  @ViewChild(FilsComponent) fils!: FilsComponent
  @ViewChildren(FilsComponent) enfants! : QueryList<FilsComponent>
  nom = "John Wick"
  ville = "Marseille"
  noms = ["John Wick", "Jane Doe", "Harry Potter"]
  villes = ["Marseille", "Paris"]
  pays: string|null = null

  public afficherPays(pays: string) {
    this.pays = pays;
  }

  espionner() {
    console.log(this.fils.ville);
  }

  espionnerTous() {
    this.enfants.forEach(enfant => console.log(enfant.ville));
  }

}
