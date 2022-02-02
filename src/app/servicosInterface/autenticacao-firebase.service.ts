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
      if(error === "auth/email-alredy-in-use" ){
          return 'Email já está cadastrado'
      }
      else if(error === "auth/weak-password" ){
         return 'A senha deve conter no mínimo 6 caracteres';
      }
      else if(error === "auth/invalid-email" ){
          return 'Email inválido'
      }
      else
          return 'Ocorreu um erro';
      }
    }


