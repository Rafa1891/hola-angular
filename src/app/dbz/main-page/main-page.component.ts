import { Component  } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface' ;
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  constructor(private dbzService:DbzService){

    dbzService.saludo();
  }
  /*
  personajes:Personaje[]=[
{
  nombre:"Celula",
  poder:240000
},
{
nombre:"Songoanda",
poder:130000
},
{
  nombre:"Goku",
  poder:200000
  }
  ];
  */
  nuevo:Personaje={
    nombre:"",
    poder:0
  }



  agregarNuevoPersonaje(personaje:Personaje):void{
    console.log("Componente padre:",personaje);
  }


}
