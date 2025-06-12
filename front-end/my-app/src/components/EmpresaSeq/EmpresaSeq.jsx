"use client";
import { useState } from "react";

export default function EmpresaSeq() {
  const etapas = [
    { numero: '1', texto: 'Crie sua conta' },
    { numero: '2', texto: 'Publique sua vaga' },
    { numero: '3', texto: 'Receba candidatos qualificados' },
    { numero: '4', texto: 'Faça sua seleção diretamente na plataforma' },
  ];

  return (
    <section style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 className="titulo-depoimentos" style={{ color: '#b94700', fontSize: '30px', marginBottom: '40px' }}>
        Como funciona?
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start', // garantir que todos comecem alinhados
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative'
      }}>
        {etapas.map((etapa, index) => (
          <div key={index} style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Linha conectando os círculos */}
            {index < etapas.length - 1 && (
              <div style={{
                position: 'absolute',
                top: '25px',
                left: '50%',
                width: '100%',
                height: '2px',
                zIndex: 0,
              }}>
                <div style={{
                  width: 'calc(100% - 50px)',
                  marginLeft: '25px',
                  height: '2px',
                  backgroundColor: '#b94700'
                }}></div>
              </div>
            )}

            {/* Círculo numerado */}
            <div style={{
              backgroundColor: '#b94700',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              zIndex: 1
            }}>
              {etapa.numero}
            </div>

            {/* Texto abaixo */}
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#333', textAlign: 'center', maxWidth: '140px' }}>
              {etapa.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
