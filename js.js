//var informa = confirm("Oque deseja realizar ?")

//console.log(informa);

//alert=("Olá, vamos calcular ?");

//alert=("Por favor, abra o seu console no seu navegador, lembrando que é necessário ser o Google Crhome!");

/*function somar(a, b){
    return a + b;
}*/

//var informa = confirm("Oque deseja realizar ?");
// console.log(informa);

// document.querySelector("#calcular").addEventListener("click", function (){
//     let ValorA = document.querySelector("#ValorA").value;
//     let ValorB = document.querySelector("#ValorB").value;
//     if(ValorA.length >= 0 && ValorB.length >= 0 ){
//     alert(parseInt(ValorA)+ parseInt(ValorB));}
//     else {
//         alert("Digite os valores para conseguir calcular!")
//     }

// });

document.querySelector("#calcular").addEventListener("click", function (){
    let ValorA = document.querySelector("#ValorA").value;
    let ValorB = document.querySelector("#ValorB").value;
    if(ValorA.length > 0 && ValorB.length > 0){
        alert(parseInt(ValorA)+ parseInt(ValorB));
    }
    else{
        alert("Digite os valores para conseguir calcular!")
    }
});