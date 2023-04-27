import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAtualizadoComponent } from './aluno-atualizado.component';

describe('AlunoAtualizadoComponent', () => {
  let component: AlunoAtualizadoComponent;
  let fixture: ComponentFixture<AlunoAtualizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoAtualizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoAtualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
