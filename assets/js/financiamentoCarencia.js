import { Financiamento } from './financiamento.js';
import { Parcela } from './parcela.js';

class FinanciamentoCarencia extends Financiamento {
  #carencia;
  #taxaJuros;
  #parcelas = [];
  constructor(valor, entrada, taxaJuros, prazo, carencia) {
    super(valor, entrada, taxaJuros, prazo);
    this.#taxaJuros = taxaJuros;
  }
}