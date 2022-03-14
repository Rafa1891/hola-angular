import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent {
nombre:string="Spiderman";
edad:number=45;

get nombreMayus(){
  return this.nombre.toUpperCase();
}

 obtenerNombre():string{
  return `${this.nombre} - ${this.edad}`;
}

cambiarNombre():void{
 this.nombre="Ironman"
}

cambiarEdad():void{
  this.edad=22;
}

}
