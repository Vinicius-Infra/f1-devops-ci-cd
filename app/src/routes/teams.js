const express = require("express");
const router = express.Router();

// Listar todas as equipes
router.get("/", (req, res) => {
  res.json({ teams: ["Mercedes", "Red Bull", "Ferrari"] });
});

// Buscar equipe por ID (simulação)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `Equipe ${id}` });
});

module.exports = router;
