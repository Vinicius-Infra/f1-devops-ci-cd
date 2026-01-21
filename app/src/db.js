// src/db.js

async function init() {
  // Simula delay de conexão com banco
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("✅ Banco inicializado (simulação)");
}

module.exports = { init };
