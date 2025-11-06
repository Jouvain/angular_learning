import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { Token } from '../models/token';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  path: string = '';

  constructor(protected http: HttpClient) { }

  logIn(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.BACKEND_URL}/authenticate`, user);
  }

  isValid(token: string): boolean {
    const now = Date.now()
    const exp = (jwtDecode(token).exp ?? 0) * 1000
    return exp > now;
  }

  // refreshTokens(user: User) {
  //   user.grantType = 'REFRESH_TOKEN';
  //   this.logIn(user).subscribe({
  //     next: res => {
  //       localStorage.setItem('isConnected', 'true')
  //       localStorage.setItem('accessToken', res.accessToken ?? '')
  //       localStorage.setItem('refreshToken', res.refreshToken ?? '')
  //     },
  //     error: err => {
  //       console.log(err)
  //     }     
  //   })
  // }

  getTokens(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.BACKEND_URL}/authenticate`, user);
  }






}

