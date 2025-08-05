//Cria uma variável com o link Workplace
const workplace = document.getElementById('workplace');
//Cria uma variável com o container do elemento Workplace
const workplaceContainer = document.getElementById('workplace-container')

//Sempre que o ponteiro do mouse entrar no link ele adiciona a seta
function enter (word, container) {

    word.addEventListener('mouseenter', () => {

        //Verifica se já não existe um elemento com a classe arrow para não criar mais de um
        const existingArrow = container.querySelector('.arrow') 

        //Se não existir, ele cria um span com a seta e adiciona uma classe nela
         if (!existingArrow) {
            const arrow =  document.createElement('span');
    
            arrow.textContent = '>';
            arrow.classList.add('arrow');
            container.appendChild(arrow)
        }
    })    
}

//Sempre que o ponteiro sair ele remove a seta adicionada
function exit (word, container) {

    word.addEventListener(('mouseleave'), () => {

    //Cria uma variável com o elemento que tem a classe arrow
    const arrow = container.querySelector('.arrow');

    //Se ele existir, é removido do DOM
    if(arrow) {
        arrow.remove();
    }
    })
}

//Envia como parâmetro para as funções enter e exit a variável workplace e o seu container
enter(workplace, workplaceContainer)
exit(workplace, workplaceContainer)

const cards = document.querySelectorAll('.cards')

function checkVisibleCard(entries, observer) {
    entries.forEach(entry => {

        entry.target.style.opacity = entry.intersectionRatio;

        if(entry.isIntersecting) {
            entry.target.classList.add('grow-effect')
        } else {
            entry.target.classList.remove('grow-effect')
        }
    });
}

const observerOptions = {
    root: null, 
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
}

const observer = new IntersectionObserver(checkVisibleCard, observerOptions)

cards.forEach(card => {
    observer.observe(card)
});