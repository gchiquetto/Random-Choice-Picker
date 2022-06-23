const textArea = document.querySelector('textarea');
const choiceBox = document.querySelector('.choices_box');
let choices = [];

textArea.addEventListener('input', () => {
    choices = textArea.value.split(',');
    console.log(choices);
    if (choices.length > 1){
        choices.forEach(choice => {  
            console.log(choices);          
            if (choice !== '') {
                const choiceBoxItem = document.createElement('div');
                choiceBoxItem.classList.add('choices_box-item');
                choiceBox.appendChild(choiceBoxItem);
                choiceBoxItem.textContent = choice;
                   
            }
             
            
        });
    }
    else{
        console.log(choices[choices.length-1]);
    }
    
    //console.log(choices);
});