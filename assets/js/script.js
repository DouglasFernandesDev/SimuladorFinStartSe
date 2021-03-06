import { Financiamento } from "./financiamento.js";
import { FinanciamentoCarencia } from "./financiamentoCarencia.js";

const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

const limpaCorpoTabela = () => {
  while (corpoTabela.firstChild) {
    corpoTabela.removeChild(corpoTabela.firstChild);
  }
}

comCarencia.addEventListener('change', () => comCarencia.checked ?
listaSuspensa.removeAttribute('hidden') : listaSuspensa.setAttribute('hidden', 'hidden'));

botaoCalcular.addEventListener('click', () => {
  limpaCorpoTabela();
  const valor = parseFloat(textoValor.value);
  const entrada = parseFloat(textoEntrada.value);
  const taxaJuros = parseFloat(textoTaxaJuros.value);
  const prazo = parseFloat(textoPrazo.value);
  const carencia = parseInt(listaSuspensa.value);
  const simulacao  = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
  const simulacao2 = new Financiamento (valor, entrada, taxaJuros, prazo);
  comCarencia.checked ? carencia && simulacao : simulacao2;
  simulacao.calcParcelasMensais();
  simulacao.exibeParcelas();
});
