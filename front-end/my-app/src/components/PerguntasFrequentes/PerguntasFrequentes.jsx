'use client';
import React, { useState } from 'react';
import './PerguntasFrequentes.css';

const perguntas = [
  {
    question: 'O que é um estágio?',
    answer: 'Um estágio é uma oportunidade de aprendizado prático dentro de uma empresa ou organização. Ele permite que estudantes coloquem em prática o que aprendem em sala de aula, desenvolvam habilidades profissionais e ganhem experiência no mercado de trabalho, enquanto ainda estão estudando.',
  },
  {
    question: 'Como fazer um currículo para vaga de estágio?',
    answer: 'Um bom currículo para estágio deve ser simples e direto. Comece com seus dados pessoais, depois informe sua formação, cursos complementares e habilidades. Mesmo que você ainda não tenha experiência profissional, destaque projetos acadêmicos, voluntariado ou atividades extracurriculares. Personalize seu currículo de acordo com a vaga desejada.',
  },
  {
    question: 'Por que escolher a sua vaga pela CareerNest?',
    answer: 'A CareerNest é uma plataforma feita especialmente para quem está começando a carreira. Conectamos você com vagas de estágio pensadas para o seu perfil, com empresas sérias e que valorizam o crescimento dos estagiários. Aqui você encontra apoio, orientação e oportunidades reais para começar bem no mercado de trabalho.',
  },
  {
    question: 'Qual a carga horária de um estágio?',
    answer: 'A carga horária de um estágio depende do nível de ensino e da empresa, mas normalmente varia entre 4 e 6 horas por dia, totalizando até 30 horas semanais. O estágio deve sempre respeitar o seu horário de estudo e não pode interferir nas suas aulas.',
  },
];

export default function Pergunta() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 style={{ color: 'black' }} className='fw-bold'>
        Quer saber mais sobre <span className='fw-bold'>vagas de estágio?</span>
      </h2>
      {perguntas.map((pergunta, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggle(index)}
          >
            {pergunta.question}
            <i className={`bi ${openIndex === index ? 'bi-dash' : 'bi-plus'}`}></i>
          </button>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            {pergunta.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
