export interface CriticasLiterarias {
  _idCriticaLit:string;
  titulo:string;
  critico:string;
  img: string;
  resumo:string;
  link:[{ref:string}]
  cols:number;
  rows:number;
}
