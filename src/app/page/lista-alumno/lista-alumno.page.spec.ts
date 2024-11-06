import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAlumnoPage } from './lista-alumno.page';

describe('ListaAlumnoPage', () => {
  let component: ListaAlumnoPage;
  let fixture: ComponentFixture<ListaAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
