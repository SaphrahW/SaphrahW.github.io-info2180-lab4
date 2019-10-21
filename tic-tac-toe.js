window.addEventListener('DOMContentLoaded', (event) => {
    layout() //exercise 1
    
});
 


//layout
const layout = () =>{
    let box = document.querySelector("#board");
    let squares = box.querySelectorAll("div");

    for (let i = 0; i < squares.length; ++i) {        
        squares[i].classList.add("square"); //exercise 1
        squares[i].setAttribute("id",(i+1)); //to use in checkWinner()        
        
        //exercise 3- Change the style when you move your mouse over a square 
        squares[i].addEventListener('mouseover', ()=>{
            squares[i].classList.add("hover");
        })
        squares[i].addEventListener('mouseout', ()=>{
            squares[i].classList.remove("hover");
        })
      }
    
    game(squares);
    restart(squares);

}

const game =(squares) =>{
    let player= 0;
    let p =0;
    let olist = "";
    let xlist = "";
    for (let i = 0; i < squares.length; ++i) {        
        squares[i].addEventListener('click',()=>{
            if(squares[i].innerHTML==""){
                if(player==0){
                    if(!squares[i].classList.contains("O")){
                        squares[i].classList.add("X");
                        squares[i].innerHTML= "X";
                        xlist+= squares[i].getAttribute("id");
                        p = player;
                    }
                    
                    player=1;
                }else{
                    if(!squares[i].classList.contains("X")){
                            squares[i].classList.add("O");
                            squares[i].innerHTML= "O";
                            olist+= squares[i].getAttribute("id");
                            p = player;
                    } 
                    player=0;              
                }

            }
            if (xlist.length>=3){
                console.log("running check winner");
                checkWinner(p,olist,xlist);
            }
        })
    }
}

const checkWinner =(player,xlist,olist) => {
    const win_combos = ['123','456','789','147','258','369','159','357'];
    let val = false;
    console.log(player);
    if (player==1){
        console.log("checkWinner player X")
        for (let i=0;i<8;i++){
            val= searchCombos(xlist,win_combos[i]);
            if (val) break;
        }
    }else{
        if (player==0){
            console.log("checkWinner player O")
            for (let i=0;i<8;i++){
                val= searchCombos(olist,win_combos[i]);
                if (val) break;
            }
        }
    }
    if(val) announceWinner(player);
}


function searchCombos(id_str,win_string){
    console.log("I'm in searchCombos. id_Array, win_array");
    let winVal=false;
    var id_array = id_str.split('').sort();
    var win_array = win_string.split('').sort();
    console.log(id_array)
    console.log(win_array);

    if ( id_array.some( el=> win_array.includes(el) ) ){ 
        console.log("win and idlist has something in common");
        win_array = win_array.filter(c => !id_array.includes(c));
        console.log("this is win array");
        console.log(win_array);
        if (win_array==0){
            return true;
        }
    }
    return winVal;
}

function announceWinner(player){
    let winner='';
    if (player ==0) winner = 'X';
    if (player ==1) winner = 'O';
    let disp = document.getElementById("status");
    disp.classList.add("you-won");
    disp.innerHTML = ("Congratulations! " +winner+ " is the Winner!");
}

function restart(squares){
    resetBtn= document.querySelector(".btn");
    resetBtn.addEventListener("click",()=>{
        for (let i = 0; i < squares.length; ++i) {        
            squares[i].innerHTML="";
            squares[i].classList=("square"); 
        }
    })
    console.log("rest")}
