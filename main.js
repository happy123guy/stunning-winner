function login(){
    player1 = document.getElementById("input1").value;
    player2 = document.getElementById("input2").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "charvik.html";
}