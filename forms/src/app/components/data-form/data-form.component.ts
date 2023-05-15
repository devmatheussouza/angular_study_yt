import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  protected formulario: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
  }

  onSubmit(): void {
    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.resetarForm();
        },
        error: (error: any) => console.error(error),
      });
  }

  protected resetarForm(): void {
    this.formulario.reset();
  }
}
