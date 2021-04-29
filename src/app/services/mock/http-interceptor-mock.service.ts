import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';


let stagedMatches = {
  'fixtures': [

    {
      "fixture_id": 605388,
      "league_id": 2833,
      "league": {
        "name": "Primera Division",
        "country": "Spain",
        "logo": "https://media.api-sports.io/football/leagues/140.png",
        "flag": "https://media.api-sports.io/flags/es.svg"
      },
      "event_date": "2021-04-29T19:00:00+02:00",
      "event_timestamp": 1619715600,
      "firstHalfStart": null,
      "secondHalfStart": null,
      "round": "Regular Season - 33",
      "status": "Not Started",
      "statusShort": "NS",
      "elapsed": 0,
      "venue": "Camp Nou",
      "referee": "Pablo González",
      "homeTeam": {
        "team_id": 529,
        "team_name": "Barcelona",
        "logo": "https://media.api-sports.io/football/teams/529.png",
        "name": "Barcelona"
      },
      "awayTeam": {
        "team_id": 715,
        "team_name": "Granada CF",
        "logo": "https://media.api-sports.io/football/teams/715.png",
        "name": "Granada CF"
      },
      "goalsHomeTeam": null,
      "goalsAwayTeam": null,
      "score": {
        "halftime": null,
        "fulltime": null,
        "extratime": null,
        "penalty": null
      }
    },
    {
      "fixture_id": 698709,
      "league_id": 2777,
      "league": {
        "name": "UEFA Europa League",
        "country": "World",
        "logo": "https://media.api-sports.io/football/leagues/3.png",
        "flag": null
      },
      "event_date": "2021-04-29T21:00:00+02:00",
      "event_timestamp": 1619722800,
      "firstHalfStart": null,
      "secondHalfStart": null,
      "round": "Semi-finals",
      "status": "Not Started",
      "statusShort": "NS",
      "elapsed": 0,
      "venue": "Estadio de la Cerámica",
      "referee": "Artur Soares Dias",
      "homeTeam": {
        "team_id": 533,
        "team_name": "Villarreal",
        "logo": "https://media.api-sports.io/football/teams/533.png",
        "name": "Villarreal"
      },
      "awayTeam": {
        "team_id": 42,
        "team_name": "Arsenal",
        "logo": "https://media.api-sports.io/football/teams/42.png",
        "name": "Arsenal"
      },
      "goalsHomeTeam": null,
      "goalsAwayTeam": null,
      "score": {
        "halftime": null,
        "fulltime": null,
        "extratime": null,
        "penalty": null
      }
    },
    {
      "fixture_id": 698711,
      "league_id": 2777,
      "league": {
        "name": "UEFA Europa League",
        "country": "World",
        "logo": "https://media.api-sports.io/football/leagues/3.png",
        "flag": null
      },
      "event_date": "2021-04-29T21:00:00+02:00",
      "event_timestamp": 1619722800,
      "firstHalfStart": null,
      "secondHalfStart": null,
      "round": "Semi-finals",
      "status": "Not Started",
      "statusShort": "NS",
      "elapsed": 0,
      "venue": "Old Trafford",
      "referee": "Carlos Del Cerro",
      "homeTeam": {
        "team_id": 33,
        "team_name": "Manchester United",
        "logo": "https://media.api-sports.io/football/teams/33.png",
        "name": "Manchester United"
      },
      "awayTeam": {
        "team_id": 497,
        "team_name": "AS Roma",
        "logo": "https://media.api-sports.io/football/teams/497.png",
        "name": "AS Roma"
      },
      "goalsHomeTeam": null,
      "goalsAwayTeam": null,
      "score": {
        "halftime": null,
        "fulltime": null,
        "extratime": null,
        "penalty": null
      }
    }
  ]
}


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorMockService implements HttpInterceptor {
  constructor(private injector: Injector) { }

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (request.url && request.url
      .indexOf(environment.api + '/matchByDateAndLeague/' + this.date + '/2833') > -1) {
      console.log('laa')
      console.log(stagedMatches)
      return of(new HttpResponse({ status: 200, body: stagedMatches }));
    }

    return next.handle(request);
  }
}
