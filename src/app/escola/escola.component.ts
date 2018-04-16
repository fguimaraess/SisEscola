import { EscolaService } from './../escola.service';
import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola';

declare let swal: any;

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {
  
  escolas: Array<Escola>;
  selectedEscola: Escola;
  verMaisEscola: Escola;
  esconder: boolean;

  constructor(private escolaService: EscolaService) { }

  ngOnInit() {
    this.listar();
    this.esconder = true;
  }

  onSelect(_escola: Escola): void{
    this.selectedEscola = _escola;
  }

  listar(): void{
    this.escolaService.listar().subscribe(dados => this.escolas = dados);
  }

  verMais(e: Escola): void{
    if(this.esconder){
      this.esconder = false;
    } else {
      this.esconder = true;
    }
    
    this.verMaisEscola = e;
  }

  delete(escola: Escola): void{
    swal({
      title: "",
      text: "Deseja excluir a escola? Isso excluirá também todas as turmas.",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Excluir",
      confirmButtonClass: 'btn btn-success',
      cancelButtonText: "Cancelar",
      cancelButtonClass: 'btn btn-danger'
    }).then((result) => {
      if(result.value){
        this.escolas = this.escolas.filter(x => x !== escola);
        this.escolaService.deleteEscola(escola).subscribe();
      }
    })
  }

}
