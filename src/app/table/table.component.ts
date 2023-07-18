import { Component } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent{
    fecha: string = '';
  tutor: string = '';
  tutoresp: string = '';
  estudiante: string = '';
  empresa: string = '';
  periodo: string = '';
  asunto: string = '';
  dtut: boolean = false;
  dest: boolean = false;
  observ: string = '';
  showModal: boolean = false;

  openModal() {
    if (!this.fecha || !this.tutor || !this.tutoresp || !this.estudiante || !this.empresa || !this.periodo || !this.asunto || !this.dtut || !this.dest || !this.observ) {
      window.alert("Por favor llene todos los campos obligatorios.");
      return;
    }

    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  clearForm() {
    this.fecha = '';
    this.tutor = '';
    this.tutoresp = '';
    this.estudiante = '';
    this.empresa = '';
    this.periodo = '';
    this.asunto = '';
    this.dtut = false;
    this.dest = false;
    this.observ = '';
  }
}