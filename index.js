
    var randomNumber1 = Math.random();
    randomNumber1*=6;
    finalNumber1 = Math.floor(randomNumber1)+1;

    var randomImage1 = "images/dice"+finalNumber1+".png";

    document.querySelector(".img1").setAttribute("src",randomImage1);


    var randomNumber2 = Math.random();
    randomNumber2*=6;
    finalNumber2 = Math.floor(randomNumber2)+1
    var randomImage2 = "images/dice"+finalNumber2+".png";

    document.querySelector(".img2").setAttribute("src",randomImage2);

    if (finalNumber1 > finalNumber2){
        document.querySelector("h1").innerHTML=("Player 1 Wins!");
    } else if(finalNumber1<finalNumber2) {
        document.querySelector("h1").innerHTML=("Player 2 Wins!");
    } else {
        document.querySelector("h1").innerHTML=("Draw!")
    }