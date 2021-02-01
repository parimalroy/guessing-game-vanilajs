/**
 1.select element
 2. Event Listener
 3.validation
 4.create element
 5push into output and progressbar
 */

 /*select element*/
 const takeDigit = document.querySelector('#take-digit');
 const guessBtn = document.querySelector('#guess-btn');
 const resultList = document.querySelector('#result-list');

// trigger with enter and button
takeDigit.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        guessBtn.click();
    }
} );


// work with button
function handleBtn(){
    const digit =parseInt(takeDigit.value);
    if(digit >= 0 && digit <= 9){
        console.log("Right");
    }
    else{
        alert('SomeThing wrong!!');
    }
}