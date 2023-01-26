var card = document.getElementById('card');
var cardScores = document.getElementById('scoreboard');
var cardBtn = document.getElementById('reset');
var storedUsers = JSON.parse(localStorage.getItem("optionsArr"));

function renderUsers() {
    for (var i = 0; i < storedUsers.length; i++) {
        var potatoe = JSON.parse(localStorage.getItem("optionsArr"));

        if (potatoe[i] !== null) {
            var li = document.createElement("li");
            li.setAttribute("style", "padding:5px; color:black");
            li.textContent = "User: " + potatoe[i].userIntls + " | " + " Time: " + potatoe[i].saveTime
            console.log(potatoe[i].userIntls)
        }
        cardScores.appendChild(li);
    }
};

if (storedUsers !== null) {
    renderUsers();
};

function reset() {
    localStorage.clear();
    cardScores.textContent = " ";
};

cardBtn.addEventListener("click", reset)

