// import crepeCarte from "../public/javascript/crepeCarte.js";
// export default (req, res) => res.render("crepeCarte", { crepeCarte });

import query from "../database.js";
import crepeCarte from "../public/javascript/crepeCarte.js";

export default (req, res) => {
  query(
    "SELECT UPPER(name) 'name', price FROM menuItems WHERE type = 'CRP'",
    [],
    (error, result) => {
      if (error) {
        console.error(`Erreur lors de l'exécution de la requête ${error}`);
        res.status(500).send("Erreur serveur");
        return;
      }
      res.render("crepeCarte", { crepeCarte: result });
    }
  );
};
