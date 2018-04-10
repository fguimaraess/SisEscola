import { EscolaService } from './../escola.service';
import { Escola } from '../escola';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-escola-detail',
  templateUrl: './escola-detail.component.html',
  styleUrls: ['./escola-detail.component.css']
})
export class EscolaDetailComponent implements OnInit {

  @Input() escola: Escola;

  constructor(private escolaService: EscolaService) { }

  save(): void{
    this.escolaService.updateEscola(this.escola).subscribe();
  }
  ngOnInit() {
  }

}
