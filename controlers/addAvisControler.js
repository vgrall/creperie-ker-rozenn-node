import query from "../database.js";
import { v4 } from "uuid";

export default (req, res) => {
  console.log("POST /avis");
  console.log(req.body);

  let photo = req.body.photo;
  console.log("la photo : ", photo);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const comment = req.body.comment;
  const satisfaction = req.body.satisfaction;
  const id = v4();

  // tester si le champ photo est vide et le mettre à undifined
  if (photo.trim() == "") {
    photo = "/images/avatarForm.png";
  }

  query(
    "INSERT INTO AVIS_CLIENTS (id, firstName, lastName, email, comment, satisfaction, photo) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [id, firstName, lastName, email, comment, satisfaction, photo],
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
