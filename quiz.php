<?php include('server.php'); ?>
<?php if(empty($_SESSION['username'])){
        header('location: login.php');
    }
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css"/>
    <script src="script.js"></script>
</head>
<body>
    
<div id="allintro"> 
<div class = "intro">
    <h1 class= "hed"id="header">Welcome to Mad Minutes Quiz!</h1>
    
    
</div>
<br>
<div class="instruct">
<span class= "direct">Directions:</span>
    <p class="instructtext">Once you hit start you will be given a trig identiity in radians and or degrees. Since you know the value of each identity, all you need to do is press the corresponding buttons. Simple!
        But watch the timer, if it gets to zero the quiz will end and the rest of the questions will be marked as incorrect. Once you finish the quiz you must submit it if you want Mr. Wilson to see your good work.<strong> If you do not hit the "Submit
        results" button at the end of the quiz, no one will see your grade (including Mr. Wilson).</strong> If you do take it more than once your grade will be updated, with the old grade discarded. Try as much as you want and have a good old time!
    </p>
</div>
</div>
<div id = "br">
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</div>

        <div class="text-center" id="begin">
            <input type="submit" onclick="myFunction();updatecountdown();update();" value="Start" class="button"style="border-style:inset;"/>
        </div>
        <input id ="retreat"type="submit" onclick="window.location.href='/index.php'" class="retreat"value="← Retreat" class="button"style="border-style:inset;"/>
        <p style="display:block" id="trig1" class="p"></p>
        <div id="hidden" class="hidden" style="display: none;">
        <!--<input type="submit"onclick="plus()"value="+">-->
        <div class="mine">
        <input class= "button2"type="submit"onclick="minus()"value="−">
        </div>
        <div class="rational">
        <input class= "button2"type="submit"onclick="zero()"value="0">
        <input class= "button2"type="submit"onclick="one()"value="1">
        <input class= "button2"type="submit"onclick="half()"value="1/2">
        <input class= "button2"type="submit"onclick="two()"value="2">
        <input class= "button2"type="submit"onclick="und()"value="undefined">
        </div>
        <div class="weird">
        <input class= "button2"type="submit"onclick="threeoverthree()"value="√3/3">
        <input class= "button2"type="submit"onclick="twothreeoverthree()"value="2√3/3">
        <input class= "button2"type="submit"onclick="squarerootoftwo()"value="√2">
        <input class= "button2"type="submit"onclick="threeovertwo()"value="√3/2">
        <input class= "button2"type="submit"onclick="twoovertwo()"value="√2/2">
        <input class= "button2"type="submit"onclick="squarethree()"value="√3">
        </div>
        
        <div id = "br">
        <br>
        <br>
        </div>
        <input class= "button2"type="submit"onclick="cleer()"value="clear">
        </div>
            
        <div id="qanda" class = "qanda"style ="display:none;" >
            <h1 class="completed">Completed!</h1>
            <p class = "check">Check and <strong>submit</strong> your answers</p>
            <span id = "tabtext" class = "tabtext"></span>
         <table id = "mytable">
             <tr>
                 <th>Question #</th>
                 <th>Question</th>
                 <th>Your Answer</th>
                 <th>Accuracy</th>
                 <th>Correct Answer</th>
             </tr>
            
             <tr>
                 
                 <td>1</td>
                 <td id="q1">Out of time</td>
                 <td id="a1">Out of time</td>
                 <td id="cw1">Out of time</td>
                 <td id = "ca1">Out of time</td>
             </tr>
             <tr>
                 <td>2</td>
                 <td id="q2">Out of time</td>
                 <td id="a2">Out of time</td>
                 <td id="cw2">Out of time</td>
                 <td id = "ca2">Out of time</td>
             </tr>
             <tr>
                 <td>3</td>
                 <td id="q3">Out of time</td>
                 <td id="a3">Out of time</td>
                 <td id="cw3">Out of time</td>
                 <td id = "ca3">Out of time</td>
             </tr>
             <tr>
                 <td>4</td>
                 <td id="q4">Out of time</td>
                 <td id="a4">Out of time</td>
                 <td id="cw4">Out of time</td>
                 <td id = "ca4">Out of time</td>
             </tr>
             <tr>
                 <td>5</td>
                 <td id="q5">Out of time</td>
                 <td id="a5">Out of time</td>
                 <td id="cw5">Out of time</td>
                 <td id = "ca5">Out of time</td>
             </tr>
             <tr>
                 <td>6</td>
                 <td id="q6">Out of time</td>
                 <td id="a6">Out of time</td>
                 <td id="cw6">Out of time</td>
                 <td id = "ca6">Out of time</td>
             </tr>
             <tr>
                 <td>7</td>
                 <td id="q7">Out of time</td>
                 <td id="a7">Out of time</td>
                 <td id="cw7">Out of time</td>
                 <td id = "ca7">Out of time</td>
             </tr>
             <tr>
                 <td>8</td>
                 <td id="q8">Out of time</td>
                 <td id="a8">Out of time</td>
                 <td id="cw8">Out of time</td>
                 <td id = "ca8">Out of time</td>
             </tr>
             <tr>
                 <td>9</td>
                 <td id="q9">Out of time</td>
                 <td id="a9">Out of time</td>
                 <td id="cw9">Out of time</td>
                 <td id = "ca9">Out of time</td>
             </tr>
             <tr>
                 <td>10</td>
                 <td id="q10">Out of time</td>
                 <td id="a10">Out of time</td>
                 <td id="cw10">Out of time</td>
                 <td id = "ca10">Out of time</td>
             </tr>
             <tr>
                 <td>11</td>
                 <td id="q11">Out of time</td>
                 <td id="a11">Out of time</td>
                 <td id="cw11">Out of time</td>
                 <td id = "ca11">Out of time</td>
             </tr>
             <tr>
                 <td>12</td>
                 <td id="q12">Out of time</td>
                 <td id="a12">Out of time</td>
                 <td id="cw12">Out of time</td>
                 <td id = "ca12">Out of time</td>
             </tr>
             <tr>
                 <td>13</td>
                 <td id="q13">Out of time</td>
                 <td id="a13">Out of time</td>
                 <td id="cw13">Out of time</td>
                 <td id = "ca13">Out of time</td>
             </tr>
             <tr>
                 <td>14</td>
                 <td id="q14">Out of time</td>
                 <td id="a14">Out of time</td>
                 <td id="cw14">Out of time</td>
                 <td id = "ca14">Out of time</td>
             </tr>
             <tr>
                 <td>15</td>
                 <td id="q15">Out of time</td>
                 <td id="a15">Out of time</td>
                 <td id="cw15">Out of time</td>
                 <td id = "ca15">Out of time</td>
             </tr>
             <tr>
                 <td>16</td>
                 <td id="q16">Out of time</td>
                 <td id="a16">Out of time</td>
                 <td id="cw16">Out of time</td>
                 <td id = "ca16">Out of time</td>
             </tr>
             <tr>
                 <td>17</td>
                 <td id="q17">Out of time</td>
                 <td id="a17">Out of time</td>
                 <td id="cw17">Out of time</td>
                 <td id = "ca17">Out of time</td>
             </tr>
             <tr>
                 <td>18</td>
                 <td id="q18">Out of time</td>
                 <td id="a18">Out of time</td>
                 <td id="cw18">Out of time</td>
                 <td id = "ca18">Out of time</td>
             </tr>
             <tr>
                 <td>19</td>
                 <td id="q19">Out of time</td>
                 <td id="a19">Out of time</td>
                 <td id="cw19">Out of time</td>
                 <td id = "ca19">Out of time</td>
             </tr>
             <tr>
                 <td>20</td>
                 <td id="q20">Out of time</td>
                 <td id="a20">Out of time</td>
                 <td id="cw20">Out of time</td>
                 <td id = "ca20">Out of time</td>
             </tr>
             <tr>
                 <td>21</td>
                 <td id="q21">Out of time</td>
                 <td id="a21">Out of time</td>
                 <td id="cw21">Out of time</td>
                 <td id = "ca21">Out of time</td>
             </tr>
             <tr>
                 <td>22</td>
                 <td id="q22">Out of time</td>
                 <td id="a22">Out of time</td>
                 <td id="cw22">Out of time</td>
                 <td id = "ca22">Out of time</td>
             </tr>
             <tr>
                 <td>23</td>
                 <td id="q23">Out of time</td>
                 <td id="a23">Out of time</td>
                 <td id="cw23">Out of time</td>
                 <td id = "ca23">Out of time</td>
             </tr>
             <tr>
                 <td>24</td>
                 <td id="q24">Out of time</td>
                 <td id="a24">Out of time</td>
                 <td id="cw24">Out of time</td>
                 <td id = "ca24">Out of time</td>
             </tr>
             <tr>
                 <td>25</td>
                 <td id="q25">Out of time</td>
                 <td id="a25">Out of time</td>
                 <td id="cw25">Out of time</td>
                 <td id = "ca25">Out of time</td>
             </tr>
             <tr>
                 <td>26</td>
                 <td id="q26">Out of time</td>
                 <td id="a26">Out of time</td>
                 <td id="cw26">Out of time</td>
                 <td id = "ca26">Out of time</td>
             </tr>
             <tr>
                 <td>27</td>
                 <td id="q27">Out of time</td>
                 <td id="a27">Out of time</td>
                 <td id="cw27">Out of time</td>
                 <td id = "ca27">Out of time</td>
             </tr>
             <tr>
                 <td>28</td>
                 <td id="q28">Out of time</td>
                 <td id="a28">Out of time</td>
                 <td id="cw28">Out of time</td>
                 <td id = "ca28">Out of time</td>
             </tr>
             <tr>
                 <td>29</td>
                 <td id="q29">Out of time</td>
                 <td id="a29">Out of time</td>
                 <td id="cw29">Out of time</td>
                 <td id = "ca29">Out of time</td>
             </tr>
             <tr>
                 <td>30</td>
                 <td id="q30">Out of time</td>
                 <td id="a30">Out of time</td>
                 <td id="cw30">Out of time</td>
                 <td id = "ca30">Out of time</td>
             </tr>

         </table>
       
     </div>
        <div class="submitdiv" id="submitdiv"style="display: none;">
            <p id="counter" class="counter">/30</p>
            
            <input class= "submit"type="submit"onclick="sub()" value="submit answer" id="submitans">
            <form action="/index.php"name="myformig"method="post" id="myformig">
                
                <input class="zero" type="text" style="display:none" name="score" id="score">
                <input class="zero"type="text" style="display:none" name="rightnow" id="rightnow">
                <input class="zero"type="text" style="display:none" name="grade" id="grade">
                <input class="zero"type="text" style="display:none" name="tabchanges" id="tabchanges">
                <input name="submitall"  class="submitall"style="display:none"type="submit"value="Submit Results" id="submitall">
            </form> 
            <input onclick="sub(); func()"name="submit_" type="submit" style="display:none; "class= "submit"
            value="submit answer" id="confirm">
            
            
            
        

<div class="userinput">
        <p id="plusf" class="trigthing"></p>
        <p id="trigthing" class="trigthing" ></p>
        
</div>
           

            
        </div>
        <p style="display:none"id = "yourgrade" class = "yourgrade"></p>
        <br>
        <br>
        <div class="space">
        <input onclick="location.reload();" class="reload" value="Try Again ↻" type="submit" style="display:none" id="try">
        <p id = "nosub" class="nosub" style="display:none">(Your score will not be submited)</p>
</div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="last" style="display:none;">
        <input id ="retreat"type="submit" onclick="window.location.href='/index.php'" class="retreat"value="← Retreat" class="button"style="border-style:inset;"/>
        <p class="last">(Your score will not be submited)</p>
        </div>  
       
        
        
        

        <p id="stupid"style="display: none;"class="stupid">Silly goose you forgot to put a valid answer</p>
        <p style="display:block" id ="countdowntimer" class="timer"></p>
       





</body>
</html>