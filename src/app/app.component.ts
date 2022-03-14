import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h1>Hola</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  numero:number=10;
  base:number=5;

  acumulador(valor:number):void{
    this.numero+=valor;
  }


}
