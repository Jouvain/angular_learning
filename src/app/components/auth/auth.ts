import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  isWrong: boolean = false;

  constructor(private router: Router) {}

  login(form: NgForm) {
    console.log(form.value)
    if(form.value.username === 'user' && form.value.password === 'user') {
      localStorage.setItem('isConnected', 'true');
      const url = this.router.createUrlTree(['/adresse'], {queryParams: {ville: 'Paris', codePostal: '1350'}});
      this.router.navigateByUrl(url);
      // this.redirect();
    } else {
      this.isWrong = true;
    }
  }
    redirect() {
      this.router.navigate(['/adresse', '3300', 'Paris'])
    }  

}
