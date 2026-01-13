const diarias = JSON.parse(localStorage.getItem("diarias")) || [];
const gastos = JSON.parse(localStorage.getItem("gastos")) || [];

const mesAtual = new Date().toISOString().slice(0,7);

const diariasMes = diarias.filter(d => d.data.startsWith(mesAtual));
const gastosMes = gastos.filter(g => g.data.startsWith(mesAtual));

const totalDiarias = diariasMes.reduce((s, d) => s + Number(d.valor), 0);
const totalGastos = gastosMes.reduce((s, g) => s + Number(g.valor), 0);

document.getElementById("qtdDiarias").innerText = diariasMes.length;
document.getElementById("totalGanho").innerText = "R$ " + totalDiarias.toFixed(2);
document.getElementById("totalGastos").innerText = "R$ " + totalGastos.toFixed(2);
document.getElementById("lucro").innerText =
  "R$ " + (totalDiarias - totalGastos).toFixed(2);
