import { EscolaService } from './../escola.service';
import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import{ Escola } from '../escola';

declare let swal: any;

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turmas: Array<Turma>;
  escola: Array<Escola>;
  selectedTurma: Turma;

    constructor(private turmaService: TurmaService, private escolaService: EscolaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.turmaService.listar().subscribe(dados => this.turmas = dados);
    this.escolaService.listar().subscribe(dados => this.escola = dados);
  }

  onSelect(_turma: Turma): void {
    this.selectedTurma = _turma;
  }

  delete(turma: Turma): void {
    let that = this;
    swal({
      title: "",
      text: "Deseja excluir a turma?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Excluir",
      confirmButtonClass: 'btn btn-success',
      cancelButtonText: "Cancelar",
      cancelButtonClass: 'btn btn-danger'
    }).then((result) => {
      if (result.value) {
        that.turmas = this.turmas.filter(x => x !== turma);
        that.turmaService.deleteTurma(turma).subscribe();
      }
    }).catch(swal.noop)
  }
}
