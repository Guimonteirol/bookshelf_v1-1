import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import {Melhoresdomes} from './../modelosInterface/melhoresdomes'

@Injectable({
  providedIn: 'root'
})
export class MelhoresdomesService {

  private readonly uriAPI = "../../assets/melhoresdomes.json";

constructor(private cardsMelhoresMes: HttpClient) { }

  listagemCards(){
    return this.cardsMelhoresMes
    .get<Melhoresdomes[]>
    (this.uriAPI)
    .pipe(
      first(),
      tap(apiMelhoresMes => console.log(apiMelhoresMes))
    )
  }
}
