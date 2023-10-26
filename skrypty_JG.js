let ileWierszy, ilePytan, n='n', Suma;

let remainingPytan = 0;

function nowaGra(){
document.getElementById("ileWierszy").disabled=false;
document.getElementById("ilePytan").disabled=false;
document.getElementById("start").disabled=false;
document.getElementById("zadanie").disabled=true;

document.getElementById("bilansGracza").innerHTML = "0";
 czysc();
for(let i=1;i<=6;i++){
    document.getElementById("n"+i).innerHTML = " "; 
}   
}

function start(){

    
    document.getElementById("ileWierszy").disabled=true;
    document.getElementById("ilePytan").disabled=true;
    document.getElementById("start").disabled=true;

    ilePytan = parseInt(document.getElementById("ilePytan").value);
    ileWierszy = parseInt(document.getElementById("ileWierszy").value);
    
    
    zadanie();
}

function zadanie(){
    document.getElementById("sprawdz").disabled=false;
    document.getElementById("suma").disabled=false;
    document.getElementById("zadanie").disabled=true;
    Suma = noweLiczby();
    czysc();
    if(ilePytan==0){
        start();
    }
}

function noweLiczby(){

    ileWierszy = document.getElementById("ileWierszy").value;
    
    let suma;

    let n1, n2, n3 , n4, n5, n6;
    
    

    if(ileWierszy == 1){
    n1 = document.getElementById('n1').innerHTML = Math.ceil(Math.random()*9);
    n2 = document.getElementById('n2').innerHTML = Math.ceil(Math.random()*9);
    suma = n1 + n2;
    }else if(ileWierszy == 2){
       n1 = document.getElementById("n1").innerHTML = Math.ceil(Math.random()*9);
       n2 = document.getElementById("n2").innerHTML = Math.ceil(Math.random()*9);
       n3 = document.getElementById("n3").innerHTML = Math.ceil(Math.random()*9);
       n4 = document.getElementById("n4").innerHTML = Math.ceil(Math.random()*9);
       suma = n1 + n2 + n3+ n4;
    }else if(ileWierszy == 3){
       n1 = document.getElementById("n1").innerHTML = Math.ceil(Math.random()*9);
       n2 = document.getElementById("n2").innerHTML = Math.ceil(Math.random()*9);
       n3 =  document.getElementById("n3").innerHTML = Math.ceil(Math.random()*9);
       n4 = document.getElementById("n4").innerHTML = Math.ceil(Math.random()*9);
       n5 = document.getElementById("n5").innerHTML = Math.ceil(Math.random()*9);
       n6 = document.getElementById("n6").innerHTML = Math.ceil(Math.random()*9);
       suma = n1 + n2 + n3+ n4 + n5 + n6;
    }
    
    return suma;
}

function czysc(){
    document.getElementById("suma").value='';
}

function sprawdz(){
    
    let gracz = parseInt(document.getElementById("suma").value);

            if (Suma == gracz) {
                document.getElementById("bilansGracza").innerHTML = parseInt(document.getElementById("bilansGracza").innerHTML) + 1;
            } else {
                document.getElementById("bilansGracza").innerHTML = parseInt(document.getElementById("bilansGracza").innerHTML) - 1;
            }

            ilePytan--;
            if(ilePytan>0){
                console.log(ilePytan);
                zadanie();
                czysc(); 
            }else{
                document.getElementById("sprawdz").disabled=true;
                document.getElementById("suma").disabled=true;
                document.getElementById("zadanie").disabled=false;
            }
            
        
            // After checking the answer, you can start a new round.
            
}
    