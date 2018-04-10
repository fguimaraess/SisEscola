import { EscolaService } from './../escola.service';
import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import{ Escola } from '../escola';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turma: Array<Turma>;
  escola: Array<Escola>;
  selectedTurma: Turma;
  nomeDaEscola;

    constructor(private turmaService: TurmaService, private escolaService: EscolaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.turmaService.listar().subscribe(dados => this.turma = dados);
    this.escolaService.listar().subscribe(dados => this.escola = dados);
  }

  onSelect(_turma: Turma): void{
    this.selectedTurma = _turma;
  }

  delete(turma: Turma): void{
    this.turma = this.turma.filter( x => x !== turma);
    this.turmaService.deleteTurma(turma).subscribe();
  }

}
