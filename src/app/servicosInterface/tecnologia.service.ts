import { Tecnologia } from './../modelosInterface/tecnologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private readonly urlAPI = "/assets/tecnologia.json"

  constructor(private tecDados: HttpClient) { }

  listagemTec(){
    return this.tecDados.get<Tecnologia[]>(this.urlAPI)
    .pipe(
      first(),
      tap(apiTecnologia => apiTecnologia )
    )
  }
}
