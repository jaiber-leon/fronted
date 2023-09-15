import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAuditoriaComponent } from './actualizar-auditoria.component';

describe('ActualizarAuditoriaComponent', () => {
  let component: ActualizarAuditoriaComponent;
  let fixture: ComponentFixture<ActualizarAuditoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAuditoriaComponent]
    });
    fixture = TestBed.createComponent(ActualizarAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
