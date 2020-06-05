import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          
          for (const index of fetchedSatellites) {
             let sat = new Satellite(index.name, index.type, index.launchDate, index.orbitType, index.operational);
             this.sourceList.push(sat);
            }
        }
          .bind(this));
      }
       .bind(this));
  }

}



