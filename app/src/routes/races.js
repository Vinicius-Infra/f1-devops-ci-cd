const express = require("express");
const router = express.Router();

// Listar todas as corridas
router.get("/", (req, res) => {
  res.json({ races: ["GP de Mônaco", "GP da Itália", "GP de Interlagos"] });
});

// Buscar corrida por ID (simulação)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `Corrida ${id}` });
});

module.exports = router;
