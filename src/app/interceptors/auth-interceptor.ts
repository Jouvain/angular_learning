import { HttpInterceptorFn } from '@angular/common/http';
import { User } from '../models/user';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const user: User = JSON.parse(localStorage.getItem('user') ?? '')
  const basic = btoa(`${user.username}:${user.password}`);
  // const username = localStorage.getItem('username')
  // const password = localStorage.getItem('password')
  // // const basic = btoa('user:user');
  // const basic = btoa(`${username}:${password}`);  
  // console.log(basic)
  // console.log(username)
  // console.log(password)
  const cloned = req.clone({
    setHeaders: { Authorization: `Basic ${basic}` }
  })
  return next(cloned);
  //return next(req);
};
