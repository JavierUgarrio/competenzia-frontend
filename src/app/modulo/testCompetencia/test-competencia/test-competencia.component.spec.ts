import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompetenciaComponent } from './test-competencia.component';

describe('TestCompetenciaComponent', () => {
  let component: TestCompetenciaComponent;
  let fixture: ComponentFixture<TestCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCompetenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
