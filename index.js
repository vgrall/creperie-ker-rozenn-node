import express from "express";
import router from "./router.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3001;
const app = express();

app.set("view engine", "ejs"); // Définit le moteur de modèle EJS
app.set("views", "./views"); // Définit le répertoire des vues

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur : http://localhost:${PORT}`);
});
