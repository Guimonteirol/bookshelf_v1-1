import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { ArtesComponent } from './artes/artes.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { DireitoComponent } from './direito/direito.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { SagasComponent } from './sagas/sagas.component';
import { MelhoresdomesComponent } from './melhoresdomes/melhoresdomes.component';
import { TeatroComponent } from './teatro/teatro.component';
import { VestibularComponent } from './vestibular/vestibular.component';


const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'usuario', component: TelaUsuarioComponent,
    ...canActivate(enviarSemLogin)
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

  {
    path: 'biblioteconomia',
    loadChildren: () => import('./biblioteconomia/biblioteconomia.module').then(c => c.BiblioteconomiaModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'tecnologia', component: TecnologiaComponent,
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
  },
  {
    path:'teatro', component: TeatroComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path:'vestibular', component: VestibularComponent,
    ...canActivate(enviarSemLogin)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
