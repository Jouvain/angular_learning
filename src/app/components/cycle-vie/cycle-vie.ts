import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cycle-vie',
  imports: [],
  templateUrl: './cycle-vie.html',
  styleUrl: './cycle-vie.css'
})
export class CycleVieComponent implements OnInit, OnDestroy, DoCheck {
  n = 0
  constructor() {
    // initialiser les attributs de la classe, injecter des dépendances (Router, ActivatedRoute...)
    console.log('constructor');
    setInterval(() => this.n++, 5000);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    // pour préparer le composant
    // récupérer les paramètres
    // envoyer une requête à une API REST
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
