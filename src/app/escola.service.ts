import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Escola } from './escola';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EscolaService {
  escolaUrl = 'http://localhost:56359/api/escola';

  constructor(private http: HttpClient) { }

    listar(){
      return this.http.get<any[]>(`${this.escolaUrl}`);
    }

    addEscola(escola: Escola): Observable<Escola> {
      return this.http.post<Escola>(this.escolaUrl, escola, httpOptions);
    }

    updateEscola(escola: Escola): Observable<any>{
      const url = `${this.escolaUrl}/?id=${escola.ID}`;
      return this.http.put(url, escola, httpOptions)
    }

    deleteEscola(escola: Escola | number): Observable<Escola>{
      const id = typeof escola === 'number' ? escola : escola.ID;
      const url = `${this.escolaUrl}/?id=${id}`;

      return this.http.delete<Escola>(url,httpOptions);
    }

}
