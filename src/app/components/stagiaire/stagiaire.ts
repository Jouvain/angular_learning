import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  imports: [],
  templateUrl: './stagiaire.html',
  styleUrl: './stagiaire.css'
})
export class StagiaireComponent implements OnInit {
  nom = ''
  prenom = ''
  // injection de dépendance
  // constructor(private route: ActivatedRoute) { }
  route = inject(ActivatedRoute) // Angular 14
  ngOnInit(): void {
    // Asynchrone : observable
    // this.route.paramMap.subscribe({
    //   next: params => {
    //     this.nom = params.get('nom') ?? ''
    //     this.prenom = params.get('prenom') ?? ''
    //   }
    // })
    // Synchrone
    this.nom = this.route.snapshot.paramMap.get('nom') ?? ''
    this.prenom = this.route.snapshot.paramMap.get('prenom') ?? ''
   }

}
