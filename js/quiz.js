function submitQuiz(){
    
    let score=0;
    let text=document.getElementById("texte").value.toLowerCase()
    if (document.getElementById("radio1").checked){
        score=score+3;
    }
    if (document.getElementById("radio5").checked){
        score=score+3;
    }
    if (document.getElementById("radio7").checked){
        score=score+3;
    }
    if (document.getElementById("checkbox1").checked){
        score=score+1.5;
    }
    if (document.getElementById("checkbox2").checked){
        score=score-1.5;
    }
    if (document.getElementById("checkbox3").checked){
        score=score+1.5;
    }

    if (text=="hydrochoerus hydrochaeris"){
        score=score+8;
    }
  

    let ligne= document.createElement("tr");

    let name = document.createElement("td");
    name.textContent = document.getElementById("nom").value;

    let s = document.createElement("td");
    s.textContent = score;
    ligne.appendChild(name);
    ligne.appendChild(s);
    document.querySelector("tbody").appendChild(ligne);
    tentative++;

    document.getElementById("nom").value = "";
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio3").checked = false;
    document.getElementById("radio4").checked = false;
    document.getElementById("radio5").checked = false;
    document.getElementById("radio6").checked = false;
    document.getElementById("radio7").checked = false;
    document.getElementById("radio8").checked = false;
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("texte").value = "";

}