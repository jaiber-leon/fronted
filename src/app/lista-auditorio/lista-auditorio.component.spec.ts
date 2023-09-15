import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAuditorioComponent } from './lista-auditorio.component';

describe('ListaAuditorioComponent', () => {
  let component: ListaAuditorioComponent;
  let fixture: ComponentFixture<ListaAuditorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAuditorioComponent]
    });
    fixture = TestBed.createComponent(ListaAuditorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
