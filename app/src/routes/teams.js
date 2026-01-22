const express = require("express");
const router = express.Router();

// "Banco de dados" em memória
let teams = [
  { id: 1, name: "Mercedes", country: "Alemanha" },
  { id: 2, name: "Red Bull", country: "Áustria" },
  { id: 3, name: "Ferrari", country: "Itália" }
];

// 🔹 LISTAR TODAS AS EQUIPES (READ)
router.get("/", (req, res) => {
  res.json(teams);
});

// 🔹 BUSCAR EQUIPE POR ID (READ)
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const team = teams.find(t => t.id === id);

  if (!team) {
    return res.status(404).json({ error: "Equipe não encontrada" });
  }

  res.json(team);
});

// 🔹 CRIAR NOVA EQUIPE (CREATE)
router.post("/", (req, res) => {
  const { name, country } = req.body;

  if (!name || !country) {
    return res
      .status(400)
      .json({ error: "Nome e país são obrigatórios" });
  }

  const newTeam = {
    id: teams.length ? teams[teams.length - 1].id + 1 : 1,
    name,
    country
  };

  teams.push(newTeam);
  res.status(201).json(newTeam);
});

// 🔹 ATUALIZAR EQUIPE (UPDATE)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, country } = req.body;

  const team = teams.find(t => t.id === id);

  if (!team) {
    return res.status(404).json({ error: "Equipe não encontrada" });
  }

  if (!name || !country) {
    return res
      .status(400)
      .json({ error: "Nome e país são obrigatórios" });
  }

  team.name = name;
  team.country = country;

  res.json(team);
});

// 🔹 REMOVER EQUIPE (DELETE)
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = teams.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Equipe não encontrada" });
  }

  const removed = teams.splice(index, 1);
  res.json({
    message: "Equipe removida com sucesso",
    team: removed[0]
  });
});

module.exports = router;
