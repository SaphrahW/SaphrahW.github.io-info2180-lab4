window.addEventListener('DOMContentLoaded', (event) => {
    console.log('loaded');
    layout() //exercise 1
});



//layout
const layout = () =>{
    let box = document.querySelector("#board");
    let squares = box.querySelectorAll("div");
    console.log(squares.length);
    for (let i = 0; i < squares.length; ++i) {        
        squares[i].classList.add("square");
      }
      
      console.log('out of loop');
}