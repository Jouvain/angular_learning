import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [RouterLink],
  templateUrl: './address.html',
  styleUrl: './address.css'
})
export class AddressComponent {
  @Input() ville =''
  @Input('codePostal') cp =''
}
