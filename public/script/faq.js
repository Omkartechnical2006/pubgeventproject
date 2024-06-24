const ansshow =(e)=>{
    let questions = document.getElementsByClassName("answer");
    for(let question of questions){
        question.style.display="none";
    }
    e.nextElementSibling.style.display="block";
   }