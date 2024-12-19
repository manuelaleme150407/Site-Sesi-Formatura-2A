const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const modalImageAfter = document.getElementById("modal-image-after");

const modalButtons = document.querySelectorAll("button[data-id]");

const data = {
  1: {
      title: "Janeiro 2025 🎉",
      image: "./src/imagemTurma.jpeg",
      description: "Mês de recomeços e preparação! Enquanto os alunos desfrutam das últimas semanas de férias, as escolas trabalham nos ajustes finais para o novo ano letivo: organização de turmas, planejamento de aulas e eventos. Para muitos, é também um período de expectativas e ansiedade pelo que está por vir. Alunos organizam materiais escolares e se preparam mentalmente para o retorno às aulas."
  },
  2: {
      title: "Fevereiro 2025 💡",
      image: "src/imagemTurma.jpeg",
      description: "O início do ano letivo! Alunos e professores retornam com energia renovada. É o momento de conhecer os colegas, organizar materiais e planejar metas. As primeiras semanas são de adaptação e criação de rotinas."
  },
  3: {
      title: "Março 2025 🔧",
      image: "src/imagemTurma.jpeg",
      description: "As aulas ganham ritmo. Projetos começam a ser apresentados, e os alunos mergulham nos conteúdos. Eventos como reuniões de pais e pequenos trabalhos avaliativos ajudam a reforçar o compromisso com os estudos."
  },
  4: {
      title: "Abril 2025 🌱",
      image: "src/imagemTurma.jpeg",
      description: "Mês de desafios e crescimento. As turmas começam a se aprofundar nos temas mais complexos, enquanto os professores utilizam estratégias criativas para manter o engajamento. Datas como a Páscoa podem trazer atividades interativas."
  },
  5: {
      title: "Maio 2025 🚀",
      image: "src/imagemTurma.jpeg",
      description: "Hora de consolidar o aprendizado! Avaliações começam a aparecer com mais frequência. O clima de outono cria uma atmosfera acolhedora, ideal para leituras e trabalhos em grupo."
  },
  6: {
      title: "Junho 2025 🛤️",
      image: "src/imagemTurma.jpeg",
      description: "Último mês antes das férias! Provas finais e fechamento de notas do primeiro semestre marcam esse período. Além disso, as festas juninas trazem momentos de descontração, com danças, comidas típicas e alegria."
  },
  7: {
      title: "Julho 2025 🏖️",
      image: "src/imagemTurma.jpeg",
      description: "Férias escolares! Tempo de descansar, recarregar as energias e se preparar para os desafios do segundo semestre. Muitos aproveitam para viajar ou se dedicar a atividades extracurriculares."
  },
  8: {
      title: "Agosto 2025 🎯",
      image: "src/imagemTurma.jpeg",
      description: "Retorno às aulas. Os alunos voltam renovados e prontos para continuar o ano letivo. Projetos e novas metas para o segundo semestre começam a ser traçados."
  },
  9: {
      title: "Setembro 2025 🌸",
      image: "src/imagemTurma.jpeg",
      description: "A primavera chega trazendo leveza. Alunos participam de eventos como desfiles de 7 de setembro ou atividades relacionadas ao meio ambiente. É um mês cheio de iniciativas criativas e aprendizado."
  },
  10: {
      title: "Outubro 2025 🎃",
      image: "src/imagemTurma.jpeg",
      description: "Mês das crianças e dos professores! As escolas geralmente promovem comemorações para valorizar esses protagonistas da educação. A reta final do ano letivo se aproxima, e os conteúdos ganham mais intensidade."
  },
  11: {
      title: "Novembro 2025 📚",
      image: "src/imagemTurma.jpeg",
      description: "Um dos meses mais intensos do ano escolar. Provas finais, entrega de projetos e preparação para encerrar o ciclo dominam o calendário. Alunos se dedicam ao máximo para alcançar bons resultados."
  },
  12: {
      title: "Dezembro 2025 🎄",
      image: "src/imagemTurma.jpeg",
      description: "O encerramento do ano letivo! Cerimônias de formatura, festas de despedida e revisões marcam o mês. É o momento de refletir sobre as conquistas e se despedir da escola, preparando-se para novas etapas."
  }
};

const openModal = (id) => {
  const info = data[id];
  modalTitle.innerText = info.title;
  modalDescription.innerText = info.description;
  modalImage.src = info.image;
  modal.style.display = "flex";
}

modalButtons.forEach(button => {
  button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      openModal(id);
  });
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});
