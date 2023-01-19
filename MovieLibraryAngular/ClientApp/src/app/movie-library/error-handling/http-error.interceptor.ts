import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {NotificationService} from "../services/notification.service";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)

      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'Client-side error: ${error.error.message}';

          }
          else {
            // server-side error
            errorMessage = this.getErrorMessage(error);
          }
          this.notificationService.showError(errorMessage);
          return throwError(() => errorMessage);
        })
      )

  }

  private getErrorMessage(error: HttpErrorResponse): string{
    if (error.status === 404) {
      return `The requested resource ${error.url} was not found`;
    }
    else if (error.status === 404){
      return 'Bad request!';
    }
    return `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
}
