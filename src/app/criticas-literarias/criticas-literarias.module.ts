import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriticasLiterariasComponent } from './criticas-literarias/criticas-literarias.component';
import { CrticasDialogComponent } from './crticasDialog/crticas-dialog/crticas-dialog.component';



@NgModule({
  declarations: [
    CriticasLiterariasComponent,
    CrticasDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CriticasLiterariasModule { }
