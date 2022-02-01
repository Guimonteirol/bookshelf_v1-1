import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  usuarioLogado$ = authState(this.usuarioFb);

  constructor(
    private usuarioFb: Auth
    ) { }

    loginUsuario(usuarioEmail: string, usuarioSenha: string){
      return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha));
    }

    loginWithGoogle() {
      return signInWithPopup(this.usuarioFb, new GoogleAuthProvider());
    }

    sairLogin(){
      return from(this.usuarioFb.signOut());
    }

    cadastrarUsuario(nome: string, email: string, senha: string){
      return from(createUserWithEmailAndPassword(this.usuarioFb, email, senha)).pipe(
        switchMap(({user}) => updateProfile(user, {displayName: nome}))
      )
    }

    menssagensDeErro(error: string){
      switch(error){
        case 'auth/invalid-email':
          return 'Email inválido'
         break;
        case 'auth/weak-password':
         return 'A senha deve conter no mínimo 6 caracteres';
         break;
        case 'auth/email-alredy-in-use':
          return 'Email já está cadastrado'
          break;
        default:
          return 'Ocorreu um erro';
      }
    }

}
