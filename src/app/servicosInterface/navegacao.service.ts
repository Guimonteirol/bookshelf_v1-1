import { Menutop10 } from './../modelosInterface/menutop10';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

private readonly uriAPI='../../assets/menuNavegador.json';
private readonly urlAPI='../../assets/top10.json';

  constructor(private menuDados: HttpClient) { }

  listagemMenu(){
    return this.menuDados.get<MenuNavegador[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiMenu => apiMenu)
    )
  }

  listagemMenutop10(){
    return this.menuDados.get<Menutop10[]>(this.urlAPI)
    .pipe(
      first(),
      tap(apiMenu => apiMenu)
    )
  }
}
