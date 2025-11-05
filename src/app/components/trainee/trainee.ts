import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trainee',
  imports: [],
  templateUrl: './trainee.html',
  styleUrl: './trainee.css'
})
export class TraineeComponent {
  // le raccourci introduit dans Angular 16 utilise les observables en arrière plan
  @Input() nom = ''
  @Input() prenom = ''
}
