import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDepartamentosComponent } from './actualizar-departamentos.component';

describe('ActualizarDepartamentosComponent', () => {
  let component: ActualizarDepartamentosComponent;
  let fixture: ComponentFixture<ActualizarDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
