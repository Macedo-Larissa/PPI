import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraDisciplinasComponent } from './mostra-disciplinas.component';

describe('MostraDisciplinasComponent', () => {
  let component: MostraDisciplinasComponent;
  let fixture: ComponentFixture<MostraDisciplinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostraDisciplinasComponent]
    });
    fixture = TestBed.createComponent(MostraDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
