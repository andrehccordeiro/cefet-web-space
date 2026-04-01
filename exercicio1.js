// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
const constante = 6.67e-11
let massa1 = document.querySelector("#massa1");
let massa2 = document.querySelector("#massa2");
let distancia = document.querySelector("#distancia");
let resultado = document.querySelector("#resultado");
let botao = document.querySelector("#calcular")


botao.addEventListener('click', () => {
    let m1 = parseFloat(massa1.value);
    let m2 = parseFloat(massa2.value);
    let d = parseFloat(distancia.value);
    let total = (constante*m1*m2)/(d**2)
    resultado.value = total;
})