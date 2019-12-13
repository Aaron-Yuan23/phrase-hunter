class Phrase{

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay(){
        const phraseLetters = [...this.phrase];
        const ul = document.querySelector("#phrase ul");
        phraseLetters.forEach(phraseLetter => {
            const li = document.createElement("li");
            li.innerHTML= phraseLetter;
            if(li.innerHtml != ""){
                li.className +=`hide letter ${phraseLetter}`;
            }
            else{
                li.className +="space";
            }
            
            ul.appendChild(li);
        });
    }

    checkLetter(char){
        const phraseLis = document.querySelector("#phrase li");
        phraseLis.forEach(li =>{
            if(char === li.textContent()){
                return true;
            }
            else return false;
        });
   } 
}

    showMatchedLetter(char){
        const phraseLis = document.querySelector("#phrase li");
        phraseLis.forEach(li =>{
            if(char===li.textContent){
                li.className += "show";
                li.className -= "hide";
            }
        });
    }