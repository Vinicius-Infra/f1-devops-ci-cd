require("dotenv").config();
const express = require("express");
const { init } = require("./db");

// Rotas
const driversRoutes = require("./routes/drivers");
const racesRoutes   = require("./routes/races");
const teamsRoutes   = require("./routes/teams");

const app = express();
app.use(express.json());

// Healthcheck
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "f1-api" });
});

// Rotas da API
app.use("/drivers", driversRoutes);
app.use("/races", racesRoutes);
app.use("/teams", teamsRoutes);

// Porta configurável via .env
const port = process.env.PORT || 3000;

// Inicializa banco e sobe servidor
init()
  .then(() => {
    app.listen(port, () => {
      console.log(`🏎️ F1 API running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to initialize database", err);
    process.exit(1);
  });
