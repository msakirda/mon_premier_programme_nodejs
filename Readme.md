
# La création du SETUP

créer le repository sur github
1- npm init

Ensuite définir : 
    Nom du projet : mon-premier-programme-nodejs
    entry point : dist/index.js

2- npm install --save-dev concurrently typescript nodemon @types/node

3- ajouter les commandes au package.json
    "dev": "concurrently -k -n \"Typescript,Node\" -p \"[{name}]\" -c \"blue,green\" \"tsc --watch\" \"nodemon dist/index.js\"",
    "start": "tsc && node dist/index.js"
4- npx tsc --init
    {
        "compilerOptions": {
            "module": "commonjs",
            "esModuleInterop": true,
            "outDir": "dist",
            "target": "es6",
            "strict": true
        },
        "include": [
            "src/**/*"
        ]
    }
5- crée un dossier src et crée dedans un fichier index.ts
6- git init
7- git ignore node_modules et dist
8- git add .
9- git commit -m "Initial commit"
10- git remote add origin

