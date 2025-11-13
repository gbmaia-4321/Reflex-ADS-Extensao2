const botaoProfessor = document.querySelector('.buttonProfessor');
const botaoAluno = document.querySelector('.buttonAluno');

botaoProfessor.addEventListener('click', function () {
  // Se já está ativo, desativa
  if (this.classList.contains('ativo')) {
    this.classList.remove('ativo');
  } else {
    // Ativa este e desativa o outro
    this.classList.add('ativo');
    botaoAluno.classList.remove('ativo');
  }
});

botaoAluno.addEventListener('click', function () {
  // Se já está ativo, desativa
  if (this.classList.contains('ativo')) {
    this.classList.remove('ativo');
  } else {
    // Ativa este e desativa o outro
    this.classList.add('ativo');
    botaoProfessor.classList.remove('ativo');
  }

  



});
