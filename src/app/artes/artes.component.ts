import { ArtesService } from './../servicosInterface/artes.service';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Artes } from '../modelosInterface/artes';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.scss']
})
export class ArtesComponent implements OnInit {
  artesCards$: Observable<Artes[]>
  visaoColunas=['numeracao', 'titulo', 'autor']

  constructor(private artes: ArtesService) {
    this.artesCards$ = artes.listagemArtes().pipe(
      catchError(error => { return of([]) })
    )
  }
  ngOnInit(): void {
  }
}
