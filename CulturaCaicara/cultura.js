 // script para a tela ficar em um tamanho agradável no navegador mobile
    window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//script para o menu aparecer
const container = document.querySelector('.containerH');
const ul =document.querySelector('.list');

container.addEventListener("click", ()=>{

container.classList.toggle('active');
ul.classList.toggle('show');})



 //script para o botão do início
const botaoInicio = document.querySelector('#BtnInicio');
botaoInicio.addEventListener('click', ()=>{
    window.scroll({
        top: window.innerHeight, behavior:"smooth"
    })
} )

 //botão de voltar para o topo
const botaoVoltar = document.querySelector('.ButtonUp');
botaoVoltar.addEventListener('click', ()=>{
    window.scroll({
        top: 0, behavior:"smooth"
    })
})

//script para a página de cultura
const AzulMarinho = document.querySelector('#AzulMarinho');
const Caldeirada = document.querySelector('#Caldeirada');
const PeixeAssado = document.querySelector('#PeixeAssado');
const fecharReceita = document.querySelectorAll('.fecharReceita');
const receitas = document.querySelectorAll('.receitas');
const fecharTres = document.querySelector('#fecharTres');
const receitaUm = document.querySelector('#receitaUm');
const receitaDois = document.querySelector('#receitaDois');
const receitaTres = document.querySelector('#receitaTres');

PeixeAssado.addEventListener("click", ()=>{
    receitaUm.classList.remove('receitasAtivo');
    receitaDois.classList.remove('receitasAtivo');
    receitaTres.classList.add("receitasAtivo");    
})
fecharTres.addEventListener("click", ()=>{
    receitaTres.classList.remove("receitasAtivo");    
})

Caldeirada.addEventListener("click", ()=>{
    receitaUm.classList.remove('receitasAtivo');
    receitaTres.classList.remove('receitasAtivo');
    receitaDois.classList.add("receitasAtivo");    
})
AzulMarinho.addEventListener("click", ()=>{
    receitaDois.classList.remove('receitasAtivo');
    receitaTres.classList.remove('receitasAtivo');
    receitaUm.classList.add("receitasAtivo");    
})


fecharReceita.forEach(botao => {
    botao.addEventListener("click", ()=>{
        console.log(botao.id);
            receitas.forEach(receita => {
                receita.classList.remove('receitasAtivo');
                console.log(receita.id);

            });
        })
    });



//script para a parte das festivdades
const iconF = document.querySelector('.iconF');
const iconG = document.querySelector('.iconG');
const iconC = document.querySelector('.iconC');
const fan = document.querySelector('.fandango');
const sao = document.querySelector('.saoGoncalo');
const san = document.querySelector('.santacruz');

iconF.addEventListener("click", ()=>{
    fan.classList.add("FAtivo");    
    sao.classList.remove('FAtivo');
    san.classList.remove('FAtivo');
})
iconG.addEventListener("click", ()=>{
    sao.classList.add("FAtivo");    
    fan.classList.remove('FAtivo');
    san.classList.remove('FAtivo');
})
iconC.addEventListener("click", ()=>{
    san.classList.add("FAtivo");    
    fan.classList.remove('FAtivo');
    sao.classList.remove('FAtivo');
})