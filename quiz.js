class Quiz {
  constructor(questions){
    this.questions = questions;
    this.questionNumber = 0;
    this.resultNumber = 0;
  }

  getQuestion(){
    return this.questions[this.questionNumber];
  }

  // Rodo progresą
  showProgress(){
    this.questionNumber++;
    progress.textContent = this.questionNumber + 1;
  }

    // Skaičiuoja teisingus atsakymus
  check(guess) {
   if(guess.textContent === this.getQuestion().answer) {
     guess.style.background = "#94D0CC"
     return this.resultNumber++;
    }
    guess.style.background = "#F29191"
    return this.resultNumber;
  }

  // Result page
  showResults(){
    var quiz = document.getElementById("quiz");
    quiz.innerHTML = 
    `
    <h1>Results: ${this.resultNumber} </h1>
    <button onClick="start()">Bandyti dar kartą</button>
    `;
    console.log("results");
  }
}
