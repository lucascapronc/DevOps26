## Prérequis

- Windows 10/11
- Visual Studio Code
- Node.js LTS

Vérifier l'installation :

```powershell
node -v
npm -v
```

---

## Création du projet

Créer un dossier puis l'ouvrir dans VS Code :

```powershell
mkdir ping-api
cd ping-api
```

Initialiser le projet Node.js :

```powershell
npm init -y
```

---

## Structure du projet

```text
ping-api/
│
├── package.json
└── server.js
```

---

## Lancement du serveur

### Port par défaut (3000)

```powershell
node server.js
```

Résultat :

```text
Server listening on port 3000
```

### Port personnalisé

```powershell
$env:PING_LISTEN_PORT=8080
node server.js
```

Résultat :

```text
Server listening on port 8080
```

---

## Tests de l'API

### Test simple

```powershell
curl.exe http://localhost:3000/ping
```

### Test avec un header personnalisé

```powershell
curl.exe http://localhost:3000/ping -H "X-Test: demo"
```

---

## Exemple de réponse

```json
{
  "host": "localhost:3000",
  "user-agent": "curl/8.0.1",
  "accept": "*/*",
  "x-test": "demo"
}
```

---

## Gestion des erreurs

Toute route autre que `/ping` retourne :

```json
{
  "error": "Not Found"
}
```

avec le code HTTP :

```text
404 Not Found
```

---

## Technologies utilisées

- Node.js
- Module natif `http`

Aucune dépendance externe n'est nécessaire.