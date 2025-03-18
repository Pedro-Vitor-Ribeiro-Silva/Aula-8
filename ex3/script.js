function calcularTransporte() {
    let funcionarios = parseInt(document.getElementById("funcionarios").value);
    let dias = parseInt(document.getElementById("dias").value);
    let custoPorDia;

    if (funcionarios <= 49){
        custoPorDia = 4.50
    } else if (funcionarios <= 99){
        custoPorDia = 4.10
    } else if(funcionarios <= 149){
        custoPorDia = 3.80
    } else{
        custoPorDia = 3.60
    }
    
    let custoTotal = funcionarios * dias * custoPorDia;
    document.getElementById("resultado3").innerText = `Custo mensal: R$ ${custoTotal.toFixed(2)}`;
}

