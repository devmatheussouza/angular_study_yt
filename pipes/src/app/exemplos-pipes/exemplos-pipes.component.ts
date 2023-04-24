import { Component, OnInit } from "@angular/core";
import { interval, map } from "rxjs";

@Component({
  selector: "app-exemplos-pipes",
  templateUrl: "./exemplos-pipes.component.html",
  styleUrls: ["./exemplos-pipes.component.css"],
})
export class ExemplosPipesComponent implements OnInit {
  listaLivros: any[] = [
    {
      titulo: "Laranja Mecânica",
      rating: 4.72512,
      numeroPaginas: 253,
      preco: 39.89,
      formato: "Capa Comum",
      dataPublicacao: new Date(2015, 8, 16),
      url: "https://a.co/d/5BuKeU3",
      urlImagem: "https://www.hypeness.com.br/1/2018/05/laranja-mecanica-1.jpg",
    },
    {
      titulo: "Laranja Mecânica",
      rating: 4.72512,
      numeroPaginas: 253,
      preco: 39.89,
      formato: "Capa Comum",
      dataPublicacao: new Date(2015, 8, 16),
      url: "https://a.co/d/5BuKeU3",
      urlImagem:
        "https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/310666265_613512627001200_7025368622539003554_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Cypef4H-iD8AX-qz0Rm&_nc_ht=scontent.fcwb2-3.fna&oh=00_AfBACFzK2JbaTV8HDEyAHXBqgISGZ5ku7jgU18_hC84tvQ&oe=644AFA41",
    },
  ];

  listaCursos: string[] = ["Java", "Angular", "Typescript", "MySQL", "Javascript"];

  filtro: string = "";

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor async"), 2000);
  });

  // rxjs
  valorAsync2 = interval(2000).pipe(map((_) => "Valor async 2"));

  constructor() {}

  ngOnInit(): void {}

  addCurso(inputNovoCurso: HTMLInputElement) {
    const novoCurso: string = inputNovoCurso.value.trim();
    if (inputNovoCurso.value.length > 0 && novoCurso !== "") this.listaCursos.push(inputNovoCurso.value);
    inputNovoCurso.value = "";
    console.log(this.listaCursos);
  }

  obterCursosComFiltro() {
    if (this.listaCursos.length === 0 || this.filtro === undefined || this.filtro.trim() === "")
      return this.listaCursos;

    const filtro: string = this.filtro.toLowerCase();

    return this.listaCursos.filter((item) => item.toLowerCase().includes(filtro));
  }
}
