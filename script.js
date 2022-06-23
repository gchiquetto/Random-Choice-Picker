const textArea = document.querySelector('textarea');
const choiceBox = document.querySelector('.choices_box');
let choices = [];

textArea.focus();

textArea.addEventListener('keyup', e => {
    createChoiceBox(e.target.value);

    if (e.key === 'Enter'){
        textArea.value = '';
        animateRandom();
    }
         
});

function createChoiceBox(input){
    choices = input.split(',')
    .filter(choice => choice.trim() !== '')
    .map(choice => choice.trim());

    choiceBox.innerHTML = '';

    choices.forEach(choice => {              
        const choiceBoxItem = document.createElement('span');
        choiceBoxItem.classList.add('choices_box-item');
        choiceBox.appendChild(choiceBoxItem);
        choiceBoxItem.textContent = choice;
    });
}

function chooseRandomItem(){
    const choices = document.querySelectorAll('.choices_box-item');
    return choices[Math.floor(Math.random()*choices.length)];
}

function highlightItem(item){
    item.classList.add('highlited');
}

function unHighlightItem(item){
    item.classList.remove('highlited');
}

function animateRandom(){
    const interval = setInterval(() => {
        const randomItem = chooseRandomItem();
        highlightItem(randomItem);

        setTimeout(()=>{
            unHighlightItem(randomItem);
        },100);
    }, 100);

    setTimeout(() =>{
        clearInterval(interval);

        setTimeout(()=>{
            const randomItem = chooseRandomItem();
            highlightItem(randomItem);
        }, 100)
    }, 2000);
}