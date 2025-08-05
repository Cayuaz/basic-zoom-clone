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


//Cria uma nodeList com todos os elementos que tiverem a classe cards
const cards = document.querySelectorAll('.cards')

//Função que verifica cada mudança dos elementos cards
//entries representa a mudança e entry é cada mudança
function checkVisibleCard(entries, observer) {
    entries.forEach(entry => {

        //Entry target representa os próprios cards e ratio é a propriedade de visibilidade dos cards
        //Ou seja a a opacidade dos cards é igual ao nível de visibilidade deles
        entry.target.style.opacity = entry.intersectionRatio;

        //Se o elemento estiver visível na tela ele adiciona a classe grow-effect
        if(entry.isIntersecting) {
            entry.target.classList.add('grow-effect')
        //Do contrário ele remove, ou seja só aplica se ele estiver visível mesmo que seja pouco
        } else {
            entry.target.classList.remove('grow-effect')
        }
    });
}

//Configurações do observer
const observerOptions = {

    //Root é representa o local que o observer vai observar
    //Como ele não está definido, o valor padrão é toda a tela
    root: null, 

    //Threshold representa o quanto os itens estão visíveis
    //Ou o que o observer vai considerar como visível
    //Aqui ele conta tudo para escalar com a opacidade
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
}

//Criação da função com o observer que chama a função checkVisibleCard quando uma mudança acontece
const observer = new IntersectionObserver(checkVisibleCard, observerOptions)

//Aqui o forEach começa a percorrer cada card e de fato observá-los
cards.forEach(card => {
    observer.observe(card)
});