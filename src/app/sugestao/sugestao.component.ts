import { SugestaoService } from './../servicosInterface/sugestao.service';
import { Sugestao } from './../modelosInterface/sugestao';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.scss']
})
export class SugestaoComponent implements OnInit {
  sugestaoCards$: Observable<Sugestao[]>
  constructor(private sugestao: SugestaoService) {
    this.sugestaoCards$ = sugestao.listagemSugestao().pipe(
      catchError(error => { return of([]) })
    )
  }

  ngOnInit(): void {
  }

}
