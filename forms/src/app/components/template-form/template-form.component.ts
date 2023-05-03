import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('endereco') endereco: NgModelGroup;

  constructor() {}

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
}
