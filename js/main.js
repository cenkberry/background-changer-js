const btn  = document.getElementById('btn');
const page = document.querySelector('#page');

btn.addEventListener("click" , function(){
    
    var letters = ["A","B","C","D","E","F"];
    var result = [];
    
    var randomLetter1 = Math.floor( (Math.random()*5) );
    var randomLetter2 = Math.floor( (Math.random()*5) );
    var randomLetter3 = Math.floor( (Math.random()*5) );
    
    var randomNumber1  = Math.floor( (Math.random()*10) );
    var randomNumber2  = Math.floor( (Math.random()*10) );
    var randomNumber3  = Math.floor( (Math.random()*10) );
    
    
    
    var result = "#" +
        letters[randomLetter1]+
        randomNumber1+
        letters[randomLetter2]+
        randomNumber2+
        letters[randomLetter3]+
        randomNumber3;
    
    
    page.style.backgroundColor = " " + result;
    console.log(result);
    
});



