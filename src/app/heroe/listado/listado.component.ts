import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

heroes:string[]=["Spiderman","Ironman","Thor","Hulk","Capitán América","Batman"]
heroeborrado:string | undefined;
heroesBorrados:string[]=[];

borrarHeroearriba():void{
  this.heroesBorrados.push(this.heroes[0]);
  this.heroeborrado=this.heroes.shift();

}
borrarHeroeabajo():void{
  this.heroesBorrados.push(this.heroes[this.heroes.length-1]);
  this.heroeborrado=this.heroes.pop();

}



}
