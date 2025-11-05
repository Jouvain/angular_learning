import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-valeur-calculee',
  imports: [],
  templateUrl: './valeur-calculee.html',
  styleUrl: './valeur-calculee.css'
})
export class ValeurCalculeeComponent {

  valeur1: WritableSignal<number> = signal(2)
  valeur2: WritableSignal<number> = signal(5)
  resultat: Signal<number> = signal(0)

  constructor() {
    setInterval(
      // () => this.valeur1.update(val => val += 10),
      () => this.valeur1.set(this.valeur1() + 10),
      3000
    )
    this.resultat = computed(() => this.valeur1() + this.valeur2())
  }
  // effet = effect(() => console.log("Changement de valeur", this.valeur1(), this.resultat()))

}
