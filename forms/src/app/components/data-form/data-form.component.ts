import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe({
          next: (res: any) => {
            console.log(res);
            this.resetarForm();
          },
          error: (error: any) => console.error(error),
        });
    } else {
      Object.entries(this.formulario.controls).forEach((entry) => {
        if (entry[1].status === 'INVALID') {
          console.error(`${entry[0]}: ${entry[1].status}`);
        }
      });
    }
  }

  protected resetarForm(): void {
    this.formulario.reset();
  }
}
