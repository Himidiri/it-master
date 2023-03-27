function result () {
    var score = 0;
    var wro = 0;
    var out = document.getElementById('score');

    if (document.getElementById("correct1").checked)
    {
        score = score+2;
        document.getElementById("1stQ").style.height = "50px";
        document.getElementById("1stQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("1stQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("1stQ").style.height = "50px";
        document.getElementById("1stQAnswer").innerHTML = "Correct answer is (B) Bookmark";
        document.getElementById("1stQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct2").checked)
    {
        score = score+2;
        document.getElementById("2ndQ").style.height = "50px";
        document.getElementById("2ndQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("2ndQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("2ndQ").style.height = "50px";
        document.getElementById("2ndQAnswer").innerHTML = "Correct answer is (B) .doc";
        document.getElementById("2ndQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct3").checked)
    {
        score = score+2;
        document.getElementById("3rdQ").style.height = "50px";
        document.getElementById("3rdQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("3rdQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("3rdQ").style.height = "50px";
        document.getElementById("3rdQAnswer").innerHTML = "Correct answer is (B) Word processing";
        document.getElementById("3rdQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct4").checked)
    {
        score = score+2;
        document.getElementById("4thQ").style.height = "50px";
        document.getElementById("4thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("4thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("4thQ").style.height = "50px";
        document.getElementById("4thQAnswer").innerHTML = "Correct answer is (A). = SUM (B3:B9)";
        document.getElementById("4thQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct5").checked)
    {
        score = score+2;
        document.getElementById("5thQ").style.height = "50px";
        document.getElementById("5thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("5thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("5thQ").style.height = "50px";
        document.getElementById("5thQAnswer").innerHTML = "Correct answer is (B). AVG";
        document.getElementById("5thQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct6").checked)
    {
        score = score+2;
        document.getElementById("6thQ").style.height = "50px";
        document.getElementById("6thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("6thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("6thQ").style.height = "50px";
        document.getElementById("6thQAnswer").innerHTML = "Correct answer is (C). IF";
        document.getElementById("6thQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct7").checked)
    {
        score = score+2;
        document.getElementById("7thQ").style.height = "50px";
        document.getElementById("7thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("7thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("7thQ").style.height = "50px";
        document.getElementById("7thQAnswer").innerHTML = "Correct answer is (A). Pie Chart";
        document.getElementById("7thQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct8").checked)
    {
        score = score+2;
        document.getElementById("8thQ").style.height = "50px";
        document.getElementById("8thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("8thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("8thQ").style.height = "50px";
        document.getElementById("8thQAnswer").innerHTML = "Correct answer is (A). Font face";
        document.getElementById("8thQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct9").checked)
    {
        score = score+2;
        document.getElementById("9thQ").style.height = "50px";
        document.getElementById("9thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("9thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("9thQ").style.height = "50px";
        document.getElementById("9thQAnswer").innerHTML = "Correct answer is (A). Title slide";
        document.getElementById("9thQAnswer").style.color = "Red";
    }

    if (document.getElementById ("correct10").checked)
    {
        score = score+2;
        document.getElementById("10thQ").style.height = "50px";
        document.getElementById("10thQAnswer").innerHTML = "Your answer is correct";
        document.getElementById("10thQAnswer").style.color = "green";
    }
    else 
    {
        wro++;
        document.getElementById("10thQ").style.height = "50px";
        document.getElementById("10thQAnswer").innerHTML = "Correct answer is (A). Scan a virus";
        document.getElementById("10thQAnswer").style.color = "Red";
    }

    var ans=score-wro;
    if(ans<0)
    {
        document.getElementById("marks").innerHTML = "Your Marks: 0";
    }
    else
    {
        document.getElementById("marks").innerHTML = ("Your Marks :" +ans);
    }
    
    document.getElementById("tuk").innerHTML = ("Wrong Answers :" +wro);

    if(ans>8){
        document.getElementById("qzz").style.backgroundColor = "#1f7a1f"; 
    }
    else
    {
        document.getElementById("qzz").style.backgroundColor = "#b30000"; 
    }
}
    
function openqz(){
    document.getElementById('qzz').style.display ="block";
}
var counter = 60;

function qzz(){
        
    setInterval( function(){

        counter--;

        if(counter> 0){
            id = document.getElementById("count");
            id.innerHTML = counter;   
        }
        
        else if(counter == 0){
            alert('sorry, out of time');
            clearInterval(counter);
        } 

        },1000);
    }

    
function startQuizFunction() {
    var x = document.getElementById("startQuiz");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function stopCounter()
{
    var time=60-counter;
    document.getElementById("count").innerHTML="";
    document.getElementById("timeRemaning").innerHTML=("You have submitted on "+time+" seconds");
    counter=0;
}

function hideSubmitButton()
{
    document.getElementById("submitbutton").style.display="none";
}


    