import { tap, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artes } from '../modelosInterface/artes';

@Injectable({
  providedIn: 'root'
})
export class ArtesService {
  private readonly uriApi = "assets/artes.json"

  constructor(private arteDados: HttpClient) { }
  listagemArtes() {
    return this.arteDados.get<Artes[]>(this.uriApi).pipe(
      first(),
      tap(apiArtes => apiArtes)
    )
  }
}
