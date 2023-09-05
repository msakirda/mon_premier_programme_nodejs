import {writeJsonSync, readJsonSync} from "fs-extra";
import dot from "dotenv/config"
console.log (process.argv)
if (process.argv[2]==="--help")
{
    console.log("je vais vous aider")
}
else if (process.argv[2]==="--name")
{
    console.log ( "Bonjour " , process.argv[3])
}

interface IPersonne {
    nom:string,
    prenom:string,
    age:number,
    sexe:string,
    qualite:string,
}

const p:IPersonne={
    nom:"sakirda",
    prenom:"myriam",
    age:26,
    sexe:"masculin",
    qualite:"joyeuse"
}

console. log(p)
const p2: IPersonne = { ...p,
    nom : "Laforge",
    prenom : "Thomas"
}
p2.age = 225252
console.log(p2)

writeJsonSync('./personne.json', p)
console.log(readJsonSync('./personne.json'))

console.log('env', process.env)