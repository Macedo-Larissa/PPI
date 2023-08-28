"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const meu_componente_component_1 = require("./meu-componente.component");
describe('MeuComponenteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [meu_componente_component_1.MeuComponenteComponent]
        });
        fixture = testing_1.TestBed.createComponent(meu_componente_component_1.MeuComponenteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
