
//direita pra esquerda
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}   )
const elements = document.querySelectorAll('.com-bolinha li, button, .alimentacaoEqui, .naoseiUmDois');

elements.forEach( (elements) => myObserver.observe(elements)) 

//esquerda pra direita
const myObserverLeftToRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showEsquerda');
        } else {
            entry.target.classList.remove('showEsquerda');
        }
    });
});

const elementsLeftToRight = document.querySelectorAll('.naosei, .naoseiDoisDois');
elementsLeftToRight.forEach((element) => myObserverLeftToRight.observe(element));

//section habilidades

const observerHabilidades = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showHabilidade');
        } else {
            entry.target.classList.remove('showHabilidade');
        }
    });
});

const elementosHabilidades = document.querySelectorAll('.html, .js, .css');
elementosHabilidades.forEach((habilidade) => observerHabilidades.observe(habilidade));