// Quiz interativo
const quizQuestions = [
  {
    question: "1. O que são mudanças climáticas?",
    options: [
      "Mudanças temporárias no clima de uma região",
      "Alterações de longo prazo nos padrões climáticos globais",
      "Mudanças nas estações do ano",
      "Fenômenos naturais raros"
    ],
    answer: "Alterações de longo prazo nos padrões climáticos globais"
  },
  {
    question: "2. Qual é o principal gás do efeito estufa emitido pelas atividades humanas?",
    options: ["Metano (CH4)", "Dióxido de Carbono (CO2)", "Ozônio (O3)", "Óxido Nitroso (N2O)"],
    answer: "Dióxido de Carbono (CO2)"
  },
  {
    question: "3. Qual setor mais contribui para a emissão de gases de efeito estufa?",
    options: ["Agricultura", "Energia", "Transporte", "Indústria"],
    answer: "Energia"
  },
  {
    question: "4. Qual é uma consequência direta do aquecimento global?",
    options: [
      "Aumento da biodiversidade",
      "Elevação do nível do mar",
      "Redução do efeito estufa",
      "Resfriamento global"
    ],
    answer: "Elevação do nível do mar"
  },
  {
    question: "5. Qual organização científica internacional avalia as mudanças climáticas?",
    options: ["NASA", "ONU Mulheres", "IPCC", "OMS"],
    answer: "IPCC"
  },
  {
    question: "6. O que significa ODS 13 da ONU?",
    options: [
      "Ação contra a fome",
      "Educação de qualidade",
      "Ação contra a mudança global do clima",
      "Energia acessível e limpa"
    ],
    answer: "Ação contra a mudança global do clima"
  },
  {
    question: "7. Qual destas práticas ajuda a reduzir as mudanças climáticas?",
    options: [
      "Aumentar o consumo de combustíveis fósseis",
      "Desmatamento",
      "Uso de energia solar e eólica",
      "Poluição dos oceanos"
    ],
    answer: "Uso de energia solar e eólica"
  },
  {
    question: "8. O que é efeito estufa?",
    options: [
      "Um fenômeno exclusivamente prejudicial",
      "Um processo natural que aquece a Terra",
      "A destruição da camada de ozônio",
      "O aquecimento das cidades"
    ],
    answer: "Um processo natural que aquece a Terra"
  },
  {
    question: "9. Qual região do planeta é mais vulnerável ao derretimento de geleiras?",
    options: ["Amazônia", "Antártida e Ártico", "Deserto do Saara", "Himalaia"],
    answer: "Antártida e Ártico"
  },
  {
    question: "10. O que cada pessoa pode fazer para ajudar no combate às mudanças climáticas?",
    options: [
      "Reduzir, reutilizar e reciclar",
      "Desperdiçar água e energia",
      "Usar mais carros individuais",
      "Evitar transporte público"
    ],
    answer: "Reduzir, reutilizar e reciclar"
  }
];

function startQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  let score = 0;
  let questionIndex = 0;

  function showQuestion() {
    if (questionIndex < quizQuestions.length) {
      const q = quizQuestions[questionIndex];
      container.innerHTML = `
        <h3>${q.question}</h3>
        ${q.options
          .map(opt => `<button class="quiz-option">${opt}</button>`)
          .join("")}
      `;
      
      document.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
          if (btn.textContent === q.answer) {
            btn.classList.add("correct");
            score++;
          } else {
            btn.classList.add("incorrect");
          }

          // Desativa todos os botões após a resposta
          document.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);

          // Passa para a próxima questão depois de 1s
          setTimeout(() => {
            questionIndex++;
            showQuestion();
          }, 1000);
        });
      });
    } else {
      container.innerHTML = `<p>Você acertou ${score} de ${quizQuestions.length} questões!</p>`;
    }
  }

  showQuestion();
}

// Formulário simulado (opcional)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("form-response").textContent =
        "Mensagem enviada com sucesso! (simulado)";
      form.reset();
    });
  }
});
