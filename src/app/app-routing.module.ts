import { ArtesComponent } from './artes/artes.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { DireitoComponent } from './direito/direito.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { SagasComponent } from './sagas/sagas.component';
import { MelhoresdomesComponent } from './melhoresdomes/melhoresdomes.component';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  { path:'melhores', component: MelhoresdomesComponent,
  ...canActivate(enviarSemLogin)
  },
  {path:'sugestao', component: SugestaoComponent,
  ...canActivate(enviarSemLogin)
  },
  { path:'direito', component: DireitoComponent,
  ...canActivate(enviarSemLogin)
  },
  {
    path:'psicologia', component: PsicologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path:'sagas', component: SagasComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path:'artes', component: ArtesComponent,
    ...canActivate(enviarSemLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
