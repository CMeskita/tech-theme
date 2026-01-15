
'use client'
import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBar() {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Se não estiver no cliente, não renderiza o TEChart para evitar erro de hidratação
  if (!isClient) return null;

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