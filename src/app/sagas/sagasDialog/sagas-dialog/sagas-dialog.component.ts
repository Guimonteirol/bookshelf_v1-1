import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sagas } from 'src/app/modelosInterface/sagas';
import { SagasService } from 'src/app/servicosInterface/sagas.service';

@Component({
  selector: 'app-sagas-dialog',
  templateUrl: './sagas-dialog.component.html',
  styleUrls: ['./sagas-dialog.component.scss']
})
export class SagasDialogComponent implements OnInit {

  sagasLista$: Observable<Sagas[]>
  list = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches })=>{
      if (matches){
        return this.sagasLista$;
      }

      return this.sagasLista$;
    })
  );

  constructor(
    public dialog:MatDialog,
    private breakpointObserver: BreakpointObserver,
    private sagasInfo: SagasService,
    @Inject (MAT_DIALOG_DATA) public title:string
  ) {
    this.sagasLista$ = sagasInfo.listagemSagas()
    .pipe(
      catchError(error =>{return of([])}
      )
    )
  }

  ngOnInit(): void {
  }

}
