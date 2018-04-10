import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Escola } from './escola';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EscolaService {
  escolaUrl = 'http://localhost:56359/api/escola';

  constructor(private http: HttpClient) { }

    listar(): Observable<Escola[]>{
      return this.http.get<Escola[]>(`${this.escolaUrl}`)
        .pipe(
          tap(escola => console.log(`Escolas`)),
          catchError(this.handleError('Buscar Escolas', []))
        );
    }

      listarByID(id: number): Observable<Escola>{
        const url = `${this.escolaUrl}/${id}`;
        return this.http.get<Escola>(url)
          .pipe(
            tap(_ => console.log(`ID Escola = ${id}`)),
            catchError(this.handleError<Escola>(`ID Escola = ${id}`))
        );
      }

    addEscola(escola: Escola): Observable<Escola> {
      return this.http.post<Escola>(this.escolaUrl, escola, httpOptions)
        .pipe(
          tap((escola: Escola) => alert(`Escola adicionada.`)),
          catchError(this.handleError<Escola>('Adicionar Escola'))
        );
    }

    updateEscola(escola: Escola): Observable<any>{
      const url = `${this.escolaUrl}/?id=${escola.ID}`;
      return this.http.put(url, escola, httpOptions)
        .pipe(
          tap(_ => alert(`Escola atualizada.`)),
          catchError(this.handleError<any>('Atualizar Escola'))
        );
    }

    deleteEscola(escola: Escola | number): Observable<Escola>{
      const id = typeof escola === 'number' ? escola : escola.ID;
      const url = `${this.escolaUrl}/?id=${id}`;

      return this.http.delete<Escola>(url,httpOptions)
        .pipe(
          tap(_ => alert(`Escola excluída.`)),
          catchError(this.handleError<Escola>('Excluir Escola'))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
