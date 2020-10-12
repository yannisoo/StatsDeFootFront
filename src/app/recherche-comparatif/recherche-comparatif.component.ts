import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-recherche-comparatif',
  templateUrl: './recherche-comparatif.component.html',
  styleUrls: ['./recherche-comparatif.component.css']
})
export class RechercheComparatifComponent implements OnInit {
  currentData 
  currentDatatype
  stagecountries
  team1
  constructor(
    private countryService: CountryService,
    private leagueService: LeagueService
    ) { }



  ngOnInit(): void {
    this.countryService.getAll().subscribe((response) => {
      this.stagecountries = response;
      this.stageData(this.stagecountries.countries, this.stagecountries.datatype);
    })
  }
  callNextItem(item){
    if(this.currentDatatype == 'country'){
      this.leagueService.getLeaguesByCountry(item.country).subscribe((response) => {
        this.stageData(response.leagues, response.datatype);
      })
    }
    if(this.currentDatatype == 'league'){
      this.leagueService.getTeamsByLeague(item.league_id).subscribe((response) => {
        this.stageData(response.teams, response.datatype);
      })
    }
    if(this.currentDatatype == 'team'){
      if(this.team1 == null){
        this.team1 = item;
        console.log(this.team1);
        this.stageData(this.stagecountries.countries, this.stagecountries.datatype);
      }
    }
  }

  //change les données d'affichage selon les données recupéré
  stageData(staged, type){
      this.currentData = staged;
      this.currentDatatype = type;
  }
}
