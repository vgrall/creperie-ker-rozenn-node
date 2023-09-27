import express from "express";
import router from "./router.js";
import { crepeCarte } from "./public/javascript/crepeCarte.js"; // Importe les données de crepeCarte.js

const PORT = 3000;
const app = express();

app.set("view engine", "ejs"); // Définit le moteur de modèle EJS
app.set("views", "./views"); // Définit le répertoire des vues

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(router);

app.get("/crepe", (req, res) => {
  res.render("crepeCarte", { crepeCarte });
  console.log("la vue crepeCarte.ejs est renvoyée");
});

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur : http://localhost:${PORT}`);
});
