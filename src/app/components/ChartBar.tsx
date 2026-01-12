
'use client'
import { TEChart } from "tw-elements-react";

export default function ChartBar() {
  return (
    <TEChart
      type="bar"
      data={{
        labels: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Nov",
          "Dez",
        ],
        datasets: [
          {
            label: "Agendamento Mês",
            data: [30, 15, 62, 65, 61, 65, 40, 45, 60, 70, 100],
            backgroundColor:"#9B7B14"
          },
        ],
      }}
      options={{
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
            grid: {
              display: true,
              borderDash: [2],
              zeroLineColor: "rgba(97, 75, 6, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              color: "rgba(0,0,0, 0.5)",
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              color: "rgba(0,0,0, 0.5)",
            },
          },
        },
      }}
      darkOptions={{
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
            grid: {
              display: true,
              color: "#555",
              borderDash: [2],
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              color: "#fff",
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              color: "#fff",
            },
          },
        },
      }}
    />
  );
}