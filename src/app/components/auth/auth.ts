
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { JwtService } from '../../services/jwt';


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
  user: User = {}
  erreur:string|null =null;

  constructor(private router: Router, private jwtService: JwtService) {}
  
  login(form: NgForm) {
    // if (this.user.username == 'user' && this.user.password == "user" ||
    //   this.user.username == 'admin' && this.user.password == "admin" ||
    //   this.user.username == 'sadmin' && this.user.password == "sadmin"

    // ) {
    //   this.jwtService.logIn(this.user, 'PASSWORD').subscribe(res => {
    //     console.log(this.user)
    //     console.log(res.accessToken)
    //     console.log(res.refreshToken)
    //     localStorage.setItem('token', JSON.stringify(res));
    //   })
    //   localStorage.setItem('isConnected', 'true')
    //   localStorage.setItem('user', JSON.stringify(this.user))
    //   // const url = this.router.createUrlTree(['/adresse'], { queryParams: { ville: 'Marseille', codePostal: '13000' } })
    //   // this.router.navigateByUrl(url)
    // } else {
    //   this.erreur = "Identifiants incorrects"
    // }

    this.user.grantType = "PASSWORD";
    this.jwtService.logIn(this.user).subscribe({
      next: res => {
        console.log(res)
        this.jwtService.isValid(res.accessToken ?? '' );
        console.log(this.jwtService.isValid(res.accessToken ?? '' ))
        localStorage.setItem('isConnected', 'true')
        localStorage.setItem('accessToken', res.accessToken ?? '')
        localStorage.setItem('refreshToken', res.refreshToken ?? '')
        localStorage.setItem('user', JSON.stringify(this.user))
        const url = this.router.createUrlTree(['/adresse'], { queryParams: { ville: 'Marseille', codePostal: '13000' } })
        this.router.navigateByUrl(url)
      },
      error: err => {
        console.log(err)
        this.erreur = "Identifiants incorrects"
      }      
    })


  }
  // login(form: NgForm) {
  //   console.log(form.value)    
  //   if(form.value.username === 'user' && form.value.password === 'user') {
  //     localStorage.setItem('isConnected', 'true');
  //     localStorage.setItem('username', `${form.value.username}`);
  //     localStorage.setItem('password', `${form.value.password}`);
  //     const url = this.router.createUrlTree(['/adresse'], {queryParams: {ville: 'Paris', codePostal: '1350'}});
  //     this.router.navigateByUrl(url);
  //   } else if(form.value.username === 'admin' && form.value.password === 'admin') {
  //     localStorage.setItem('isConnected', 'true');
  //     localStorage.setItem('username', `${form.value.username}`);
  //     localStorage.setItem('password', `${form.value.password}`);
  //   } else if(form.value.username === 'sadmin' && form.value.password === 'sadmin') {
  //     localStorage.setItem('isConnected', 'true');
  //     localStorage.setItem('username', `${form.value.username}`);
  //     localStorage.setItem('password', `${form.value.password}`);
  //   } else {
  //     this.isWrong = true;
  //     localStorage.setItem('isConnected', 'false');
  //   }
  // }


}
