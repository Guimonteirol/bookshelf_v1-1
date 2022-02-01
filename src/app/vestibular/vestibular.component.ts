import { VestibularService } from './../servicosInterface/vestibular.service';
import { Vestibular } from './../modelosInterface/vestibular';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VestibularDialogComponent } from './vestibular-dialog/vestibular-dialog.component';

@Component({
  selector: 'app-vestibular',
  templateUrl: './vestibular.component.html',
  styleUrls: ['./vestibular.component.scss']
})
export class VestibularComponent implements OnInit {
vestibularCards$: Observable <Vestibular[]>
openDialog(universidade: string) {
  this.dialog.open(VestibularDialogComponent, {
    data: universidade
  });
}
constructor(private vestibular: VestibularService, public dialog: MatDialog) {
  this.vestibularCards$ = vestibular.listagemVestibular().pipe(
    catchError(error => { return of([]) })
    )
  }

  ngOnInit(): void {
  }

}
