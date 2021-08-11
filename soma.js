function somarValores() {
    
    var n1 = document.getElementById("numberOne").value;
    var n2 = document.getElementById("numberTwo").value;

    result = parseInt(n1) + parseInt(n2)

    var divResultado = document.getElementById("resultado")

    divResultado.append(`O resultado é: ${result}`)
    console.log(result)
}