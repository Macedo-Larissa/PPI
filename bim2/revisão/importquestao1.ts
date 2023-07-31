import { Elevador } from "./questao1";

const meuElevador = new Elevador(8, 10);
  
meuElevador.abrirPorta();
meuElevador.entrar(5);

meuElevador.fecharPorta();
meuElevador.subir();
meuElevador.subir();

meuElevador.abrirPorta();
meuElevador.entrar(4);

meuElevador.fecharPorta();
meuElevador.descer();

meuElevador.abrirPorta();
meuElevador.sair(3);

meuElevador.abrirPorta();
meuElevador.sair(1);