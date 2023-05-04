import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class TemplateFormModule {}
