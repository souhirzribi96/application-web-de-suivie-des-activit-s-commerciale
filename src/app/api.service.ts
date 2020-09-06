import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl1 = "/api/secteur";
const apiUrl = "/api/contact";
const apiUrl2 = "/api/marque";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  /*pour secteurrrrrrrrrrrrrrr*/
    getSecteurs(): Observable<any> {
        return this.http.get(apiUrl1, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    getSecteur(id: string): Observable<any> {
        const url = `${apiUrl1}/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    postSecteur(data): Observable<any> {
        return this.http.post(apiUrl1, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
    updateSecteur(id: string, data): Observable<any> {
        const url = `${apiUrl1}/${id}`;
        return this.http.put(url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteSecteur(id: string): Observable<{}> {
        const url = `${apiUrl1}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
    /*contactttttttttttttttttttttttttttt*/
    getContacts(): Observable<any> {
        return this.http.get(apiUrl, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    getContact(id: string): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    postContact(data): Observable<any> {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
    updateContact(id: string, data): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteContact(id: string): Observable<{}> {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
/*marqueeeeeeeeeeeeeeeeeeeee*/
    getMarques(): Observable<any> {
        return this.http.get(apiUrl2, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    getMarque(id: string): Observable<any> {
        const url = `${apiUrl2}/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    /*marque par secteurrrrrrrrrrrrrrrrrrr*/
    getmarque(id: string): Observable<any>{
        const url =`${apiUrl2}/secteur/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));

    }
    postMarque(data): Observable<any> {
        return this.http.post(apiUrl2, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateMarque(id: string, data): Observable<any> {
        const url = `${apiUrl2}/${id}`;
        return this.http.put(url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteMarque(id: string): Observable<{}> {
        const url = `${apiUrl2}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
}
