import { HttpInterceptorFn } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url == `${environment.BACKEND_URL}/authenticate`) {
    return next(req); 
  } else {
    const accessToken = localStorage.getItem('accessToken');
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    })
    return next(cloned);
  }
  return next(req);
};
