
// Set info from h3 element
var info = document.getElementById("info"),
// Select all tds in grid and call them boxes
boxes = document.querySelectorAll("#grid td"), X_or_O = 0;

// Check for game winner
function checkWinner() {
let box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");
    
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
      highlightWin(box1, box2, box3);
    
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    highlightWin(box4, box5, box6);
    
    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    highlightWin(box7, box8, box9);
    
    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    highlightWin(box1, box4, box7);
    
    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    highlightWin(box2, box5, box8);
    
    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    highlightWin(box3, box6, box9);
    
    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    highlightWin(box1, box5, box9);
    
    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    highlightWin(box3, box5, box7);

// Determine draw
    if (box1.childNodes.length !== 0 && box2.childNodes.length !== 0 && box3.childNodes.length !== 0 &&
        box4.childNodes.length !== 0 && box5.childNodes.length !== 0 && box6.childNodes.length !== 0 &&
        box7.childNodes.length !== 0 && box8.childNodes.length !== 0 && box9.childNodes.length !== 0)
        draw();
    }

// In result of a draw
    function draw() {
        info.innerHTML = "It's a draw";
        $('#info').attr('class', 'alert alert-primary');
    }
    
// Change color and announce winner of game
    function highlightWin(a, b, c) {
        a.classList.add('winner');
        b.classList.add('winner');
        c.classList.add('winner');
        info.innerHTML = a.innerHTML + " is the winner!";
        $('#info').attr('class', 'alert alert-primary');
        }

// Add X or O in grid box when clicked, alternating
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function () {
          if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O % 2 === 0) {
              console.log(X_or_O);
              this.innerHTML = "X";
              info.innerHTML = "Player O Turn";
              checkWinner();
              X_or_O += 1;
        
            } else {
              console.log(X_or_O);
              this.innerHTML = "O";
              info.innerHTML = "Player X Turn";
              checkWinner();
              X_or_O += 1;
            };
           };
          };
        }

// Start over button
        document.getElementById('button').addEventListener('click', again);

        function again() {
        for (var i = 0; i < boxes.length; i++) {
          boxes[i].classList.remove("winner");
          boxes[i].innerHTML = "";
          info.innerHTML = "Player X Start";
          $('#info').attr('class', ' ');
         };
        }