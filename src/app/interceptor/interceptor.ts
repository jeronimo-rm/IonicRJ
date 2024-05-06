import { environment } from 'src/environments/environment';

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.apiKey;
  req = req.clone({
    setHeaders: {
      Authorization: apiKey ? `Bearer ${apiKey}` : '',
    },
  });
  return next(req);
};
