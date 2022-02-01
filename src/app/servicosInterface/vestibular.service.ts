import { first, tap } from 'rxjs';
import { Vestibular } from './../modelosInterface/vestibular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VestibularService {
  private readonly uriApi = "assets/vestibular.json"

  constructor(private vestibularDados: HttpClient) { }
  listagemVestibular() {
    return this.vestibularDados.get<Vestibular[]>(this.uriApi).pipe(
      first(),
      tap(apiVestibular => apiVestibular)
    )
  }
}
