import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes/clientes.service';
import { ProvedoresComponent } from './provedores/provedores.component';
import {  HttpClientModule  } from '@angular/common/http';


const routes: Routes = [
  {path: '',redirectTo: '',pathMatch: 'full'},
  {path: 'directiva', component: DirectivaComponent},
  {path: 'cliente', component: ClientesComponent},
  {path: 'provedor', component: ProvedoresComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    DirectivaComponent,
    ClientesComponent,
    ProvedoresComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

