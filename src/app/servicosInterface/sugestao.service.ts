import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sugestao } from '../modelosInterface/sugestao';

@Injectable({
  providedIn: 'root'
})
export class SugestaoService {
  private readonly uriApi = "assets/sugestao.json"

  constructor(private sugestaoDados: HttpClient) { }
  listagemSugestao() {
    return this.sugestaoDados.get<Sugestao[]>(this.uriApi)
      .pipe(
        first(),
        tap(apiSugestao => apiSugestao)
      )


  }
}
