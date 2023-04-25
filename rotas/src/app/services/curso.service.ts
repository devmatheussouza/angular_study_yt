import { Injectable } from "@angular/core";
import { Curso } from "../interfaces/curso.interface";

@Injectable({
  providedIn: "root",
})
export class CursoService {
  constructor() {}

  getCursos(): Curso[] {
    return [
      { id: 1, nome: "Java" },
      { id: 2, nome: "Angular" },
      { id: 3, nome: "Typescript" },
    ];
  }

  getCursoById(id: number): Curso | null {
    const curso: Curso | undefined = this.getCursos().find((curso) => curso.id == id);
    return curso;
  }
}
