function calcularHorasExtras() {
    let salario = parseFloat(document.getElementById("salario").value);
    let horasNormais = parseFloat(document.getElementById("horasNormais").value);
    let horasFinaisSemana = parseFloat(document.getElementById("horasFinaisSemana").value);
    
    let valorHora = salario / 200;
    let total = (horasNormais * valorHora) + (horasFinaisSemana * valorHora * 1.5);
    
    document.getElementById("resultado1").innerText = `Total a receber: R$ ${total.toFixed(2)}`;
}

 