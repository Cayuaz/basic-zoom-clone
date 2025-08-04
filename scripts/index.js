const workplace = document.getElementById('workplace');
const workplaceContainer = document.getElementById('workplace-container')

function enter (word, container) {

    word.addEventListener('mouseenter', () => {

        const existingArrow = container.querySelector('.arrow') 

         if (!existingArrow) {
            const arrow =  document.createElement('span');
    
            arrow.textContent = '>';
            arrow.classList.add('arrow');
            container.appendChild(arrow)
        }
    })    
}


function exit (word, container) {

    word.addEventListener(('mouseleave'), () => {

    const arrow = container.querySelector('.arrow');

    if(arrow) {
        arrow.remove();
    }
    })
}

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