import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDeputadosComponent } from './listar-deputados.component';

describe('ListarDeputadosComponent', () => {
  let component: ListarDeputadosComponent;
  let fixture: ComponentFixture<ListarDeputadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDeputadosComponent]
    });
    fixture = TestBed.createComponent(ListarDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
