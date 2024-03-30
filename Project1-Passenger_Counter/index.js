//Our Project 
let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el")
let count=0;

function increment(){
    count=count+1;
    countEl.textContent = count;
  
}

function save(){ 
    let entries = count + " - ";
    saveEl.textContent += entries;
    countEl.textContent = 0;
    count=0;

}



//-----------------TUTORIALS---------------------//

// challenge 1
    // variable assigning  and printing in the console
    // doing mathematical operations

    //let myAge = 22;

    //console.log(myAge);
    //let humanDogRatio = 7;

//challenge 2

    // reassigning variables

    //myDogAge=myAge * humanDogRatio;
    //console.log(myDogAge);

    //let bonusPoints= 50;
    //console.log(bonusPoints)

    //bonusPoints = bonusPoints + 50;
    //console.log(bonusPoints)

    //bonusPoints = bonusPoints - 75
    //console.log(bonusPoints)

    //bonusPoints = bonusPoints + 45
    //console.log(bonusPoints)

//challenge 3 - Functions

 //challenge 3.1
    //function number(){
        //console.log(42)

    //}
    //number()



  //challenge 3.2
    //function sumOfLap(lap1,lap2,lap3){
        //Sumoflap=lap1+lap2+lap3;
        //console.log(Sumoflap);
    //}

    //sumOfLap(34,33,36);

  //challenge 3.3

        //let lapsCompleted=0

        //function lapCount(){
            //lapsCompleted = lapsCompleted + 1;
            
        //}

        //lapCount()
        //lapCount()
        //lapCount()

        //console.log(lapsCompleted)

// challenge 4 - String

    //challenge 4.1
    
    //let username="fayiza"

    //let message= "You have three new notifications";
    //let messageToUser=message + "," +username + "!";
    //console.log(messageToUser);

    //challenge 4.2


   
    //console.log(myGreeting);

    //challenge 4.3
    
  

    //let welcomeEl=document.getElementById("welcome-el");
    //let name="fayiza";
    //let greeting="Hi,my name is";
    
    //welcomeEl.innerText = greeting + " " + name;

    //welcomeEl.innerText = welcomeEl.innerText + '🌟';


//challenge 5

let firstName = "Fayiza";
let lastName="K M";

let fullName=firstName + " " + lastName;
console.log(fullName);
    

//challenge 6

let name="Fayiza";
let greeting="Hi There";

function myGreeting(){
    mygreeting=greeting + "," + " " + name + "!";
    console.log(mygreeting);
}

myGreeting();


//challenge 7

let myPoints = 3;

function add3Points(){
    myPoints+=3;
}


function remove1Point(){
    myPoints-=1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);


//challenge 8




// practice project
//create a function that puts the apple onto appleshelf and oramge onto the orange shelf
let fruit=["apple","orange","apple","apple","orange"]
console.log(fruit)
appleshelf=document.getElementById("apple-shelf")
orangeshelf=document.getElementById("orange-shelf")


function seperateFruits(){
    for (let i=0;i<fruit.length;i++){
        if(fruit[i]==="apple"){
            let applefruits=fruit[i]
            appleshelf.textContent+=applefruits + " "
        }
        else{
            let orangefruits=fruit[i]
            orangeshelf.textContent+=orangefruits + " "
        }
    }
    
}


seperateFruits()

 








