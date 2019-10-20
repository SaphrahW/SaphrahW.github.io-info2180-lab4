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
                        console.log(xlist);
                        p = player;
                    }
                    
                    player=1;
                }else{
                    if(!squares[i].classList.contains("X")){
                            squares[i].classList.add("O");
                            squares[i].innerHTML= "O";
                            olist+= squares[i].getAttribute("id");
                            console.log(olist);
                            console.log(p);
                            p = player;
                            console.log(p);
                    } 
                    player=0;              
                }

            }
            if (olist.length>=3 || xlist.length>=3){
                console.log("I'm in this if");
                console.log(p,olist,xlist);
                checkWinner(p,olist,xlist);
                console.log("player sending ",p);
            }
        })
    }
}

const checkWinner =(player,xlist,olist) => {
    const win_combos = ['123','456','789','147','258','369','159','357'];
    let val = false;
    if (player==0){
        console.log("checkWinner player X")
        for (let i=0;i<8;i++){
            console.log("win_combos");
            console.log(win_combos[i]);
            val= searchCombos(xlist,win_combos[i]);
            if (val) break;
        }
    }else{
        if (player==1){
            console.log("checkWinner player O")
            for (let i=0;i<8;i++){
                val= searchCombos(olist,win_combos[i]);
                if (val) break;
            }
        }
    }
    /**}else{
        if (xlist.length+olist.length== 9){
            // no winner, restart
    }*/

    if(val){
        announceWinner(player);
    }
}


function searchCombos(id_str,win_string){
    console.log("I'm in searchCombos. id string, win string, res");
    let common = false;
    i =0;
    while(!common){
        console.log(win_string[i]);
        common = id_str.includes(win_string.charAt(i));
        i++;
    }
    if (common){
        var ar1 = id_str.split('').sort();
        console.log(ar1);
        var ar2 = win_string.split('').sort();
        console.log(ar2);
        res = ar1.filter(f => !ar2.includes(f));
        console.log(res);
        return res.length==0;
    }
    return false;
}

function announceWinner(player){
    if (player ==0) player = 'X';
    if (player ==1) player = 'O';
    let disp = document.getElementById("status");
    disp.classList.add("you-won");
    disp.innerHTML = ("Congratulations! " +player+ " is the Winner!");
}

