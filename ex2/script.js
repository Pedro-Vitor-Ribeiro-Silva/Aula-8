function calcularAumento() {
    let salario = parseFloat(document.getElementById("salarioAtual").value);
    let percentual;
    
    if (salario <= 1200) {
        percentual = 0.16;
    } else if (salario <= 2100) {
        percentual = 0.13;
    } else if (salario <= 3000) {
        percentual = 0.10;
    } else {
        percentual = 0.05;
    }
    
    let novoSalario = salario + (salario * percentual);
    document.getElementById("resultado2").innerText = `Novo salário: R$ ${novoSalario.toFixed(2)}`;
}

