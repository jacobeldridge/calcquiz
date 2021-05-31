var tabcount = 0;
var counter2 = 0;
var counter = 1;
var listnum = 0;
var outof = true;
timething = true;
document.addEventListener('blur', () => {
        tabcount += 1;
      });

const sin =["sin(30)",
        "sin(45)",
        "sin(60)",
        "sin(90)",
        "sin(120)",
        "sin(135)",
        "sin(150)",
        "sin(180)",
        "sin(210)",
        "sin(225)",
        "sin(240)",
        "sin(270)",
        "sin(300)",
        "sin(315)",
        "sin(330)",
        "sin(360)",
        "sin(0)",
        "sin(π/6)",
        "sin(π/4)",
        "sin(π/3)",
        "sin(π/2)",
        "sin(2π/3)",
        "sin(3π/4)",
        "sin(5π/6)",
        "sin(π)",
        "sin(7π/6)",
        "sin(5π/4)",
        "sin(4π/3)",
        "sin(3π/2)",
        "sin(5π/3)",
        "sin(7π/4)",
        "sin(11π/6)",
        "sin(2π)",
        "tan(30)",
        "tan(45)",
        "tan(60)",
        "tan(90)",
        "tan(120)",
        "tan(135)",
        "tan(150)",
        "tan(180)",
        "tan(210)",
        "tan(225)",
        "tan(240)",
        "tan(270)",
        "tan(300)",
        "tan(315)",
        "tan(330)",
        "tan(360)",
        "tan(0)",
        "tan(π/6)",
        "tan(π/4)",
        "tan(π/3)",
        "tan(π/2)",
        "tan(2π/3)",
        "tan(3π/4)",
        "tan(5π/6)",
        "tan(π)",
        "tan(7π/6)",
        "tan(5π/4)",
        "tan(4π/3)",
        "tan(3π/2)",
        "tan(5π/3)",
        "tan(7π/4)",
        "tan(11π/6)",
        "tan(2π)",
        "csc(30)",
        "csc(45)",
        "csc(60)",
        "csc(90)",
        "csc(120)",
        "csc(135)",
        "csc(150)",
        "csc(180)",
        "csc(210)",
        "csc(225)",
        "csc(240)",
        "csc(270)",
        "csc(300)",
        "csc(315)",
        "csc(330)",
        "csc(360)",
        "csc(0)",
        "csc(π/6)",
        "csc(π/4)",
        "csc(π/3)",
        "csc(π/2)",
        "csc(2π/3)",
        "csc(3π/4)",
        "csc(5π/6)",
        "csc(π)",
        "csc(7π/6)",
        "csc(5π/4)",
        "csc(4π/3)",
        "csc(3π/2)",
        "csc(5π/3)",
        "csc(7π/4)",
        "csc(11π/6)",
        "csc(2π)",
        "cot(30)",
        "cot(45)",
        "cot(60)",
        "cot(90)",
        "cot(120)",
        "cot(135)",
        "cot(150)",
        "cot(180)",
        "cot(210)",
        "cot(225)",
        "cot(240)",
        "cot(270)",
        "cot(300)",
        "cot(315)",
        "cot(330)",
        "cot(360)",
        "cot(0)",
        "cot(π/6)",
        "cot(π/4)",
        "cot(π/3)",
        "cot(π/2)",
        "cot(2π/3)",
        "cot(3π/4)",
        "cot(5π/6)",
        "cot(π)",
        "cot(7π/6)",
        "cot(5π/4)",
        "cot(4π/3)",
        "cot(3π/2)",
        "cot(5π/3)",
        "cot(7π/4)",
        "cot(11π/6)",
        "cot(2π)",
        "sec(30)",
        "sec(45)",
        "sec(60)",
        "sec(90)",
        "sec(120)",
        "sec(135)",
        "sec(150)",
        "sec(180)",
        "sec(210)",
        "sec(225)",
        "sec(240)",
        "sec(270)",
        "sec(300)",
        "sec(315)",
        "sec(330)",
        "sec(360)",
        "sec(0)",
        "sec(π/6)",
        "sec(π/4)",
        "sec(π/3)",
        "sec(π/2)",
        "sec(2π/3)",
        "sec(3π/4)",
        "sec(5π/6)",
        "sec(π)",
        "sec(7π/6)",
        "sec(5π/4)",
        "sec(4π/3)",
        "sec(3π/2)",
        "sec(5π/3)",
        "sec(7π/4)",
        "sec(11π/6)",
        "sec(2π)",
        "cos(30)",
        "cos(45)",
        "cos(60)",
        "cos(90)",
        "cos(120)",
        "cos(135)",
        "cos(150)",
        "cos(180)",
        "cos(210)",
        "cos(225)",
        "cos(240)",
        "cos(270)",
        "cos(300)",
        "cos(315)",
        "cos(330)",
        "cos(360)",
        "cos(0)",
        "cos(π/6)",
        "cos(π/4)",
        "cos(π/3)",
        "cos(π/2)",
        "cos(2π/3)",
        "cos(3π/4)",
        "cos(5π/6)",
        "cos(π)",
        "cos(7π/6)",
        "cos(5π/4)",
        "cos(4π/3)",
        "cos(3π/2)",
        "cos(5π/3)",
        "cos(7π/4)",
        "cos(11π/6)",
        "cos(2π)"]
var sinran = shuffle(sin);
const startingminutes = 5;   
let time = startingminutes * 60;
var timedone = 1;
var timerstop = false;
var seconds = 0;
function func(){ 
        if (nothingthere === true){
                nothingthere = false;
                return;
        }
        document.getElementById("br").style.display="none";
        document.getElementById("last").style.display="block";
        document.getElementById("yourgrade").style.display = "block"
        document.getElementById("yourgrade").innerHTML = "Your Grade:\xa0"+counter2 + "/30"
        document.getElementById("submitans").style.display = "none";
        document.getElementById("qanda").style.display = "block";
        document.getElementById("try").style.display = "block";
        document.getElementById("nosub").style.display = "block";
        timerstop = true;
        var a = document.getElementById("trigthing").innerHTML;
        
        
        var confirm = document.getElementById("confirm");
        confirm.parentNode.removeChild(confirm);
        
        var score = counter2*10 - blurry*15+ time-seconds;
        
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var h = today.getHours();
        var m = today.getMinutes();
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
        dd='0'+dd;
        } 
        
        if(mm<10) 
        {
        mm='0'+mm;
        } 
        today = mm+'-'+dd+'-'+yyyy+"-"+h+":"+m;
        document.getElementById("rightnow").value=today; 
        document.getElementById("tabchanges").value=blurry;
        document.getElementById("grade").value=counter2+"/30";
        document.getElementById("score").value=score;
        
        var hidden = document.getElementById("hidden");
        hidden.style.display = "none";
        
        
        var counterthing = document.getElementById("counter");
        counterthing.style.display = "none";
        document.getElementById("countdowntimer").style.display = "none";
        document.getElementById("trig1").style.display = "none";
        var submitall = document.getElementById("submitall");
        submitall.style.display = "block";
        document.getElementById("submitall").style.display = "block";
        document.getElementById("tabtext").innerHTML = "Tabchanges:\xa0"+ blurry;
        document.getElementById("tabbox").style.display = "inline";
        
        document.getElementById("yourgrade").innerHTML="Your grade:"+counter2+"/30"; 
        
        
        
        
        
}
function urscore(){
        document.getElementById("yourscore").innerHTML=counter2;
    }
var minutes;
function updatecountdown(){
        minutes = Math.floor(time / 60);
        seconds = time % 60; 
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if (minutes + seconds === 0 || timerstop === true ){
                return;}
        document.getElementById('countdowntimer').innerHTML=minutes+":"+seconds;
        if( timerstop === true ){
                return;
        }
        if ( minutes === -1){
                func();
                return;}
        
        time--;

}    
function update(){
        setInterval(updatecountdown,1000);
        

}


function cleer() {
        document.getElementById("trigthing").innerHTML = "";
        document.getElementById("plusf").innerHTML = "";

       
}
function threeovertwo() {
        document.getElementById("trigthing").innerHTML = "√3/2";
        document.getElementById("stupid").style.display = "none";
}
function und() {
        document.getElementById("trigthing").innerHTML = "undefined";
        document.getElementById("stupid").style.display = "none";
}
function squarerootoftwo() {
        document.getElementById("trigthing").innerHTML = "√2";
        document.getElementById("stupid").style.display = "none";
}
function twothreeoverthree() {
        document.getElementById("trigthing").innerHTML = "2√3/3";
        document.getElementById("stupid").style.display = "none";
}
function threeoverthree() {
        document.getElementById("trigthing").innerHTML = "√3/3";
        document.getElementById("stupid").style.display = "none";
}
function squarethree() {
        document.getElementById("trigthing").innerHTML = "√3";
        document.getElementById("stupid").style.display = "none";
}
function half() {
        document.getElementById("trigthing").innerHTML = "1/2";
        document.getElementById("stupid").style.display = "none";
}
function one() {
        document.getElementById("trigthing").innerHTML = "1";
        document.getElementById("stupid").style.display = "none";
}
function zero() {
        document.getElementById("trigthing").innerHTML = "0";
        document.getElementById("stupid").style.display = "none";
}
function minus() {
        document.getElementById("plusf").innerHTML = "-";

    }      
function two() {
        document.getElementById("trigthing").innerHTML = "2";
        document.getElementById("stupid").style.display = "none";

    }      
function plus() {
        document.getElementById("plusf").innerHTML = "+";



    }
function twoovertwo() {
        document.getElementById("trigthing").innerHTML = "√2/2";
        document.getElementById("stupid").style.display = "none";
}
function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        }
function nextinlist() {
        var list = sin[listnum];
        var p = document.getElementById("trig1");
        p.innerHTML=list;
        listnum += 1; 
}
function myFunction() {
        shuffle(sin);
        var p = document.getElementById("trig1");
        p.innerHTML=sin[0];
        
        begin.parentNode.removeChild(begin); 
        header.parentNode.removeChild(header);
        var hidden = document.getElementById("hidden");
        hidden.style.display = "block";
        var submitdiv = document.getElementById("submitdiv");
        submitdiv.style.display = "block";
        listnum += 1;
        var counterthing = document.getElementById("counter");
        counterthing.innerHTML=counter+"/30"
        document.getElementById("allintro").style.display="none";
        document.getElementById("retreat").style.display="none";
        

        
    

}
var nothingthere = false;



var blurry = 0;
window.onblur = function(){
blurry += 1;
}
var qcounter = 1;
hello1
function sub(){

        if (counter === 29){
                document.getElementById("submitans").style.display = "none";
                
                
                var confirm = document.getElementById("confirm");
                confirm.style.display = "inline";}
        var a = document.getElementById("plusf").innerHTML+document.getElementById("trigthing").innerHTML;
        var y = document.getElementById("trig1").innerHTML;
         
        
        if (a==="" || a==="-undefined" || a==="-"){
                var stupid = document.getElementById("stupid");
                stupid.style.display = "block";
                nothingthere = true;
                return;
        
        }
        
        if (a!=""){
                nothingthere = false;
                var stupid = document.getElementById("stupid");
                stupid.style.display = "none";
        }
        var candi="";
        var cwcount = "cw"+qcounter;
        var qcount = "q"+qcounter; 
        var acount = "a"+qcounter; 
        var coranswer = "";
        var corcount = "ca"+qcounter;

        nextinlist();
        cleer();
        

        if (y === "sin(30)" || y === "sin(150)" || y ==="cos(60)" || y ==="cos(300)" || y==="sin(π/6)"
        || y==="sin(5π/6)"|| y==="cos(π/3)" || y==="cos(5π/3)"){
                if (a === "1/2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;
                }
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "1/2";
                }}
        else if (y === "cot(30)" || y === "cot(210)" || y ==="tan(60)" || y ==="tan(240)"
                || y === "cot(π/6)" || y === "cot(7π/6)" || y ==="tan(π/3)" || y ==="tan(4π/3)"){
                        if (a === "√3"){
                                counter += 1;
                                document.getElementById("counter").innerHTML = counter+"/30";
                                counter2 += 1;
                                document.getElementById("score").innerHTML = counter2+"/30";
                                qcounter += 1;
                                
                                candi = "CORRECT"
                                document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                                coranswer= a;}
                        else{
                                counter += 1;
                                document.getElementById("counter").innerHTML = counter+"/30";
                                qcounter += 1;
                                
                                candi = "INCORRECT"
                                document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                                coranswer = "√3";
                        }}
        else if (y === "cot(150)" || y ==="cot(330)" || y ==="tan(120)" || y==="tan(300)"
        || y === "cot(5π/6)" || y ==="cot(11π/6)" || y ==="tan(2π/3)" || y==="tan(5π/3)"){
                if (a === "-√3"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-√3";
                }}
        else if (y === "sin(210)" || y === "sin(330)" || y ==="cos(120)" || y ==="cos(240)" || y==="sin(7π/6)"
        || y==="sin(11π/6)"|| y==="cos(2π/3)" || y==="cos(4π/3)"){
                if (a === "-1/2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;
                }
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-1/2";
                }}
        else if (y === "tan(30)" || y === "tan(210)" || y ==="cot(60)" || y ==="cot(240)"
        || y === "tan(π/6)" || y === "tan(7π/6)" || y ==="cot(π/3)" || y ==="cot(4π/3)"){
                if (a === "√3/3"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "√3/3";
                }}
        else if (y === "tan(150)" || y ==="tan(330)" || y ==="cot(120)" || y==="cot(300)"
        || y === "tan(5π/6)" || y ==="tan(11π/6)" || y ==="cot(2π/3)" || y==="cot(5π/3)"){
                if (a === "-√3/3"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-√3/3";
                }}
        else if (y === "sin(60)" || y ==="sin(120)" || y ==="cos(330)" || y==="cos(30)"
                || y === "sin(π/3)" || y ==="sin(2π/3)" || y ==="cos(11π/6)" || y==="cos(π/6)"){
                if (a === "√3/2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "√3/2";
                }}
        else if (y === "sin(300)" || y ==="sin(240)" || y ==="cos(150)" || y==="cos(210)"
        || y==="sin(5π/3)" || y ==="sin(4π/3)" || y ==="cos(5π/6)" || y==="cos(7π/6)"){
                if (a === "-√3/2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-√3/2";
                }}
        else if (y === "sec(30)" || y ==="sec(330)" || y ==="csc(60)" || y==="csc(120)"
        || y === "sec(π/6)" || y ==="sec(11π/6)" || y ==="csc(π/3)" || y==="csc(2π/3)"){
                if (a === "2√3/3"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "2√3/3";
                }}
        else if (y === "sec(150)" || y ==="sec(210)" || y ==="cot(240)" || y === "sec(5π/6)" || y ==="sec(7π/6)" || y ==="csc(4π/3)"
         || y==="csc(5π/3)" || y==="csc(300)"){
                if (a === "-2√3/3"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-2√3/3";
                }}
        else if (y === "sec(135)" || y ==="sec(225)" || y ==="csc(225)" || y==="csc(315)"
        || y === "sec(3π/4)" || y ==="sec(5π/4)" || y ==="csc(5π/4)" || y==="csc(7π/4)"){
                if (a === "-√2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-√2";
                }}
        else if (y === "sec(45)" || y ==="sec(315)" || y ==="csc(45)" || y==="csc(135)" || y==="csc(3π/4)"
        || y === "sec(π/4)" || y ==="sec(7π/4)" || y ==="csc(π/4)"){
                if (a === "√2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "√2";
                }}
        else if (y === "tan(90)" || y ==="tan(270)" || y ==="cot(0)" || y==="cot(180)"
        || y === "tan(π/2)" || y ==="tan(3π/2)" || y==="cot(π)"
        || y === "sec(90)" || y ==="sec(270)" || y ==="csc(0)" || y==="csc(180)"
        || y === "sec(π/2)" || y ==="sec(3π/2)" || y==="csc(π)" || y==="cot(360)" || y==="cot(2π)"){
                if (a === "undefined"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "undefined";
                }}
        else if (y === "sin(45)" || y ==="sin(135)" || y ==="cos(45)" || y==="cos(315)"
        || y === "sin(π/4)" || y ==="sin(3π/4)" || y ==="cos(π/4)" || y==="cos(7π/4)"){
                if (a === "√2/2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "√2/2";
                }}
        else if (y === "sin(225)" || y ==="sin(315)" || y ==="cos(135)" || y ==="cos(225)"
        || y === "sin(5π/4)" || y ==="sin(7π/4)" || y ==="cos(3π/4)" || y ==="cos(5π/4)"){
                if (a === "-√2/2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-√2/2";
                }}
        else if (y === "sin(90)" || y==="sin(π/2)" || y ==="cos(0)" || y ==="cos(360)" || y==="tan(45)"
        || y === "sec(360)" || y ==="cos(2π)" || y ==="tan(π/4)" || y === "tan(225)"
        || y ==="cot(225)" || y ==="csc(π/2)" || y==="csc(90)" || y==="cot(45)" ||y==="cot(π/4)"
        || y === "sec(0)" || y ==="cot(5π/4)" || y ==="sec(2π)" || y==="tan(5π/4)"){
                if (a === "1"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "1";
                }}
        else if (y === "sin(270)" || y==="sin(3π/2)" || y ==="cos(180)" || y ==="cos(π)" || y==="tan(135)"
        || y === "tan(3π/4)" || y ==="tan(315)" || y ==="tan(7π/4)" || y === "cot(135)"
        || y ==="cot(3π/4)" || y ==="cot(315)" || y==="cot(7π/4)"){
                if (a === "-1"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-1";
                }}
        else if (y === "sec(60)" || y ==="sec(π/3)" || y ==="csc(30)" || y==="csc(5π/6)"
        || y === "sec(300)" || y ==="sec(5π/3)" || y ==="csc(π/6)" || y==="csc(150)"){
                if (a === "2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "2";
                }}
        else if (y === "sec(120)" || y ==="sec(240)" || y ==="csc(330)" || y==="csc(7π/6)"
        || y === "sec(2π/3)" || y ==="sec(4π/3)" || y ==="csc(11π/6)" || y==="csc(210)"){
                if (a === "-2"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "-2";
                }}
        else if (y === "sin(0)" || y==="sin(π)" || y ==="sin(180)" || y ==="sin(360)" || y==="sin(2π)"
        || y === "cos(90)" || y ==="cos(π/2)" || y ==="cos(3π/2)" || y === "cos(270)"
        || y ==="tan(0)" || y ==="tan(π)" || y==="tan(180)" || y==="tan(360)" || y==="tan(2π)"
        || y === "cot(90)" || y ==="cot(π/2)" || y ==="cot(270)" || y==="cot(3π/2)"
        || y==="sec(π)" || y==="sec(180)" || y==="csc(3π/2)" || y==="csc(270)"){
                if (a === "0"){
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        counter2 += 1;
                        document.getElementById("score").innerHTML = counter2+"/30";
                        qcounter += 1;
                        
                        candi = "CORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:green'>CORRECT</span>"
                        coranswer= a;}
                else{
                        counter += 1;
                        document.getElementById("counter").innerHTML = counter+"/30";
                        qcounter += 1;
                        
                        candi = "INCORRECT"
                        document.getElementById(cwcount).innerHTML = "<span style='color:red'>INCORRECT</span>"
                        coranswer = "0";
        

                }}

        document.getElementById(qcount).innerHTML=y;
        document.getElementById(corcount).innerHTML=coranswer;
        if (a === "" || a=== " "){
                return;
        }
        else{
                document.getElementById(acount).innerHTML=a;
        }
                
        
        
        
        }
