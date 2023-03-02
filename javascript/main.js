const c=console.log.bind(document)
let current=0;
let rightAnswer=0;
let myRequest= new XMLHttpRequest();
myRequest.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let myJsObject=JSON.parse(this.responseText)
        let count=myJsObject.length
           createBulletts(myJsObject.length)
           createQuestions(myJsObject[current],count)
           document.querySelector(".bttn").onclick = ()=>{
         fox(myJsObject[current].corrA,count)
         current++;
       document.querySelector(".quiz-area").innerText=''
       document.querySelector(".answer-area").innerText=''
         
         createQuestions(myJsObject[current],count)
         addOnToBullets()
         showResults(count)
        }
          
      }
}

    myRequest.open("Get","/questions.json",true);
     myRequest.send();
     function createBulletts(num){
        document.querySelector(".count span").innerHTML=num
        for(let i=0; i<num ;i++){
          let bulletSpan = document.createElement("span")
            document.querySelector(".bullets .spans").appendChild(bulletSpan)
            if(i===current){
            bulletSpan.classList.add("on")
            }
        }
     } 
     function createQuestions(obj,count){
        if(current<count){
                     let question=document.createElement("h2")
       document.querySelector(".quiz-area").appendChild(question)
       question.innerText=obj[`Q${current + 1}`];
       for(let i=1;i<5;i++){
        let answerDiv=document.createElement("div")
       answerDiv.className="answer"
       document.querySelector(".answer-area").appendChild(answerDiv)
       let answerInput=document.createElement("input")
        answerInput.type="radio"
        answerInput.name="answer"
        answerInput.id=`answer${i}`
        answerInput.dataset.answer=obj[`A${i}`]
        let answerLabel=document.createElement("label")
        answerLabel.htmlFor=`answer${i}`
        answerLabel.innerText=obj[`A${i}`]
        answerDiv.appendChild(answerInput)
        answerDiv.appendChild(answerLabel) 
      }    
        }    
  
        }
      function fox(rAnswer,count){
       
        for (let i=1;i<=4;i++){
    let theAnswer=document.querySelector(`#answer${i}`)
        if(theAnswer.checked && theAnswer.dataset.answer==rAnswer){
        rightAnswer++;
        }
    }
   
        
        }
       
        function addOnToBullets(){
            let bulletspans= document.querySelectorAll(".bullets .spans span")
            let arrayofSpans=Array.from(bulletspans)
        arrayofSpans.forEach((span,ind)=>{
           if(ind===current){
            span.classList.add("on")
           }
        })
        }
        function showResults(count){
        if(current===count){
        document.querySelector(".quiz-area").remove()
        document.querySelector(".answer-area").remove()
        document.querySelector(".bttn").remove()
         if(rightAnswer===count){
        document.querySelector(".result").innerHTML=`<span>perfect</span> you answered ${count} from ${count}`
        }else if(rightAnswer>count/2&&rightAnswer<count){
            document.querySelector(".result").innerHTML=`<span>good</span> you answered ${rightAnswer} from ${count}`

        }else{
            document.querySelector(".result").innerHTML=`<span>Bad</span> you answered ${rightAnswer} from ${count}`

        }
        }
       
        }

  document.querySelector(".repos span").addEventListener('click',()=>{
    fetch("https://api.github.com/users/elzerowebschool/repos").then((link)=>{
  return link.json() 
  }).then(repositries=>{
    repositries.forEach(repo=>{
      let repoDiv=document.createElement("DIV")
      let repoText=document.createTextNode(`${repo.name}`)
      repoDiv.append(repoText)
      document.querySelector(".show-data").appendChild(repoDiv)
      let repoLink=document.createElement("a")
      repoLinkText=document.createTextNode("visit")
      repoLink.appendChild(repoLinkText)
      repoLink.setAttribute("target","_blank")
      repoLink.href=`https:github.com/elzerowebschool/${repo.name}`
      repoDiv.appendChild(repoLink)
    })
  })
    
  })
  


let strarr=["efghijklmn","kjl"] 
  function MinWindowSubstring(strArr) { 
    console.log(strArr[0].indexOf(strArr[1]))
    }
       MinWindowSubstring(strarr);