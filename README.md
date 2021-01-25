# api-wel

L'API fonctionne intégralement à l'aide de requête HTTP (Hypertext Transfer Protocol).
 > Voir la doc mozilla sur les [méthodes de requête HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode)

## Accès à l'API

L'adresse pour acceder à l'API peut être un nom de domaine classique ou une adresse IP. On suppose pour l'exemple que l'API est héberger chez ruche.com

 > Pour envoyer une requête HTTP a ruche.com on utilise donc la syntaxe http://ruche.com

Chaque route sera accessible avec un / après le terme précédent.

> Exemple pour acceder à la route data : http://ruche.com/data 

## Poster une donnée

Les données à traiter pour le moment sont la température exterieure, l'humidité exterieure et le poids de la ruche.

Ces trois données sont donc nécessaires pour l'enregistrement des données. Si une des données est manquante le serveur répond avec un code [400](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/400) Bad Request.

Tout autre erreur entraînera un code [500](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/500) Internal Server Error.

Pour poster une donnée la requête doit être envoyée avec une méthode __POST__ sur la route __data__.
Les données à enregistrer doivent être transmise dans le corps de la requête en suivant le format JSON. Le texte de données JSON doit être composé de 3 élements :
* Le poids : weight
* La temperature : temp
* L'humidité : humidity

Ces données sont toutes des nombres.

Exemple de requête pour la sauvegarde de donnée :

```
adresse : http://ruche.com/data
méthode : POST
corps :

{
    "weight": 65.15,
    "temp": 15.3,
    "humidity": 85
}
```
Si l'enregistrement s'est bien déroulé le code retourné sera [200](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/201) Created.


## Récuperer les données

* ### Récuperer toutes les données
    * Route : __data__
    * Méthode : __GET__
    * Corps : ∅
    * Exemple : http://ruche.com/data

* ### Récuperer une donnée
    * Route : __data__/id
    * Méthode : __GET__
    * Corps : ∅
    * Exemple : http://ruche.com/data/600f206157dc031eb75ddb7e

Code | Signification
------------ | -------------
[404](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/404) Note Found | donnée introuvable
[200](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/200) OK | La requête à abouti

## Supprimer une données

* Route : __data__/id
* Méthode : __DELETE__
* Corps : ∅
* Exemple : http://ruche.com/data/600f206157dc031eb75ddb7e

Code | Signification
------------ | -------------
[500](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/500) Internal Server Error | Erreur par défaut
[204](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/204) No Content | La donnée à bien été supprimée
