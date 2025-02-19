import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCompetenciaComponent } from './formulario-competencia.component';

describe('FormularioCompetenciaComponent', () => {
  let component: FormularioCompetenciaComponent;
  let fixture: ComponentFixture<FormularioCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
