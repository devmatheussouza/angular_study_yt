import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';

@NgModule({
  declarations: [DataFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class DataFormModule {}
