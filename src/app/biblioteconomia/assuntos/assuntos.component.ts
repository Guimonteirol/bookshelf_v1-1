import { BiblioteconomiaService } from './../Services/biblioteconomia.service';
import { Biblioteconomia } from './../modelos/biblioteconomia';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-assuntos',
  templateUrl: './assuntos.component.html',
  styleUrls: ['./assuntos.component.scss']
})
export class AssuntosComponent {

  biblioCards$: Observable<Biblioteconomia[]>

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.biblioCards$;
      }
      return this.biblioCards$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private biblioInfo: BiblioteconomiaService
    )
    {
    this.biblioCards$ = biblioInfo.listagemDados()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
    }
}
