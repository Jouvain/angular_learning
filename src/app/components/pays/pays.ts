import { Component } from '@angular/core';
import { VilleComponent } from '../ville/ville';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pays',
  imports: [VilleComponent, FormsModule],
  templateUrl: './pays.html',
  styleUrl: './pays.css'
})
export class PaysComponent {
  villes = ['Minas Tirith', 'Osgiliath', 'Fondcombe']


  changerVilleSelonIndex(nouvelleVille: string, index: number) {
    this.villes[index] = nouvelleVille;
  }


}
