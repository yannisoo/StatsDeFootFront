import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../../services/country.service';
import { LeagueService } from '../../../services/league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparative-search',
  templateUrl: './comparative-search.component.html',
  styleUrls: ['./comparative-search.component.scss']
})
export class ComparativeSearchComponent implements OnInit {
  // données affiché a un instant T
  currentData;

  itemSelected;

  // type des données affiché a un instant T
  currentDatatype;
  // Pays stocké
  stagecountries;
  // League stocké
  stageleagues;
  // Equipe N°1
  team1;

  resettable;

  showItem = false;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private leagueService: LeagueService,
    private router: Router
    ){}



  ngOnInit(): void {
    const country = this.route.snapshot.params.country;
    const leagueId = this.route.snapshot.params.ID_leagues;
    this.team1 = JSON.parse(localStorage.getItem('team1'));
    this.team1 ? this.showItem = true : this.showItem = false;
    console.log(this.team1)

    if (country && !leagueId) {
      this.leagueService.getLeaguesByCountry(country).subscribe((response) => {
        this.stageleagues = response;
        this.stageData(response.leagues, response.datatype);
      });
    } else if (country && leagueId) {
      // dans le cas on nous sommes sur un jeu de donnée league appel des équipes correspondante
      this.leagueService.getTeamsByLeague(leagueId).subscribe((response) => {
        this.stageData(response.teams, response.datatype);
      });
    } else {
      // appel du service pour récuperer les pays
      this.countryService.getAll().subscribe((response) => {
        // stockage des pays dans une variable pour ne pas les recharger une deuxieme fois
        this.stagecountries = response;
        this.stageData(this.stagecountries.countries, this.stagecountries.datatype);
      });
    }
  }

  compare(item) {
    if (item.team_id) {
      if (this.team1) {
        this.router.navigate(['/compare/' + this.team1.team_id + '/' + item.team_id]);
        localStorage.removeItem('team1');
      } else {
        localStorage.setItem('team1', JSON.stringify(item));
        this.router.navigate(['/countries']);
      }
    }
  }
  stageData(staged, type) {
    this.currentData = staged;
    this.currentDatatype = type;
    /*this.currentData = [
      {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    },
    {
      flag: "assets/pics/france.png",
      country: "France",
      logo: "",
      name: "Ligue 1"
    }
  ];*/
  }
  resetTeamSelected() {
    this.team1 = null;
    this.resettable = false;
  }

  addItemSelected(value) {
    this.itemSelected = value;
  }
}
