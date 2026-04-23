class History {
     
    constructor() {
        this.scores=[];

    }
    addScore(score) {
        this.scores.push(score);
    }

    getHistory() {
        return this.scores;
    }

    addEventListener() {
        window.addEventListener('beforeunload', saveScores);
        window.addEventListener('load', loadScores);
    }
}


function saveScores() {
    localStorage.setItem('History', JSON.stringify(historyScores.getHistory()));
}


function loadScores() {
    const saved = JSON.parse(localStorage.getItem('History'));
    const tbody = document.querySelector("tbody");
    if (saved && tbody) {
        saved.forEach(entry => {
            historyScores.addScore(entry);

            let ligne = document.createElement("tr");
            let nom = document.createElement("td");
            nom.textContent = entry.nom;
            let s = document.createElement("td");
            s.textContent = entry.score;
            ligne.appendChild(nom);
            ligne.appendChild(s);
            document.querySelector("tbody").appendChild(ligne);
        });

    }
}




function submitQuiz(){
    let nom=document.getElementById("nom").value;

    if (nom==""){
        alert("Veuillez entrer un nom !");

    } else {
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
        
        if (score<0){
            score=0
        }

        historyScores.addScore({ nom: nom, score: score });
        saveScores(); 

        let ligne= document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = nom;

        let s = document.createElement("td");
        s.textContent = score;
        ligne.appendChild(name);
        ligne.appendChild(s);
        document.querySelector("tbody").appendChild(ligne);
       

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
}

function submitAdoption(){
    let prenom=document.getElementById("prenom").value;
    let nom=document.getElementById("nom").value;
    let date=document.getElementById("date").value;
    let mail=document.getElementById("mail").value;
    let choix=document.getElementById("selection").value;

    if (prenom == "" || nom == '' || date == '' || mail == '' || choix == ""){
        alert("Veuillez remplir tous les champs !");
    } else {
        alert("Votre demande a été prise en compte. Nous reviendrons vers vous quand votre dossier sera traité.")
    }


}

let historyScores=new History();
historyScores.addEventListener();