import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from './turma';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TurmaService {
  turmaUrl = 'http://localhost:56359/api/turma';
  
  constructor(private http: HttpClient) { }
 
  listar(): Observable<Turma[]>{
      return this.http.get<Turma[]>(`${this.turmaUrl}`).pipe(
        tap(turma => console.log("Turmas")),
        catchError(this.handleError('Buscar Turmas', []))
      );
  }

  listarByID(id: number): Observable<Turma>{
    const url = `${this.turmaUrl}/${id}`;
      return this.http.get<Turma>(url).pipe(
        tap(_ => console.log(`ID Escola = ${id}`),
        catchError(this.handleError('Buscar Turmas')))
      );
  }

  addTurma(turma: Turma): Observable<Turma>{
    return this.http.post<Turma>(this.turmaUrl, turma, httpOptions)
    .pipe(
      tap((turma: Turma) => alert(`Turma adicionada.`)),
      catchError(this.handleError<Turma>('Adicionar Turma'))
    );
  }

  updateTurma(turma: Turma): Observable<any>{
    const url = `${this.turmaUrl}/?id=${turma.ID}`;
    return this.http.put(url, turma, httpOptions)
    .pipe(
      tap(_ => alert(`Turma atualizada.`)),
      catchError(this.handleError<any>('Atualizar Turma')),
    );
  }

  deleteTurma(turma: Turma | number): Observable<Turma>{
    const id = typeof turma === 'number' ? turma : turma.ID;
    const url = `${this.turmaUrl}/?id=${id}`;
    
    return this.http.delete<Turma>(url, httpOptions)
      .pipe(
          tap(_ => alert(`Escola excluída.`)),
          catchError(this.handleError<Turma>('Excluir Escola'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} falhou: ${error.message}`);
      alert(`${operation} falhou: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}