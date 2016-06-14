        var newLeader = function () {
            var names = new Array(20);
                names[0] = "Nick";
                names[1] = "Ben";
                names[2] = "Alisha";
                names[3] = "Molly";
            var firstRandomNumber = (Math.round((Math.random()*4)+1))
            document.getElementById("answer").innerHTML = ("The correct name is... "
            +names[firstRandomNumber]+"</br>");
        
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
        