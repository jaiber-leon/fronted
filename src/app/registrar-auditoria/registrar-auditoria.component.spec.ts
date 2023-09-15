import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAuditoriaComponent } from './registrar-auditoria.component';

describe('RegistrarAuditoriaComponent', () => {
  let component: RegistrarAuditoriaComponent;
  let fixture: ComponentFixture<RegistrarAuditoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAuditoriaComponent]
    });
    fixture = TestBed.createComponent(RegistrarAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
