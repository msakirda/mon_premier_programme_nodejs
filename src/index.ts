import {writeJsonSync, readJsonSync} from "fs-extra"; // importe des fonction qui lise et ecrivent les fichier JSON
import dot from "dotenv/config" // charge les variables d'env a partir du fichier .env
console.log (process.argv) // affiche les arguments dans la ligne de commande

// verifie si l'argument dans la ligne de commande c'est --help
if (process.argv[2]==="--help")
{
    console.log("je vais vous aider")
}

// verifie si l'argument dans la ligne de commande c'est --name
else if (process.argv[2]==="--name")
{
    console.log ( "Bonjour " , process.argv[3])
}

// définit l'inteface d'une personne
interface IPersonne {
    nom:string,
    prenom:string,
    age:number,
    sexe:string,
    qualite:string,
}

// crée un objet p de type Ipersonne
const p:IPersonne={
    nom:"sakirda",
    prenom:"myriam",
    age:26,
    sexe:"masculin",
    qualite:"joyeuse"
}

console. log(p) // affiche l'objet p

// crée un objet p2 et modifie les valeur du nm et du prénom
const p2: IPersonne = { ...p,
    nom : "Laforge",
    prenom : "Thomas"
}
p2.age = 225252 // modifie p2
console.log(p2) // affiche p2

writeJsonSync('./personne.json', p) // lit le contenu de personne.json
console.log(readJsonSync('./personne.json'))

console.log('env', process.env)

import express from 'express' //importe le framework express
import { error } from "console";
const app = express() // crée l'application express
const port = 3000 // defini le port

app.get('/date', (req, res) => { //crée la route date
    const currentdate = new Date (); // prend la date actuelle
    console.log ('date:', currentdate); // l'affiche dans la console
    res.send(JSON.stringify({Date: currentdate })); // renvoie la date
})

app.get('/', (req, res) => { // route page d'acceuil
    res.send('date myriam  '); // renvoie réponse
})

app.get('/thomas', (req, res) => { // crée la route thomas
    const thomas = { name: 'thomas' }; // crée l'objet thomas
    console.log('name', thomas.name); //affiche thmas dans la console
    res.send(JSON.stringify({ Name: thomas.name })); // renvoie thomas
  });

  app.get('/files', (req, res) => { // créee la route files
    const fileContent = 'Hello, world!'; // ce que le fichier contiens 
    const fileName = 'toto.txt'; // nom du fichier
    const fs = require('fs') // import fs pour gérer le fichier
    fs.writeFileSync(fileName, fileContent); // ecrit le contenue dand le fichier en synchronisant
    console.log('ok ouvert') //affiche dans la console
    res.send('ok') // renvoie le message
  });

  // ecoute les requetes sur le port specifier
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
