function imc(e) {
    e.preventDefault();
    console.log("testando");
    const weight = document.getElementById("weight").value

    const height = document.getElementById("height").value

    //imc calculo

    const imc = weight / (height * height);
    const displayresult = document.getElementById("result")
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (imc < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    } else if (imc < 30) {
        classificacao = 'levemente acima do peso.';
    } else if (imc < 35) {
        classificacao = 'com obesidade grau I.';
    } else if (imc < 40) {
        classificacao = 'com obesidade grau II';
    } else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }


    displayresult.innerText = `seu IMC é ${imc.toFixed(2)} e você está ${classificacao}`;

}


