import { EscolaService } from './../escola.service';
import { TurmaService } from './../turma.service';
import { Turma } from '../turma';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-turma-detail',
  templateUrl: './turma-detail.component.html',
  styleUrls: ['./turma-detail.component.css']
})
export class TurmaDetailComponent implements OnInit {

  @Input() turma: Turma;

  constructor(
    private turmaService: TurmaService,
    private escolaService: EscolaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTurma();
  }

  save(): void{
    this.turmaService.updateTurma(this.turma).subscribe(() => this.goBack());
  }

  getTurma():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.turmaService.listarByID(id).subscribe(turma => this.turma = turma);
  }

  goBack():void{
    this.location.back();
  }
}
