console.log("Tic Tac Toe!")

let turn="x"
let game_over = false

const changeTurn = () =>{
    return turn === "x"? "o" : "x"
} 

const Winner = ()=>{
    let boxtextin = document.getElementsByClassName("boxtext")
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e =>{
        if((boxtextin[e[0]].innerText === boxtextin[e[1]].innerText) && (boxtextin[e[2]].innerText === boxtextin[e[1]].innerText) && (boxtextin[e[0]].innerText !=="")){
            document.querySelector('.innerinfo').innerText= boxtextin[e[0]].innerText + " is winner!"
            game_over=true
        }
    
})
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector(".boxtext")
    element.addEventListener('click', () =>{
        if( boxtext.innerText === ''){
            boxtext.innerText= turn
            turn=changeTurn()
            Winner()
            if(!game_over){
                document.getElementsByClassName("innerinfo")[0].innerText = turn + " will play" 
            }
            
        }})
})

replay.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    })

    turn='x'
    game_over=false
    document.getElementsByClassName("innerinfo")[0].innerText = turn + " will play" 
    
})