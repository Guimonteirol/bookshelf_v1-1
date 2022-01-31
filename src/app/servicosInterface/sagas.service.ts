import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sagas } from './../modelosInterface/sagas';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SagasService {

private readonly uriAPI="../../assets/sagas.json";

  constructor (private cardSagas: HttpClient,
 ) { }

 listagemSagas(){
   return this.cardSagas.get<Sagas[]>(this.uriAPI)
   .pipe(
     first(),
     tap(apiSagas => apiSagas)//moldar as informações p uma forma de vetor
   )
 }
}
