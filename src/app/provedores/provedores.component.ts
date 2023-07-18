import { Component, OnInit } from '@angular/core';
import { Provedor } from './provedor';
import { ProvedorService } from './provedor.service';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
})
export class ProvedoresComponent implements OnInit{

  provedor:Provedor[] =[];

  constructor(private provedorService : ProvedorService){}

  ngOnInit() {
    this.provedorService.getProvedores().subscribe(
      provedores => this.provedor = provedores
    )
      
  }

}
