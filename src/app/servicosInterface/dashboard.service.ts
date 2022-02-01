import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly uriAPI='../../assets/dashboard.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }

  search(query: string): Observable<Dashboard[]>{
    return this.cardsDashboard.get<Dashboard[]>(
      this.uriAPI
    ).pipe(
      map(cards => cards.filter(termo => ((termo.titulo).toLowerCase()).startsWith(query.toLocaleLowerCase())
      || ((termo.subtitulo).toLowerCase()).startsWith(query.toLocaleLowerCase()))))
  }
}
