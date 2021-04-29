import { Location } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { ComparativeSearchComponent } from './components/comparative/comparative-search/comparative-search.component';
import { StatsMatchComponent } from './components/stats-match/stats-match.component';

import { ComparativeMatchHistoryComponent } from './components/comparative/comparative-match-history/comparative-match-history.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('Router: App', () => {

    let location: Location;
    let router: Router;
    let fixture;
    const routes: Routes = [
        { path: 'countries', component: ComparativeSearchComponent },
        { path: 'countries/:country/leagues', component: ComparativeSearchComponent },
        { path: 'countries/:country/:ID_leagues/teams', component: ComparativeSearchComponent },
        { path: 'stats-match/:match', component: StatsMatchComponent },
        { path: 'compare/:ID_team1/:ID_team2', component: ComparativeMatchHistoryComponent },
        { path: '', component: HomePageComponent }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
            declarations: [
                ComparativeMatchHistoryComponent,
                HomePageComponent,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    multi: true,
                    useValue: undefined
                }
            ]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(HomePageComponent);
        router.initialNavigation();
    });
    // team_id 529 & 715
    it('navigate to comparative page (/compare) with team_id 529 & 715', fakeAsync(() => {
        router.navigate(['/compare/529/715'])
        tick();
        expect(location.path()).toBe('/compare/529/715')
    }));
    it('navigate to /countries', fakeAsync(() => {
        router.navigate(['/countries'])
        tick();
        expect(location.path()).toBe('/countries')
    }));
    // match_id : 672845
    it('navigate to /stats-match/:match', fakeAsync(() => {
        router.navigate(['/stats-match/672845'])
        tick();
        expect(location.path()).toBe('/stats-match/672845')
    }));
    // country : spain
    it('navigate to /countries/:country/leagues', fakeAsync(() => {
        router.navigate(['/countries/spain/leagues'])
        tick();
        expect(location.path()).toBe('/countries/spain/leagues')
    }));
    // country : spain  league_id : 
    it('navigate to /countries/:country/:ID_leagues/teams', fakeAsync(() => {
        router.navigate(['/countries/spain/:ID_leagues/teams'])
        tick();
        expect(location.path()).toBe('/countries/spain/:ID_leagues/teams')
    }));
});