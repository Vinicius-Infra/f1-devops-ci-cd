const express = require("express");
const router = express.Router();

// Listar todos os pilotos
router.get("/", (req, res) => {
  res.json({ drivers: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc"] });
});

// Buscar piloto por ID (simulação)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `Piloto ${id}` });
});

module.exports = router;
