import { Biblioteconomia } from './../modelos/biblioteconomia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiblioteconomiaService {

  private readonly urlAPI = '/assets/biblioteconomia.json'

constructor(private biblioDados: HttpClient) { }

listagemDados() {
  return this.biblioDados.get<Biblioteconomia[]>
  (this.urlAPI)
  .pipe(
    first(),
    tap(apiBiblioteconomia => console.log
      (apiBiblioteconomia)
      )
  )
}

}
