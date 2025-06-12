"use client";

import { useState } from "react";

export default function CardEmpresa() {
  const patrocinadores = [
    {
      titulo: "Triagem inteligente",
      descricao:
        "Filtragem automatizada de currículos com base em critérios definidos (habilidades, experiências, localização etc.), economizando horas do RH.",
      fundo: "#f1f1f1",
      icon: "bi bi-bullseye",
      corTexto: "#bd4b0d",
    },
    {
      titulo: "Acompanhamento fácil",
      descricao:
        "Painel de controle intuitivo para acompanhar cada etapa do processo seletivo, desde o recebimento do currículo até a contratação.",
      fundo: "#f1f1f1",
      icon: "bi bi-clipboard-data",
      corTexto: "#bd4b0d",
    },
    {
      titulo: "Segurança e conformidade",
      descricao:
        "Armazenamento seguro dos dados dos candidatos com total adequação à LGPD e outras normas de proteção de dados.",
      fundo: "#f1f1f1",
      icon: "bi bi-shield-lock",
      corTexto: "#bd4b0d",
    },
    {
      titulo: "Economia de tempo e custo",
      descricao:
        "Redução significativa no tempo de contratação e nos gastos com anúncios e triagens manuais.",
      fundo: "#f1f1f1",
      icon: "bi bi-graph-up-arrow",
      corTexto: "#bd4b0d",
    },
  ];

  const [virados, setVirados] = useState(Array(patrocinadores.length).fill(false));

  const virarCard = (index) => {
    const novo = [...virados];
    novo[index] = !novo[index];
    setVirados(novo);
  };

  return (
    <div className="container my-5">
      {/* TÍTULO */}
      <div className="text-center mb-4">
        <h2 className="solucoes fw-bold display-6" style={{ color: "#bd4b0d" }}>
          Soluções que agilizam seu recrutamento
        </h2>
        <p className="text-muted fs-6">
          Recursos pensados para acelerar seus processos de seleção
        </p>
      </div>

      {/* FLIP CARDS */}
      <div className="row g-4">
        {patrocinadores.map((patrocinador, idx) => (
          <div key={idx} className="col-12 col-md-3">
            <div className="flip-card" onClick={() => virarCard(idx)}>
              <div className={`flip-card-inner ${virados[idx] ? "is-flipped" : ""}`}>
                {/* Frente */}
                <div
                  className="flip-card-front"
                  style={{ backgroundColor: patrocinador.fundo }}
                >
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className={patrocinador.icon}
                      style={{ fontSize: "3rem", color: patrocinador.corTexto }}
                    ></i>
                  </div>
                  <h5 className="mt-3" style={{ color: "#f89d34" }}>
                    {patrocinador.titulo}
                  </h5>
                </div>

                {/* Verso */}
                <div
                  className="flip-card-back"
                  style={{
                    backgroundColor: patrocinador.fundo,
                    color: patrocinador.corTexto,
                  }}
                >
                  <h5 className="fw-bold mb-2" style={{ color: "#f89d34" }}>
                    {patrocinador.titulo}
                  </h5>
                  <p className="fs-6" style={{ fontSize: "0.95rem" }}>
                    {patrocinador.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estilos do Flip Card */}
      <style jsx>{`
        .flip-card {
          width: 100%;
          height: 280px;
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 20px;
          padding: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
