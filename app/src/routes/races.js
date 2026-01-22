const express = require("express");
const router = express.Router();

// "Banco de dados" em memória
let races = [
  { id: 1, name: "GP de Mônaco", location: "Mônaco" },
  { id: 2, name: "GP da Itália", location: "Monza" },
  { id: 3, name: "GP de Interlagos", location: "São Paulo" }
];

// 🔹 LISTAR TODAS AS CORRIDAS (READ)
router.get("/", (req, res) => {
  res.json(races);
});

// 🔹 BUSCAR CORRIDA POR ID (READ)
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const race = races.find(r => r.id === id);

  if (!race) {
    return res.status(404).json({ error: "Corrida não encontrada" });
  }

  res.json(race);
});

// 🔹 CRIAR NOVA CORRIDA (CREATE)
router.post("/", (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res
      .status(400)
      .json({ error: "Nome e local são obrigatórios" });
  }

  const newRace = {
    id: races.length ? races[races.length - 1].id + 1 : 1,
    name,
    location
  };

  races.push(newRace);
  res.status(201).json(newRace);
});

// 🔹 ATUALIZAR CORRIDA (UPDATE)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, location } = req.body;

  const race = races.find(r => r.id === id);

  if (!race) {
    return res.status(404).json({ error: "Corrida não encontrada" });
  }

  if (!name || !location) {
    return res
      .status(400)
      .json({ error: "Nome e local são obrigatórios" });
  }

  race.name = name;
  race.location = location;

  res.json(race);
});

// 🔹 REMOVER CORRIDA (DELETE)
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = races.findIndex(r => r.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Corrida não encontrada" });
  }

  const removed = races.splice(index, 1);
  res.json({
    message: "Corrida removida com sucesso",
    race: removed[0]
  });
});

module.exports = router;
