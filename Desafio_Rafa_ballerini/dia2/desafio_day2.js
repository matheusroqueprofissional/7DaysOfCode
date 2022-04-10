var capturando = "";
function capturar(){
    capturandonome = document.getElementById('input-name').value;
    document.getElementById('valorDigitadonome').innerHTML = capturandonome;
    capturandoidade = document.getElementById('input-idade').value;
    document.getElementById('valorDigitadoidade').innerHTML = capturandoidade;
    capturandolinguagem = document.getElementById('input-linguagem').value;
    document.getElementById('valorDigitadolinguagem').innerHTML = capturandolinguagem;
}