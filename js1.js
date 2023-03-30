document.querySelector("#calcular").addEventListener("click", function(){
    let ValorA = document.querySelector("#ValorA").value;
    let ValorB = document.querySelector("#ValorB").value;
    if (ValorA.length > 0 && ValorB.length > 0){
        alert(parseInt(ValorA) + parseInt(ValorB));
    }
    else {
        alert("Digite um valor válido para efetuarmos o calculo.")
    
    }
})