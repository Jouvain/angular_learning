import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBy, decrement, increment, reset } from '../../store/counter/counter.action';
import { selectValeur } from '../../store/counter/counter.selector';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compteur',
  imports: [FormsModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css'
})
export class CompteurComponent {

  number: number = 0;
  chosenNumber: number = 0;

  constructor(private store: Store) {
    store.select(selectValeur).subscribe(v => this.number = v);
  }

  plus() {
    // this.number += 1;
    this.store.dispatch(increment());
  }
  moins() {
    // this.number -= 1;
    this.store.dispatch(decrement());
  }
  plusNombre(chosenNumber: number) {
    this.store.dispatch(addBy({value: chosenNumber}));
  }
  reinitialiser() {
    this.store.dispatch(reset());
  }

}
