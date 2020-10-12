import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-recherche-comparatif',
  templateUrl: './recherche-comparatif.component.html',
  styleUrls: ['./recherche-comparatif.component.css']
})
export class RechercheComparatifComponent implements OnInit {
  // données affiché a un instant T
  currentData;
  // type des données affiché a un instant T
  currentDatatype;
  // Pays stocké
  stagecountries;
  // Equipe N°1
  team1;
  constructor(
    private countryService: CountryService,
    private leagueService: LeagueService
    ){}



  ngOnInit(): void {
    // appel du service pour récuperer les pays
    this.countryService.getAll().subscribe((response) => {
      // stockage des pays dans une variable pour ne pas les recharger une deuxieme fois
      this.stagecountries = response;
      this.stageData(this.stagecountries.countries, this.stagecountries.datatype);
    });
  }
  callNextItem(item){
    // dans le cas on nous sommes sur un jeu de donnée pays appel des leagues correspondante
    if (this.currentDatatype === 'country'){
      this.leagueService.getLeaguesByCountry(item.country).subscribe((response) => {
        this.stageData(response.leagues, response.datatype);
      });
    }
    // dans le cas on nous sommes sur un jeu de donnée league appel des équipes correspondante
    if (this.currentDatatype === 'league'){
      this.leagueService.getTeamsByLeague(item.league_id).subscribe((response) => {
        this.stageData(response.teams, response.datatype);
      });
    }
     // dans le cas on nous sommes sur un jeu de donnée équipe ajout de cet équipe a la séléction
     // puis retour a la liste des pays pour selectioné la deuxieme équipe
    if (this.currentDatatype === 'team'){
      if (this.team1 === null){
        this.team1 = item;
        console.log(this.team1);
        this.stageData(this.stagecountries.countries, this.stagecountries.datatype);
      }
    }
  }

  // change les données d'affichage selon les données recupéré
  stageData(staged, type){
      this.currentData = staged;
      this.currentDatatype = type;
  }
}
