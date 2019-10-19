window.addEventListener('DOMContentLoaded', (event) => {
    layout() //exercise 1
});



//layout
const layout = () =>{
    let box = document.querySelector("#board");
    let squares = box.querySelectorAll("div");

    for (let i = 0; i < squares.length; ++i) {        
        squares[i].classList.add("square");
      }

}