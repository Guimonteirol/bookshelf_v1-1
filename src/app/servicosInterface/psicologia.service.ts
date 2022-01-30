import { Psicologia } from './../modelosInterface/psicologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

  private readonly uriAPI = "../../assets/psicologia.json"

  constructor(private psicologiaDados: HttpClient) { }

  listagemDados(){
    return this.psicologiaDados.get<Psicologia[]>(this.uriAPI)
    .pipe(
      first(),
      tap(
        apiPsicologia => apiPsicologia
      )
    )

  }
}
