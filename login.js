function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (!usuario || !senha) {
    alert("Preencha usuário e senha");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Primeiro acesso
  if (usuarios.length === 0) {
    usuarios.push({ usuario, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("logado", "true");
    window.location.href = "dashboard.html";
    return;
  }

  const valido = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (valido) {
    localStorage.setItem("logado", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
}
