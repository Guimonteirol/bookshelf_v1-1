import { Melhoresdomes } from './../modelosInterface/melhoresdomes';
import { Component } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MelhoresdomesService } from '../servicosInterface/melhoresdomes.service';


@Component({
  selector: 'app-melhoresdomes',
  templateUrl: './melhoresdomes.component.html',
  styleUrls: ['./melhoresdomes.component.scss']
})
export class MelhoresdomesComponent {

  cards$: Observable<Melhoresdomes[]>;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private melhoresdomes: MelhoresdomesService ) {
      this.cards$ = melhoresdomes.listagemCards()
      .pipe(
        catchError(
          error =>{
            return of([])
          }
        )
      )
    }



}
