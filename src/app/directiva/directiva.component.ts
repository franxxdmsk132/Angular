import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCurso:string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  listaTemasTS:string[] = ['El manual de TypeScript', 'Los básicos', 'Tipos de objetos'];
  listaTemasJS:string[] = ['Comprendiendo los frameworks JavaScript de lado del cliente', 'Estructuras de datos en JavaScript'];
  listaTemasC:string[] = ['Creación de un proyecto', 'Errores Sintácticos y Lógicos'];

  habilitar:boolean = true;
  constructor(){}
}
