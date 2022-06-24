let container = document.getElementById("container");

function swapActiveButtonClass(){
    let buttons = document.getElementsByClassName("nav-item");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}
swapActiveButtonClass();

function changeCardStyle(){
    let cards = document.getElementsByClassName("card");
    for(let i = 0; i < cards.length; i++){
        cards[i].style.gridColumn = "";
    }
}

function clickLayout1(){
    container.style.gridTemplateColumns = "auto";
    container.style.gridTemplateRows = "150px 150px 150px 150px 150px";
    changeCardStyle();
}

function clickLayout2() {
    container.style.gridTemplateColumns = "auto auto auto";
    container.style.gridTemplateRows = "300px 300px";
    changeCardStyle();
}

function clickLayout3(){
    container.style.gridTemplateColumns = "repeat(12, 1fr)";
    container.style.gridTemplateRows = "120px 420px 120px";
    document.getElementById("card1").style.gridColumn = "1/-1";
    document.getElementById("card2").style.gridColumn = "1/3";
    document.getElementById("card3").style.gridColumn = "3/11";
    document.getElementById("card4").style.gridColumn = "11/-1";
    document.getElementById("card5").style.gridColumn = "1/-1";
}