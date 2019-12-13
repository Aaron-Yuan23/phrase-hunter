class Game{
    constructor(){
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = [
            new Phrase("Miss the boat"),
            new Phrase("Once in a blue moon"),
            new Phrase("Beat around the bush"),
            new Phrase("Back to the drawing board"),
            new Phrase("Break a leg"),

        ];
    }
    startGame(){

    }

    getRandomPhrase(){
        const num = Math.floor(Math.random()*(this.phrases.length + 1));
        return this.phrases[num].phrase;
    }

    handleInteraction(){
        
    }

    removeLife(){
        const selectedLi = document.getElementsByClassName("tries").selectedIndex = "missed";
        selectedLi.src = "../images/lostHeart.png";
        missed++;

        if(missed === 5){
           gameOver();
        }
    }

    checkForWin(){
        let hiddenLis = document.querySelectorAll(".hide");
        if(hiddenLis.length === 0){
            return true;
        }
    }
}