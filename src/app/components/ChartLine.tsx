'use client'
import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

export default function ChartLine() {
  const [mounted, setMounted] = useState(false);

  // useEffect garante que o código dentro dele só rode no cliente (navegador)
  useEffect(() => {
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
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              borderColor: "#9B7B14",
              pointBackgroundColor: "#9B7B14",
              backgroundColor: "rgba(155, 123, 20, 0.2)", // Cor de fundo leve para o preenchimento
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