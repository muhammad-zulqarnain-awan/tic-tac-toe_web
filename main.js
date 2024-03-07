let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector(".newgame");

let turnO = true;

let winningpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        };
        box.disabled = true;
        checkwinner();
    });
});


let checkwinner = () => {
    winningpatterns.forEach((pattern) => {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                document.getElementById("winner").innerText = `Congratulations! ${pos1} is the Winner`;
                boxdisabled();
            }
        }
    });
};

let boxdisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let newgame = () => {
    turnO = true;
    document.getElementById("winner").innerText = "";
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

newgamebtn.addEventListener("click", newgame);

