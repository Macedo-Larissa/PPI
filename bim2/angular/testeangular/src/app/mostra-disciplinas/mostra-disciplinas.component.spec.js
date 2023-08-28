"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const mostra_disciplinas_component_1 = require("./mostra-disciplinas.component");
describe('MostraDisciplinasComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [mostra_disciplinas_component_1.MostraDisciplinasComponent]
        });
        fixture = testing_1.TestBed.createComponent(mostra_disciplinas_component_1.MostraDisciplinasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
