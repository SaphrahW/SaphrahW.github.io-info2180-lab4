window.addEventListener('DOMContentLoaded', (event) => {
    layout() //exercise 1
});



//layout
const layout = () =>{
    let box = document.querySelector("#board");
    let squares = box.querySelectorAll("div");

    for (let i = 0; i < squares.length; ++i) {        
        squares[i].classList.add("square");
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
    let player = 0;
    for (let i = 0; i < squares.length; ++i) {        
        squares[i].addEventListener('click',()=>{
            if(squares[i].innerHTML==""){
                if(player==0){
                    if(!squares[i].classList.contains("O")){
                        squares[i].classList.add("X");
                        squares[i].innerHTML= "X";
                    }
                    player=1;
                }else{
                    if(!squares[i].classList.contains("X")){
                            squares[i].classList.add("O");
                            squares[i].innerHTML= "O";
                    } 
                    player=0;                 
                }
            }
        })
      }


}