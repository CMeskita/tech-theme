
'use client'
import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBar() {


const [isClient, setIsClient] = useState(false);

const [corPrimaria, setCorPrimaria] = useState("#000");

useEffect(() => {
  const estilo = getComputedStyle(document.documentElement);
  const cor = estilo.getPropertyValue('--color-primary').trim();
  if (cor) setCorPrimaria(cor);
   setIsClient(true);
}, []);

  // Se não estiver no cliente, não renderiza o TEChart para evitar erro de hidratação

    if (!isClient) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-50 animate-pulse rounded-xl">
        <span className="text-gray-400 font-medium">Carregando gráfico...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px]">
      <TEChart
        type="bar"
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Nov", "Dez"],
          datasets: [
            {
              label: "Agendamento Mês",
              data: [30, 15, 62, 65, 61, 65, 40, 45, 60, 70, 100],
              backgroundColor: "#9B7B14",
            },
          ],
        }}
        options={{
          indexAxis: "y", // Isso torna o gráfico horizontal
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: true } },
            y: { grid: { display: false } }
          }
        }}
      />
    </div>
  );
}