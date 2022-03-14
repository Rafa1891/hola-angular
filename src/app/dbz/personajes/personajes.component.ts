import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  //@Input() person:any[]=[];

  constructor(private dbzService:DbzService){

  }

  get person(){
    return this.dbzService.personajes;
  }



}
