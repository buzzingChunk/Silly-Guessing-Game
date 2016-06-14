var evaluateNum = function(){
    
    var chosenNum = document.getElementById("inputField").value;
    
    if(chosenNum == "")
    {
        document.getElementById("answerOutput").innerHTML = "you need to guess a number, silly bitch!";
        document.getElementById("answer").innerHTML = "Fucking Idiot!!!";
    }
    else if(chosenNum > 10)
    { 
        document.getElementById("answerOutput").innerHTML = "your number is bigger than 10, ASSHOLE!";
        document.getElementById("guess").innerHTML = chosenNum;
        document.getElementById("answer").innerHTML = "Fuck you!";
    }
    else if(chosenNum < 1)
    {
        document.getElementById("answerOutput").innerHTML = "your number is less than 1, FUCK YOU";
        document.getElementById("guess").innerHTML = chosenNum;
        document.getElementById("answer").innerHTML = "You're an Asshole!";
    }
        
    else
    {
        var randomNum = (Math.round((Math.random()*10)+1));

        if (chosenNum == randomNum)
        {
            document.getElementById("answerOutput").innerHTML = "You have guess the number!";
            document.getElementById("guess").innerHTML = chosenNum;
            document.getElementById("answer").innerHTML = randomNum;

        }
        
        else
        {
            document.getElementById("answerOutput").innerHTML = "You have not guessed the number :(";
            document.getElementById("guess").innerHTML = chosenNum;
            document.getElementById("answer").innerHTML = randomNum;
        }
    } 
}