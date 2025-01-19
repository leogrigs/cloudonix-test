import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class CloudonixHttpInterceptor implements HttpInterceptor {
  private snackbar = inject(MatSnackBar);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: ` Bearer ${sessionStorage.getItem('authKey')}` || '',
      },
    });
    return next.handle(request).pipe(
      catchError((error) => {
        this.snackbar.open('An error occurred', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
        });
        return throwError(() => error);
      })
    );
  }
}
