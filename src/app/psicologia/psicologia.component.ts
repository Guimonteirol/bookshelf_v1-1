import { Psicologia } from './../modelosInterface/psicologia';
import { catchError, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PsicologiaService } from '../servicosInterface/psicologia.service';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss']
})
export class PsicologiaComponent implements OnInit {

  psicologiaTable$: Observable<Psicologia[]>;
  visaoColunas = ['title','autor', 'numero'];

  constructor(
    private psicologiaService : PsicologiaService
  ) {
    this.psicologiaTable$ = psicologiaService.listagemDados()
    .pipe(
      catchError(
        error=>{
          return of([])
        }
      )
    )
  }

  ngOnInit(): void {
  }

}
