function salvarDiaria() {
  const data = data.value;
  const horario = horario.value;
  const cliente = cliente.value;
  const endereco = endereco.value;
  const valor = valor.value;

  if (!data || !horario || !cliente || !valor) {
    alert("Preencha os campos obrigatórios");
    return;
  }

  let diarias = JSON.parse(localStorage.getItem("diarias")) || [];

  if (diarias.some(d => d.data === data && d.horario === horario)) {
    alert("Já existe diária nesse horário");
    return;
  }

  diarias.push({ data, horario, cliente, endereco, valor });
  localStorage.setItem("diarias", JSON.stringify(diarias));

  alert("Diária salva com sucesso");
  window.location.href = "dashboard.html";
}
