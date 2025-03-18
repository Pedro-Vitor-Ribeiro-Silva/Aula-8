let res = document.getElementById('res');

function calcular(operacao) {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    

    if (operacao === '/') {
        if (n2 === 0) {
            return res.innerHTML += `<p style="color: red;">Erro: Divisão por 0!</p>`;
        }
    }
    
    if (operacao === '√') {
        if (n1 < 0) {
            return res.innerHTML += `<p style="color: red;">Erro: Raiz negativa!</p>`;
        }
    }
    
    const operacoes = {
        '+': n1 + n2,
        '-': n1 - n2,
        '*': n1 * n2,
        '/': n1 / n2,
        '^': n1 ** n2,
        '√': n1 ** 0.5
    };

    let resultado = operacoes[operacao];
    res.innerHTML += `<p>${operacao === '√' ? `√${n1}` : `${n1} ${operacao} ${n2}`} = ${resultado}</p>`;
}

function limpar() {
    res.innerHTML = "Aqui aparecerão os resultados...";
}



