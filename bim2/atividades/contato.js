"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
class Contato {
    constructor(nm, email, tel) {
        this.alterarnome(nm);
        this.alteraremail(email);
        this.alterartelefone(tel);
    }
    alterarnome(nm) {
        this.nome = nm;
    }
    obternome() {
        return this.nome;
    }
    alteraremail(email) {
        this.email = email;
    }
    obteremail() {
        return this.email;
    }
    alterartelefone(tel) {
        this.telefone = tel;
    }
    obtertelefone() {
        return this.telefone;
    }
}
exports.Contato = Contato;
