function calcular() {
    const p = Number(document.getElementById('peso').value);

    const a = Number(document.getElementById('altura').value);

    const imc = (p / (a * a)).toFixed(2);

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>Seu IMC deu ${imc}</p>`
}