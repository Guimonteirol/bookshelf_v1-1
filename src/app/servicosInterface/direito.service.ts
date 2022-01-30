import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Direito } from '../modelosInterface/direito';

@Injectable({
  providedIn: 'root'
})
export class DireitoService {
  private readonly uriApi = "assets/direito.json"
  constructor(private direitoDados: HttpClient) { }
  listagemDireito() {
    return this.direitoDados.get<Direito[]>(this.uriApi).pipe(
      first(),
      tap(apiDireito => apiDireito)
    )
  }

}
