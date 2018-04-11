import { Escola } from './../escola';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EscolaService } from './../escola.service';

@Component({
  selector: 'app-escola-form',
  templateUrl: './escola-form.component.html',
  styleUrls: ['./escola-form.component.css']
})
export class EscolaFormComponent implements OnInit {

  constructor(
    private escolaService: EscolaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  submitted = false;
  model = new Escola();

  onSubmit() { 
    this.submitted = true;
    this.insert(this.model);
  }

  newEscola(){
    this.model = new Escola();
  }

  goBack():void{
    this.location.back();
  }

  insert(_escola: Escola): void{
    this.escolaService.addEscola(_escola).subscribe(() => this.goBack());
  }
  
  ngOnInit() {
  }

}
