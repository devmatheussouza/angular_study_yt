import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('endereco') endereco: NgModelGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmitForm(form: NgForm) {
    // console.log(form.valid);
    console.log(
      `NgModelGroup (Endereço): ${JSON.stringify(
        this.endereco.value,
        null,
        ' '
      )}`
    );
  }

  consultaCEP(cep: string, form: NgForm): void {
    // Retira dígitos que não sejam números
    cep = cep ? cep.replace(/\D/g, '') : '';

    if (cep != '') {
      if (this.validaCEP(cep)) {
        this.resetaDadosEndereco(form);
        this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map((dados: any) => dados))
          .subscribe((dadosJson: any) => this.populaDadosForm(dadosJson, form));
      }
    }
  }

  validaCEP(cep: string): boolean {
    const validacao = /^[0-9]{8}$/;
    return validacao.test(cep);
  }

  populaDadosForm(dados: any, f: NgForm) {
    f.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetaDadosEndereco(f: NgForm) {
    f.form.patchValue({
      endereco: {
        cep: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }
}
