import { EscolaService } from './../escola.service';
import { Escola } from '../escola';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-escola-detail',
  templateUrl: './escola-detail.component.html',
  styleUrls: ['./escola-detail.component.css']
})
export class EscolaDetailComponent implements OnInit {

  @Input() escola: Escola;

  constructor(
    private escolaService: EscolaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  save(): void{
    this.escolaService.updateEscola(this.escola).subscribe(() => this.goBack());
  }

  ngOnInit(): void {
    this.getEscola();
  }

  getEscola():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.escolaService.listarByID(id).subscribe(escola => this.escola = escola);
  }

  goBack():void{
    this.location.back();
  }

}
