import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, of } from 'rxjs';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if (senha && confirma && senha !== confirma) {
      return {
        senhaConfirmada: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss']
})
export class AppCadastroComponent implements OnInit {
  stepOne!: FormGroup;
  steptwo!: FormGroup;
  stepthree!: FormGroup;
  stepfour!: FormGroup;

  //desconstruir formularioCadastro
  nomeuser!:string;
  emailuser!:string;
  senhauser!:string;
  confirmarSenhauser!:string;

  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router,
    private _formBuilder: FormBuilder

  ) {
    /*this.stepOne = this.loginBuilder.group({
      nome: ['', Validators.compose([Validators.required])]
    })
    this.stepdois = this.loginBuilder.group({
      email: ['', Validators.compose([Validators.required])]
    })
    this.steptres = this.loginBuilder.group({
      senha: ['', Validators.compose([Validators.required])]
    })
    this.stepquatro = this.loginBuilder.group({
      confirmaSenha: ['', Validators.compose([Validators.required])]
    })*/
   }


  enviaCadastro() {
    if (!this.nomeuser || !this.emailuser || !this.senhauser || !this.confirmarSenhauser) {
     this.toast.error('Informações incompletas!')
    }
    else if(this.senhauser !== this.confirmarSenhauser){
      this.toast.error('As senhas estão diferentes!');
    }

   // const { nome, email, senha } = this.formularioCadastro.value;
    this.autenticacaoFirebaseService
      .cadastrarUsuario(this.nomeuser, this.emailuser, this.senhauser).pipe(
        this.toast.observe({
          success: 'Cadastro executado, bem vindo ao BookShelf',
          loading: 'Enviando informações...',
          error: ({ message }) => this.autenticacaoFirebaseService.menssagensDeErro(message),
        })
      ).subscribe(() => {
       this.rotas.navigate(['/usuario'])
      });
  }
  ngOnInit(): void {
     this.stepOne = this.loginBuilder.group({
      nome: ['', Validators.compose([Validators.required])]
    })
    this.steptwo = this.loginBuilder.group({
      email: ['', Validators.compose([Validators.required])]
    })
    this.stepthree = this.loginBuilder.group({
      senha: ['', Validators.compose([Validators.required])]
    })
    this.stepfour = this.loginBuilder.group({
      confirmaSenha: ['', Validators.compose([Validators.required])]
    })
  }
}
