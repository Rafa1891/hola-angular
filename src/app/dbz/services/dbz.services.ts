import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes:Personaje[]=[
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

      get personajes():Personaje[]{
        return[...this._personajes];
      }

  constructor(){
    console.log("servicio iniciado");
  }
  saludo():void{
    console.log("hola desde servicio");
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }
}
