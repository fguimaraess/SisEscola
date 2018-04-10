import { EscolaService } from './../escola.service';
import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {
  escola: Array<any>;
  selectedEscola: Escola;

  constructor(private escolaService: EscolaService) { }
  
  ngOnInit() {
    this.listar();
  }

  onSelect(_escola: Escola): void{
    this.selectedEscola = _escola;
  }

  listar(){
    this.escolaService.listar().subscribe(dados => this.escola = dados);
    
  }

  delete(escola: Escola): void{
    this.escola = this.escola.filter(x => x !== escola);
    this.escolaService.deleteEscola(escola).subscribe();
  }

}
