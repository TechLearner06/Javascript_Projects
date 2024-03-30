
//project 2 : Card Game


let cardsArray=0
let sum=0
let hasBlackJack = false
let isAlive=false
message=""

//let messageEl=document.getElementById("message")
let messageEl=document.querySelector("#message")

let cards=document.querySelector("#cards-el")

let result=document.querySelector("#sum-el")


function getRandomNumber(){

    randomno=Math.floor(Math.random() * 13)+1
    if (randomno>10){
        return 10
    } else if (randomno===1){
        return 11
    } else{
        return randomno
    }

}

    


function startGame(){
    isAlive=true
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    cardsArray=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cards.textContent="Cards:"
    for (let i=0;i<cardsArray.length;i++){
        cards.textContent+=cardsArray[i] + " "

    }

    result.textContent="sum:" + sum

    if (sum <= 20){
        messageEl.textContent="do you want to draw a new card?"
    } else if (sum === 21){
        messageEl.textContent="You have got black jack"
        hasBlackJack= true
    } else {
        messageEl.textContent="you are out of the game"
        isAlive = false
    } 
}

//only trigger newCard if you are allowed to

function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let card=getRandomNumber()
        sum= sum + card
        cardsArray.push(card)
        renderGame()
    }
    
}




