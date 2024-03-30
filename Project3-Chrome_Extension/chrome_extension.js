

// button clicked from addEventListener  //then you dont have to write a function and evoke it in the html page

let myLeads=[]
let inputEl=document.getElementById("input-el") // const value is fixed and cannot be reassigned
const SaveInput=document.getElementById("save-btn")
const listEl=document.getElementById("list-el")
const deletebtn=document.getElementById("delete-btn")
const saveTab=document.getElementById("save-tab")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


/*
saveTab.addEventListener("click",function(){
    //grab the url of the current tab
    chrome.tabs.query({active:true,cuurrentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })

   
})

*/
function render(leads){
     
    let listItems=""
    for (let i=0;i<leads.length;i++){
        //target=_blank :- to open the link in new tab
        //listItems+="<li><a target='_blank' href='#'>" + myLeads[i] +"</a></li>"
        //Template strings
        listItems += `
         <li>
            <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
            </a>
         </li>

        `
    }
    //innerHtML 
       
        //cretae element
        //set text for content
        //append to ul
        /*
        const li=document.createElement("li")
        li.textContent=myLeads[i]
        listEl.append(li)
        */
       //printing thr url list out of the loop or it will also loop through
    listEl.innerHTML=listItems
}

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)

})

   
SaveInput.addEventListener("click",function(){
    //push the value from the input field
    //document.getElementbyId("id_name").value
    myLeads.push(inputEl.value)
    //clear out the input field
    inputEl.value= ""
    //save the myleads array to the local storage
    localStorage.setItem("myLeads",JSON.stringify(myLeads))  //to convert it into string (stringify)
    render(myLeads)
     
})



//Template Strings Practice questions
const receipient="fousiya"
const sender="fayiza"

//const email="Hey" + receipient + "!How is it going? Cheers Per"

const email=`
            Hey ${receipient}!
                How is it going? 
            Cheers ${sender}
        `
console.log(email) 



//practice que. for innerHTML
//setting a buy button  in the js code and rendering it into the html page using innerHTML
/*
let buyButton=document.getElementById("container")
buyButton.innerHTML="<button onclick='buy()'>BUY</button>"

function buy(){
    buyButton.innerHTML+="Thankyou for buying"
}
*/

//addEventListener practice challenges
/*
let boxClicked=document.getElementById("box")

boxClicked.addEventListener("click",function(){
     console.log("I want to open the box")

})
*/

//FUNCTIONS WITH PARAMETERS

function sum(a,b){     //PARAMETERS   //DEFINED IN THE FUNCTIONS
    return a+b
}

console.log(sum(3,4))   //ARGUMENTS  //WHEN CALLING THE FUNCTION
console.log(sum(9,102))

//ARRAYS ARE PARAMETERS
function getFirst(arr){
    console.log(arr)
}


getFirst([1,2])



//Lesson 1  :- let and const

const player="per"
const opponent="Nick"
const game="AmazingFighter"
let points=0
let hasWon=false



points+=100
hasWon=true

if(hasWon){
    console.log(`${player} got ${points} points and won the ${game} game`)
}else{
    console.log(`The Winner is ${opponent} ! ${player} lost the game`)
}

//Lesson 2:- passing array as an argument

let myCourses=["Learn CSS Animations","UI Design Fundamentals","Intro to Clean Code"]

function courses(arr){
    for (let i=0;i<arr.length;i++){
        console.log(arr[i])
    }

}

courses(myCourses)


//lesson 3 :-local storage

/*
localStorage.setItem("myCredits")
localStorage.getItem("myCredits")

*/


//lesson 4:-Sentence Generator


function GenerateSentence(description,array){
    let baseString=`the ${array.length} ${description} are `
    const lastIndex=array.length-1
    for (let i=0;i<array.length;i++){
        if(i===lastIndex){
            baseString+=array[i]
        }else{
            baseString+=array[i] + ","
        }
    }
    console.log(baseString)


}

GenerateSentence("beautiful fruits",["apple","orange"])