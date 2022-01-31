import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Direito } from '../modelosInterface/direito';
import { DireitoService } from '../servicosInterface/direito.service';
@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss']
})
export class DireitoComponent implements OnInit {
  direitoCards$: Observable<Direito[]>
  visaoColunas=['numeracao','titulo','autor'];

  constructor(private direito: DireitoService) {
    this.direitoCards$ = direito.listagemDireito().pipe(
      catchError(error => { return of([]) })
    )

  }

  ngOnInit(): void {
  }

}
