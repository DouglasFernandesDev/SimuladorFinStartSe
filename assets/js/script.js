const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');

comCarencia.addEventListener('change', () => comCarencia.checked ?
listaSuspensa.removeAttribute('hidden') : listaSuspensa.setAttribute('hidden', 'hidden'));
