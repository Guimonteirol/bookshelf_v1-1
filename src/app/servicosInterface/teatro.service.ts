import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Teatro } from './../modelosInterface/teatro';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {
    private readonly uriApi = "assets/teatro.json"

  constructor(private teatroDados: HttpClient) { }
  listagemTeatro (){
    return this.teatroDados.get<Teatro[]>(this.uriApi)
    .pipe(
            first(),
            tap(apiTeatro => apiTeatro)
    )
  }
}
