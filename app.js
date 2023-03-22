var questions = [
    {
        question: '1-¿Cuál es el nombre completo del personaje principal de "Better Call Saul" antes de convertirse en abogado?',
        choices: [" a) James McGill", " b) John McGill", "c) Jimmy McGill", "d) Joseph McGill"],
        answer: 0
    },
    {
        question: "2-¿Quién es el hermano de Jimmy McGill que es uno de los abogados más respetados de Nuevo México?",
        choices: [" a) Peter McGill", "b) Michael McGill", "c) Chuck McGill", "d) David McGill"],
        answer: 2
    },
    {
        question: " 3-¿Cuál es el caso que Jimmy McGill maneja que podría darle millones de dólares en ganancias?",
        choices: ["a) El caso Juárez", "b) El caso Mesa Verde", "d) El caso HH & M", " e) El caso Sandpiper"],
        answer: 3
    },

    {
        question: "4-¿Quién es el socio del bufete HH&M que es el hermano de Chuck McGill?",
        choices: ["a) Gus Fring", "b) Howard Hamlin", "c)Mike Ehrmantraut", "d) Nacho Varga"],
        answer: 1
    },

    {
        question: "5-¿Por qué Chuck McGill trata de perjudicar a Jimmy?",
        choices: ["a) Porque Jimmy lo desacreditó al fraguar documentos", "b) Porque Jimmy le quitó a Mesa Verde como cliente.", "c) Porque Chuck desprecia la vida que Jimmy llevó como estafador.", "d) El caso Sandpiper"],
        answer: 2
    },

    {
        question: "6. ¿Quién defiende a Lalo Salamanca en el juicio?",
        choices: ["a) Kim Wexler", "b) Jimmy McGill.", "c) Howard Hamlin.", "d) Nacho Varga"],
        answer: 1
    },

    {
        question: "7. ¿Qué hace Jimmy para hundir la carrera de Howard Hamlin?",
        choices: ["a) Trabaja con él para conseguir el dinero de Sandpiper que le corresponde.", "b) Trata de que lo desacrediten en HH & M.", "c) Le sigue el juego a Kim Wexler para perjudicarlo", "d) Lo ayuda a defender a Lalo Salamanca en el juicio."],
        answer: 1
    },


    {
        question: "8. ¿En qué estado se esconde Jimmy después de la caída del imperio de drogas de Walter White?",
        choices: ["a) Arizona", "b) Texas", "c) Nuevo México", "d) Nebraska"],
        answer: 3
    },



    {
        question: "9. ¿Qué identidad utiliza Jimmy en Nebraska?",
        choices: ["a) Gene Takavic", "b) Saul Goodman.", "c) Walter White.", "d) Jesse Pinkman"],
        answer: 0
    },

    {
        question: "10. ¿Qué hace Jimmy al final de la serie?",
        choices: ["a) Huye de Nuevo México para siempre.", "b) Solicita otra identidad para pasar desapercibido.", "c)Se queda en Nebraska como Gene Takavic.", "d) Tiene un plan para cambiar su destino una vez más."],
        answer: 3
    },





];



var currentQuestion = 0;
var score = 0;

function showQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");
    questionElement.innerHTML = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var buttonElement = document.createElement("button");
        buttonElement.innerHTML = questions[currentQuestion].choices[i];
        buttonElement.onclick = checkAnswer;
        buttonElement.value = i;
        choicesElement.appendChild(buttonElement);
    }
}

function checkAnswer() {
    if (this.value == questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion == questions.length) {
        endGame();
    } else {
        showQuestion();
    }
}

function endGame() {
    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = "Tu puntuacion es : " + score + "/" + questions.length;
}



showQuestion();


//Boton reset 

const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function (reset) {
    counterElement.textContent = "0";
});
