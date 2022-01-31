import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { SagasService } from '../servicosInterface/sagas.service';
import { Sagas } from './../modelosInterface/sagas';
import { SagasDialogComponent } from './sagasDialog/sagas-dialog/sagas-dialog.component';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.scss']
})
export class SagasComponent {

  openDialog() {

    this.dialog.open(SagasDialogComponent, {
      data: {

      },
    });
  }

  sagasCards$: Observable<Sagas[]>
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.sagasCards$;
      }

      return this.sagasCards$;
    })
  );

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private sagasInfo: SagasService,
    ) {
      this.sagasCards$= sagasInfo.listagemSagas()
      .pipe(
        catchError(error =>{return of([])}
        )
      )
    }
}
