import query from "../database.js";
import { v4 } from "uuid";
import formidable from "formidable";

export default (req, res) => {
  console.log("POST /avis");
  console.log(req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const comment = req.body.comment;
  const satisfaction = req.body.satisfaction;
  const id = v4();

  query(
    "INSERT INTO AVIS_CLIENTS (id, firstName, lastName, email, comment, satisfaction) VALUES (?, ?, ?, ?, ?, ?)",
    [id, firstName, lastName, email, comment, satisfaction],
    (error, result) => {
      if (error) {
        console.error(`Erreur lors de l'exécution de la requête ${error}`);
        res.status(500).send("Erreur serveur");
        return;
      }
      res.redirect("/avis");
    }
  );
};
