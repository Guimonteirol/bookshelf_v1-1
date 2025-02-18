import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import {MatTableModule} from '@angular/material/table';


import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-compartilhado/app-material/app-material.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

import { SagasComponent } from './sagas/sagas.component';
import { SagasDialogComponent } from './sagas/sagasDialog/sagas-dialog/sagas-dialog.component';
import { MelhoresdomesComponent } from './melhoresdomes/melhoresdomes.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { DireitoComponent } from './direito/direito.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { ArtesComponent } from './artes/artes.component';
import { TeatroComponent } from './teatro/teatro.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { VestibularComponent } from './vestibular/vestibular.component';
import { VestibularDialogComponent } from './vestibular/vestibular-dialog/vestibular-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    FeedComponent,
    AppLoginComponent,
    AppCadastroComponent,
    TecnologiaComponent,
    SagasComponent,
    SagasDialogComponent,
    MelhoresdomesComponent,
    SugestaoComponent,
    DireitoComponent,
    PsicologiaComponent,
    ArtesComponent,
    TeatroComponent,
    TelaUsuarioComponent,
    VestibularComponent,
    VestibularDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
