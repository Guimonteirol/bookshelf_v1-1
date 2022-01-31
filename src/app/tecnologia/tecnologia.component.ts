import { TecnologiaService } from './../servicosInterface/tecnologia.service';
import { Tecnologia } from './../modelosInterface/tecnologia';
import { Component } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent {

  tecTable$: Observable<Tecnologia[]>
  displayedColumns = ['position', 'title', 'author']

  constructor(private tecnologiaService: TecnologiaService) {
    this.tecTable$ = tecnologiaService.listagemTec()
    .pipe(
      catchError(error => {return of([])})
      )
   }

  ngOnInit(): void {
  }

}
