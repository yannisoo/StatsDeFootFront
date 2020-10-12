import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  getLeaguesByCountry(country): Observable<any>{
    return this.http.get<any>(environment.api + '/leaguesByCountry/' + country).pipe(catchError(this.handleError));
  }
  getTeamsByLeague(leagueID): Observable<any>{
    return this.http.get<any>(environment.api + '/teamsByLeague/' + leagueID).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
}
}
