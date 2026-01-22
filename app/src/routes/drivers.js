const express = require("express");
const router = express.Router();

// "Banco de dados" em memória
let drivers = [
  { id: 1, name: "Lewis Hamilton" },
  { id: 2, name: "Max Verstappen" },
  { id: 3, name: "Charles Leclerc" }
];

// 🔹 LISTAR TODOS OS PILOTOS (READ)
router.get("/", (req, res) => {
  res.json(drivers);
});

// 🔹 BUSCAR PILOTO POR ID (READ)
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find(d => d.id === id);

  if (!driver) {
    return res.status(404).json({ error: "Piloto não encontrado" });
  }

  res.json(driver);
});

// 🔹 CRIAR NOVO PILOTO (CREATE)
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  const newDriver = {
    id: drivers.length ? drivers[drivers.length - 1].id + 1 : 1,
    name
  };

  drivers.push(newDriver);
  res.status(201).json(newDriver);
});

// 🔹 ATUALIZAR PILOTO (UPDATE)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const driver = drivers.find(d => d.id === id);

  if (!driver) {
    return res.status(404).json({ error: "Piloto não encontrado" });
  }

  if (!name) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  driver.name = name;
  res.json(driver);
});

// 🔹 REMOVER PILOTO (DELETE)
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = drivers.findIndex(d => d.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Piloto não encontrado" });
  }

  const removed = drivers.splice(index, 1);
  res.json({ message: "Piloto removido com sucesso", driver: removed[0] });
});

module.exports = router;

