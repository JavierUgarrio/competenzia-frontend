import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcentralComponent } from './panelcentral.component';

describe('PanelcentralComponent', () => {
  let component: PanelcentralComponent;
  let fixture: ComponentFixture<PanelcentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelcentralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelcentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
