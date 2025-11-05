import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ville',
  imports: [FormsModule],
  templateUrl: './ville.html',
  styleUrl: './ville.css'
})
export class VilleComponent {
  @Input() ville: string = '';
  // @Output() sendCity = new EventEmitter<string>();
    @Output() villeChange = new EventEmitter<string>();

  // changerVille(nouvelleVille: string) {
  //   this.ville = nouvelleVille
  //   this.sendCity.emit(this.ville);
  // }

  changerVille(nouvelleVille: string) {
    this.ville = nouvelleVille
    this.villeChange.emit(this.ville);
  }

}
