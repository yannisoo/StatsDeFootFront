import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getPreviousMatchesBetween2Teams(team1, team2): Observable<any>{
    return this.http.get<any>(environment.api + '/previsousMatchesBetween2teams/' + team1 + '/' + team2).pipe(catchError(this.handleError));
  }


  getLast5Matches(team): Observable<any>{
    return this.http.get<any>(environment.api + '/last5MatchesOfATeam/' + team ).pipe(catchError(this.handleError));
  }
  getMatchInfos(id): Observable<any>{
    return this.http.get<any>(environment.api + '/matchStats/' + id).pipe(catchError(this.handleError));
  }
  getMatch(id): Observable<any>{
    return this.http.get<any>(environment.api + '/matchById/' + id).pipe(catchError(this.handleError));
  }
  getMatchesByDate(date): Observable<any>{
    return this.http.get<any>(environment.api + '/matchByDate/' + date).pipe(catchError(this.handleError));
  }
  getMatchesByDateAndLeague(date, leagueID): Observable<any>{
    return this.http.get<any>(environment.api + '/matchByDateAndLeague/' + date + '/' + leagueID ).pipe(catchError(this.handleError));
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
