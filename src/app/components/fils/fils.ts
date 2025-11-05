import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fils',
  imports: [FormsModule],
  templateUrl: './fils.html',
  styleUrl: './fils.css'
})
export class FilsComponent {
  @Input() ville:string|null = 'VilleParDefaut';
  @Output() sendPays = new EventEmitter<string>();
  pays: string ="";


  public envoyer() {
    this.sendPays.emit(this.pays);
    console.log(this.pays);
  }
}
