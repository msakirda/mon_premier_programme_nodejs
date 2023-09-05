## La création du setup

J'ai créer un dossier que j'ai appelé " mon_premier_programme-nodejs"
puis à l'interieur j'ai effectuer les commandes suivantes : 
        - npm init (j'ai fait entrée jusqu'au point ou j'ai inscris la commande dist/index.ts)
        - j'ai saisie dans le terminale : npm install --save-dev concurrently typescript nodemon @types/node
        - Puis pour ajouter les commandes au packages.json j'ai ouvert le fichier et donner : "dev": "concurrently -k -n "Typescript,Node" -p "[{name}]" -c "blue,green" "tsc --watch" "nodemon dist/index.js"",
"start": "tsc && node dist/index.js"