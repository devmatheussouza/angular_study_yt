import { Injectable } from "@angular/core";
import { Curso } from "../interfaces/curso.interface";

@Injectable({
  providedIn: "root",
})
export class CursoService {
  static CURSOS_POR_PAGINA: number = 3;

  constructor() {}

  getCursos(): Curso[] {
    return [
      { id: 1, nome: "Java" },
      { id: 2, nome: "Angular" },
      { id: 3, nome: "Typescript" },
      { id: 4, nome: "Javascript" },
      { id: 5, nome: "MySQL" },
      { id: 6, nome: "Spring" },
      { id: 7, nome: "C++" },
      { id: 8, nome: "PHP" },
      { id: 9, nome: "React" },
    ];
  }

  getCursoById(id: number): Curso | null {
    const curso: Curso | undefined = this.getCursos().find((curso) => curso.id == id);
    return curso;
  }
}
