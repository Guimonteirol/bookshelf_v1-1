import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Teatro } from '../modelosInterface/teatro';
import { TeatroService } from '../servicosInterface/teatro.service';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent implements OnInit {
  teatroCards$: Observable<Teatro[]>
  layoutColunas=['num', 'titulo', 'autor', 'ano']

  constructor(private teatro: TeatroService) {
    this.teatroCards$ = teatro.listagemTeatro()
    .pipe(
      catchError(error => { return of ([])})
    )
   }

  ngOnInit(): void {
  }

}
