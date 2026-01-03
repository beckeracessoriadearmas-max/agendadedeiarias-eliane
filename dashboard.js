// 🔐 PROTEÇÃO DE LOGIN
if (localStorage.getItem("logado") !== "true") {
    window.location.href = "login.html";
}

// 🔔 NOTIFICAÇÕES
if ("Notification" in window) {
    Notification.requestPermission();
}

// 📦 SERVICE WORKER
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registrado"));
}

// 📊 RESUMO MENSAL
const diarias = JSON.parse(localStorage.getItem("diarias")) || [];

const hoje = new Date();
const mesAtual = hoje.getMonth();
const anoAtual = hoje.getFullYear();

let feitas = 0;
let futuras = 0;
let total = 0;

diarias.forEach(d => {
    const dataHora = new Date(`${d.data}T${d.horario}`);
    if (
        dataHora.getMonth() === mesAtual &&
        dataHora.getFullYear() === anoAtual
    ) {
        total += Number(d.valor);
        if (dataHora < hoje) {
            feitas++;
        } else {
            futuras++;
        }
    }
});

// 🖥️ MOSTRAR NA TELA
document.getElementById("feitas").innerText =
    `Diárias feitas no mês: ${feitas}`;

document.getElementById("futuras").innerText =
    `Diárias restantes: ${futuras}`;

document.getElementById("total").innerText =
    `Total ganho: R$ ${total.toFixed(2)}`;

// 🚪 LOGOUT
function logout() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem("logado");
    window.location.href = "index.html";
}

const diarias = JSON.parse(localStorage.getItem("diarias")) || [];

const hoje = new Date();
const mesAtual = hoje.getMonth();
const anoAtual = hoje.getFullYear();

// Filtra apenas diárias do mês atual
const diariasMes = diarias.filter(d => {
    const data = new Date(d.data);
    return (
        data.getMonth() === mesAtual &&
        data.getFullYear() === anoAtual
    );
});

// Total de diárias
document.getElementById("totalDiarias").innerText = diariasMes.length;

// Soma dos valores
let total = 0;
diariasMes.forEach(d => {
    total += Number(d.valor);
});

document.getElementById("totalGanho").innerText =
    total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
