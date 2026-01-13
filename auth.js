// Proteção de páginas (login obrigatório)
if (localStorage.getItem("logado") !== "true") {
    window.location.href = "index.html";
}

// Logout
function logout() {
    localStorage.removeItem("logado");
    window.location.href = "index.html";
}
