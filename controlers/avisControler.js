// export default (req, res) => res.render("avis", {});

import query from "../database.js";

export default (req, res) => {
  query(
    "SELECT * FROM AVIS_CLIENTS ORDER BY date_creation DESC ",
    [],
    (error, result) => {
      if (error) {
        console.error(`Erreur lors de l'exécution de la requête ${error}`);
        res.status(500).send("Erreur serveur");
        return;
      }
      res.render("avis", { result });
    }
  );
};
