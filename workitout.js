//generate random number between 1-10 
var num = Math.floor(Math.random() * 10) + 1;

var quest;
var answer;
var picture;
// display only one question at random and set the answer equal to the global variable answer

          if(num===0){
          quest="Who was named man of the match in the All-Ireland hurling final 2006?";
          answer="dj";
          picture="img/house.jpg"
          }
          if(num===1){
          quest="Who was named man of the match in the All-Ireland hurling final 2007?"
          answer="henry";
          picture="img/house.jpg"
          }
          if(num===2){
          quest="Who was named man of the match in the All-Ireland hurling final 2008?"
          answer="bubbles";
          picture="img/house.jpg"
          } 
          if(num===3){
            quest="Who was named man of the match in the All-Ireland hurling final 2009?"
            answer="bubbles";
            picture="img/house.jpg"
          } 
          if(num===4){
            quest="Who was named man of the match in the All-Ireland hurling final 2010?"
            answer="bubbles";
            picture="img/house.jpg"
          } 
          if(num===5){
            quest="Who was named man of the match in the All-Ireland hurling final 2011?"
            answer="bubbles";
            picture="img/house.jpg"
          } 
          if(num===6){
            quest="Who was named man of the match in the All-Ireland hurling final 2012?"
            answer="bubbles";
            picture="img/house.jpg"
          } 
          if(num===7){
            quest="Who was named man of the match in the All-Ireland hurling final 2013?"
            answer="bubbles";
            picture="img/house.jpg"

          }   
          if(num===8){
            quest="Who was named man of the match in the All-Ireland hurling final 2014?"
            answer="bubbles";
            picture="img/house.jpg"

          } 
          if(num===9){
            quest="Who was named man of the match in the All-Ireland hurling final 2015?"
            answer="bubbles";
            picture="img/house.jpg"

          } 
          if(num===10){
            quest="Who was named man of the match in the All-Ireland hurling final 2015?"
            answer="bubbles";
            picture="img/house.jpg"
          } 

document.getElementById('question').innerHTML = quest; 
document.getElementById('answer').innerHTML = answer;  
document.getElementById('main_img').src = picture;       

localStorage.setItem('quest1',quest);
localStorage.setItem('answer1', answer);
localStorage.setItem('picture1', picture); 

alert(localStorage.answer);




