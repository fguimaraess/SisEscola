import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from './turma';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TurmaService {
  turmaUrl = 'http://localhost:56359/api/turma';
  
  constructor(private http: HttpClient) { }
 
  listar(){
      return this.http.get<any[]>(`${this.turmaUrl}`);
  }

  addTurma(turma: Turma): Observable<Turma>{
    return this.http.post<Turma>(this.turmaUrl, turma, httpOptions);
  }

  updateTurma(turma: Turma): Observable<any>{
    const url = `${this.turmaUrl}/?id=${turma.ID}`;
    return this.http.put(url, turma, httpOptions);
  }

  deleteTurma(turma: Turma | number): Observable<Turma>{
    const id = typeof turma === 'number' ? turma : turma.ID;
    const url = `${this.turmaUrl}/?id=${id}`;
    
    return this.http.delete<Turma>(url, httpOptions);
  }
}