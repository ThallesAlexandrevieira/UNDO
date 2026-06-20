// Captura o formulário
const form = document.getElementById("contactForm");

// Evento de envio
form.addEventListener("submit", async function(event) {
  event.preventDefault(); // evita recarregar a página

  // Coleta os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Validação simples
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    // Envia os dados para o servidor Node.js
    const response = await fetch("http://localhost:3000/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, mensagem })
    });

    const data = await response.json();

    if (data.success) {
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
      form.reset(); // limpa o formulário
    } else {
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  } catch (error) {
    console.error(error);
    alert("Falha na conexão com o servidor.");
  }
});
