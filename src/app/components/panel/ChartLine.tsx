'use client'
import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

export default function ChartLine() {

const [mounted, setMounted] = useState(false);

const [corPrimaria, setCorPrimaria] = useState("#000");

useEffect(() => {
  const estilo = getComputedStyle(document.documentElement);
  const cor = estilo.getPropertyValue('--color-primary').trim();
  if (cor) setCorPrimaria(cor);
   setMounted(true);
}, []);

 
  // Enquanto o componente não "montar" no cliente, exibimos um estado de carregamento
  if (!mounted) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-50 animate-pulse rounded-xl">
        <span className="text-gray-400 font-medium">Carregando gráfico...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <TEChart
        type="line"
        data={{
          labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
          datasets: [
            {
              label: "Agendamento por Dia",
              data: [20, 30, 35, 31, 23,40, 50],
              borderColor: corPrimaria,
              pointBackgroundColor: corPrimaria,
              backgroundColor: `${corPrimaria}33`, // Cor de fundo leve para o preenchimento
              fill: true, // "true" cria um visual de gráfico de área mais moderno
              tension: 0.4, // Suaviza as curvas da linha
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Permite que o gráfico preencha o container pai corretamente
          plugins: {
            legend: {
              display: true,
              position: 'top',
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}