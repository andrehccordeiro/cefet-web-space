// Faça o exercício dos PARÁGRAFOS aqui
let listaBotoesEl = document.querySelectorAll('.botao-expandir-retrair')


for(let botaoEl of listaBotoesEl){
    botaoEl.addEventListener('click', (e) => {
        let botaoEl = e.currentTarget;
        let paragrafoEl = botaoEl.parentNode;
        paragrafoEl.classList.toggle('expandido');   
        
        if(paragrafoEl.classList.contains('expandido')){
            botaoEl.innerHTML = '-';
        }else{
            botaoEl.innerHTML = '+';
        }
    
    })

}
