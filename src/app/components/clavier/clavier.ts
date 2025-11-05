import { Component } from '@angular/core';
import { ToucheComponent } from '../touche/touche';

@Component({
  selector: 'app-clavier',
  imports: [ToucheComponent],
  templateUrl: './clavier.html',
  styleUrl: './clavier.css'
})
export class ClavierComponent {

  lettres = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ]

  textArea: string = "";

  public actualiserTextArea(index: number) {
    this.textArea += this.lettres[index]; 
  }

}
