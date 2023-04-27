import { Injectable } from "@angular/core";

import { Aluno } from "../interfaces/aluno.interface";

@Injectable()
export class AlunoService {
  static TAMANHO_PAGINA: number = 3;

  private listaAlunos: Aluno[] = [
    { id: crypto.randomUUID(), nome: "Aluno 1", email: "aluno1@email.com" },
    { id: crypto.randomUUID(), nome: "Aluno 2", email: "aluno2@email.com" },
    { id: crypto.randomUUID(), nome: "Aluno 3", email: "aluno3@email.com" },
    { id: crypto.randomUUID(), nome: "Aluno 4", email: "aluno4@email.com" },
    { id: crypto.randomUUID(), nome: "Aluno 5", email: "aluno5@email.com" },
    { id: crypto.randomUUID(), nome: "Aluno 6", email: "aluno6@email.com" },
  ];

  constructor() {}

  getAlunos() {
    return this.listaAlunos;
  }

  getAlunoById(id: string) {
    return this.getAlunos().find((aluno) => aluno.id === id);
  }

  updateAluno(id: string, nome: string, email: string) {
    const aluno: Aluno | undefined = this.getAlunoById(id);
    if (aluno) {
      aluno.nome = nome;
      aluno.email = email;
    }
  }
}
