// server.js
import express from "express";

import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

// Utiliser cors pour permettre les requêtes cross-origin
app.get("/");
// Configurer le middleware de proxy
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://kf.kobotoolbox.org",
    changeOrigin: true,
    pathRewrite: {
      "/api": "", // Supprimer /api du début de chaque requête
    },
  })
);

app.listen(PORT, () => {
  console.log(`Serveur proxy en cours d'exécution sur le port ${PORT}`);
});
