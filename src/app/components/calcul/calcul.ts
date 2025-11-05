import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-calcul',
  imports: [CommonModule],
  templateUrl: './calcul.html',
  styleUrl: './calcul.css'
})
export class CalculComponent implements OnInit {
  value1 = 0
  value2 = 0
  operateur = ''
  resultat = 0
  op = ''
  erreur: string | null = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const operators = {
      'plus': '+',
      'moins': '-',
      'fois': '*',
      'div': '/'
    }
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(([params, query]) => {
      this.op = params.get('op') ?? 'plus'
      this.value1 = Number(query.get('value1'))
      this.value2 = Number(query.get('value2'))
      if (!Object.keys(operators).includes(this.op)) {
        this.erreur = 'Opérateur invalide'
      } else {
        this.operateur = Object.values(operators)[Object.keys(operators).indexOf(this.op)]
        this.resultat = calculer(this.value1, this.value2, this.operateur)
      }
    })
    // this.route.paramMap.subscribe(
    //   params => {
    //     this.op = params.get('op') ?? 'plus'
    //     this.route.queryParamMap.subscribe(query => {
    //       this.value1 = Number(query.get('value1'))
    //       this.value2 = Number(query.get('value2'))
    //       if (!Object.keys(operators).includes(this.op)) {
    //         this.erreur = 'Opérateur invalide'
    //       } else {
    //         this.operateur = Object.values(operators)[Object.keys(operators).indexOf(this.op)]
    //         this.resultat = calculer(this.value1, this.value2, this.operateur)
    //       }
    //     })
    //   }
    // )
  }
}

function calculer(a: number, b: number, op: string): number {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '/': return a / b
    default: return a * b
  }
}


