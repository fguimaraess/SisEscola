import { TurmaService } from './../turma.service';
import { Turma } from '../turma';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-turma-detail',
  templateUrl: './turma-detail.component.html',
  styleUrls: ['./turma-detail.component.css']
})
export class TurmaDetailComponent implements OnInit {

  @Input() turma: Turma;

  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
  }

  save(): void{
    this.turmaService.updateTurma(this.turma).subscribe();
  }

}
