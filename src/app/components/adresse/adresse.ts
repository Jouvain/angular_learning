import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adresse',
  imports: [RouterLink],
  templateUrl: './adresse.html',
  styleUrl: './adresse.css'
})
export class AdresseComponent implements OnInit {
  cp = ''
  ville = ''
  constructor(private route: ActivatedRoute) { 
    console.log("Address constructor");
    
  }
  ngOnInit(): void {
    // Solution asynchrone avec les observables
    this.route.queryParamMap.subscribe( {
      next: query => {
        this.ville = query.get('ville') ?? ''
        this.cp = query.get('codePostal') ?? ''
      }
    })
    // Solution synchrone avec les Snapshots
    // this.ville = this.route.snapshot.queryParamMap.get('ville') ?? ''
    // this.cp = this.route.snapshot.queryParamMap.get('codePostal') ?? ''
  }
}
