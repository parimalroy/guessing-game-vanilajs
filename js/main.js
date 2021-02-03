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
 const correctScore = document.querySelector('#correctScore');
 const wrongScore = document.querySelector('#wrongScore');
 const correctProgress = document.querySelector('#correct-progress')
 const wrongProgress = document.querySelector('#wrong-progress')
 const image = document.querySelector('#image');
 

// trigger with enter and button

let count = 0;
let correct =0;
let wrong = 0;
let progressWidth = 0;
takeDigit.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        guessBtn.click();

    }
} );

function handleBtn(){
    
        count++;

        let guessDigit = parseInt(takeDigit.value);
        let randomNumber = Math.floor(Math.random() * 9) + 1;

        
        let listItem = document.createElement('li');
        listItem.classList = 'list-group-item';
        
        if(guessDigit<=9 && guessDigit>=0 && guessDigit !== ''){
            
            if(count>5){
                
                takeDigit.setAttribute('readonly',null)
            }
            else{
                 if(guessDigit === randomNumber){
                     correct++;
                     listItem.style.listStyle = 'none';
                     listItem.style.border='solid 1px #17A2B8'
                     listItem.style.color='#17A2B8'
                     listItem.classList = 'text-center mt-2';
                     correctProgress.innerHTML = correct * 20 +'% Correct';
                     correctProgress.style.width = correct * 20;
                     listItem.innerHTML = 'Wow great!!'
                     correctScore.innerHTML = correct;
                 }
                 else{
                     wrong++;
                     listItem.style.listStyle = 'none',
                     listItem.style.border='solid 1px #C82333'
                     listItem.style.color='#C82333';
                     listItem.classList ='text-center mt-2';
                     wrongProgress.innerHTML = wrong * 20 +'% Wrong';
                     wrongProgress.style.width = (20 / 100) * wrong ;
                     
                    listItem.innerHTML = 'Sorry!! Wrong Digit. It Was '+randomNumber;
                    wrongScore.innerHTML=wrong;
                 }

                 if(wrong===3){
                     image.setAttribute('src','image/cry.gif')
                 }
            }
            if(count===5){
                takeDigit.setAttribute('readonly',null)
                takeDigit.style.backgroundColor='#17A2B8';
                alert('Game Over');
            }

            resultList.appendChild(listItem);


        }
        else{
            alert('something wrong')
        }

        takeDigit.value = '';
}

//for trigger with button
// guessBtn.addEventListener('click',(event)=>{
    
//     let guessDigit = parseInt(takeDigit.value);
//     if(guessDigit<=9 && guessDigit>=0 && guessDigit !== ''){
//         guessNumber();
//     }
//     else{
//         alert('something wrong')
//     }
// })
//work with function

// function validation(){
//     let guessDigit = parseInt(takeDigit.value);
//     if(guessDigit<=9 && guessDigit>=0 && guessDigit !== ''){
//         guessNumber();
//     }
//     else{
//         alert('something wrong')
//     }
// }


// function guessNumber(){
//     const digit = parseInt(takeDigit.value);
//     let randomNumber = Math.floor(Math.random() * 5) + 1;
//     if(randomNumber === digit){
//         console.log('win')
//     }
//     else{
//         console.log('not match. number was '+ randomNumber);
//     }
//     takeDigit.value = ''
// }