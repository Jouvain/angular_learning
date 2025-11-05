import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableau',
  imports: [CommonModule, RouterLink],
  templateUrl: './tableau.html',
  styleUrl: './tableau.css'
})
export class TableauComponent implements OnInit {

  numbers = [2, 3, 8, 1]
  index = 0
  indiceSuivant = 0
  indicePrecedent = 0
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.index = Number(params.get('index'))
      // this.indiceSuivant = this.index + 1 < this.numbers.length ? this.index + 1 : 0
      this.indiceSuivant = (this.index + 1) % this.numbers.length
      this.indicePrecedent = this.index - 1 < 0 ? this.numbers.length - 1 : this.index - 1
    })

  }
  suivant() {
    this.router.navigate(['/tableau', this.indiceSuivant])
  }
  precedent() {
    this.router.navigate(['/tableau', this.indicePrecedent])
  }
}
