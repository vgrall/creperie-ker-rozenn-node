import query from "../database.js";

export default (req, res) => {
  query(
    "SELECT UPPER(name) 'name', price FROM menuItems WHERE type = 'GLT' ORDER BY price ASC",
    [],
    (error, result) => {
      if (error) {
        console.error(`Erreur lors de l'exécution de la requête ${error}`);
        res.status(500).send("Erreur serveur");
        return;
      }
      res.render("galetteCarte", { galettes: result });
    }
  );
};
