import { VestibularService } from './../../servicosInterface/vestibular.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { catchError, of, Observable } from 'rxjs';
import { Vestibular } from 'src/app/modelosInterface/vestibular';
import { Breakpoints,BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-vestibular-dialog',
  templateUrl: './vestibular-dialog.component.html',
  styleUrls: ['./vestibular-dialog.component.scss']
})
export class VestibularDialogComponent implements OnInit {
  vestibularCards$: Observable<Vestibular[]>
  lista = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches })=>{
      if (matches){
        return this.vestibularCards$;
      }
      return this.vestibularCards$;
    })
  );
  constructor(@Inject(MAT_DIALOG_DATA) public universidade:
  string, private vestibularDados: VestibularService, private breakpointObserver: BreakpointObserver,

  ) {
    this.vestibularCards$ = vestibularDados.listagemVestibular()
    .pipe(
      catchError(error =>{return of([])}
      )
    )
  }


  ngOnInit(): void {
  }

}
