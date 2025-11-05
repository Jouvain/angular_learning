import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-touche',
  imports: [],
  templateUrl: './touche.html',
  styleUrl: './touche.css'
})
export class ToucheComponent {
  @Input() letter: string = '';
  @Output() sendLetter = new EventEmitter();

  public addLetter() {
    this.sendLetter.emit();
  }

}
