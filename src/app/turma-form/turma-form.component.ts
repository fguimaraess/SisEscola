import { Turma } from './../turma';
import { Escola } from './../escola';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TurmaService } from './../turma.service';
import { EscolaService } from './../escola.service';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit {

  turmas: Array<Turma>;
  escolas: Array<Escola>;
  qtdTurmas: number;
  escola: Escola;

  constructor(
    private turmaService: TurmaService,
    private escolaService: EscolaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  submitted = false;
  model = new Turma();
  
  onSubmit(){
    this.submitted = true;
    this.insert(this.model);
  }

  newTurma(){
    this.model = new Turma();
  }

  goBack():void{
    this.location.back();
  }

  insert(_turma: Turma): void{
    this.turmaService.addTurma(_turma).subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.listarTurmas();
    this.listarEscolas();
  }

  getNumeroDeTurmas(id){
    this.escolas.forEach(element => {
      if(element.ID == id){
        this.qtdTurmas = element.Turma.length;
      }
    });
  }

  listarTurmas():void{
    this.turmaService.listar().subscribe(dados => this.turmas = dados);
  }

  listarEscolas(): void{
    this.escolaService.listar().subscribe(dados => this.escolas = dados);
  }
}