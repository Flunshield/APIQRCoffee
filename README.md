# Scripts disponibles

Avant de lancer le projet, merci de lancer l'installation des packages suivant :

### Lancer le serveur de dev
#### Avec les logs
````
docker compose up
````
#### En mode détaché
````
docker compose up -d
````
#### Pour installer des dépendances
Ce mode va lancer l'image, vous pourrez réaliser les npm install...
````
docker compose run -it app bash
````
##### Pour quitter le mode interractif
````
exit
````

### Migration Mongo
```
migrate-mongo create nom_migation (pour crée une migration)
migrate-mongo up pour monter la migration
migrate-mongo down pour descendre la migration
 
```
### Volume Mongo (Docker)
```
Rename le .env.example en .env et modifier les variables d'environnements
exécuter docker compose up -d 
```

### installer le realm keycloak
```
0 - Décommenté les lignes du docker-compose pour keycloak
1 - Ouvrez le panel admin depuis l'url dédier a keycloak
2 - Créer un realm et au lieu de saisir un nom, importer le fichier realm-export.json
```
