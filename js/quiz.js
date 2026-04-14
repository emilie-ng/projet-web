let tentative=1;

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
        score=score+1.5;
    }
    if (document.getElementById("checkbox3").checked){
        score=score-1.5;
    }

    if (text=="hydrochoerus hydrochaeris"){
        

    }
  

    let ligne= document.createElement("tr");

    let name = document.createElement("td");
    name.textContent = document.getElementById("nom")
    
    let e = document.createElement("td");
    e.textContent = tentative;
    let s = document.createElement("td");
    s.textContent = score;
    ligne.appendChild(e);
    ligne.appendChild(s);
    document.querySelector("tbody").appendChild(ligne);
    tentative++;

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

    if (tentative > 3) {
        let bouton = document.getElementById("soumettre");
        bouton.disabled = true;

    }
}