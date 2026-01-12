'use client'
import { TEChart } from "tw-elements-react";

export default function ChartLine(){


  return (
    <TEChart
      type="line"
      data={{
        labels: [
          "Seg",
          "Ter",
          "Qua",
          "Qui",
          "Sex",
          "Sab",
          "Dom",
        ],
        datasets: [
          {
            label: "Agendamento por Dia",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            borderColor:"#9B7B14",
            pointBackgroundColor:"#9B7B14",
            backgroundColor:"#9B7B14",
            fill: false,
            tension: 0.4,
          },
        ],
      }}
    />
  );
}
