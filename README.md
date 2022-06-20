# Accurate SDK

Die Accurate SDK ermöglicht die Authentifizierung und Kommunikation mit dem Backend Server mittels einer JavaScript
Library.

<details>
<summary>Initialisierung (Irrelevant für die meisten)</summary>

## Authentifizierung

```javascript
const authClient = await Accurate.AuthClient.create('<auth0-domain>', '<auth0-client-id>', '<auth0-audience>');

// == Login ==
// Nach erfolgreichem Login wird der User zu <redirect-uri> weitergeleitet. 
await authClient.authorize('<redirect-uri>');

// == Logout ==
// Nach erfolgreichem Logout wird der User zu <redirect-uri> weitergeleitet.
await authClient.logout('<redirect-uri>');

// == Authentifizierung prüfen ==
// Gibt einen boolean Wert zurück ob der User angemeldet ist.
await authClient.isAuthenticated();

// == Authentifizierungstoken ==
// Gibt den Authentifizierungstoken für die API zurück. Funktioniert nur 
// wenn der User angemeldet ist.
await authClient.getAccessToken();
```

## API Kommunikation

```javascript
const apiClient = await Accurate.ApiClient.create('<api-server-url>', '<access-token>');
```

</details>

<details>
<summary>Auf API Client zugreifen</summary>

```javascript
api.addEventListener('ready', async ({detail: apiClient}) => {
    // Hier könnt ihr dann 'apiClient' nutzen wie in den Beispielen.
});
```

</details>

<details>
<summary>User Endpoint</summary>

### User auflisten

```javascript
apiClient.user.list();
```

Output:

```json
[
  {
    "user_id": "cl10xppo5000495q73tizqgny",
    "user_name": "Fixi Hartmann",
    "user_createtime": "2022-03-29T22:33:44+0000",
    "user_updatetime": "2022-03-30T22:33:44+0000"
  },
  {
    "user_id": "cl10xppo5000394848sodmdxs",
    "user_name": "Andi Wand",
    "user_createtime": "2022-03-29T22:33:44+0000",
    "user_updatetime": "2022-03-30T22:33:44+0000"
  }
]
```

---

### Eigenen User abfragen

```javascript
apiClient.user.me();
```

Output:

```json
{
  "user_id": "cl10xppo5000495q73tizqgny",
  "user_email": "fixi@hartmann.xxx",
  "user_name": "Fixi Hartmann",
  "user_createtime": "2022-03-29T22:33:44+0000",
  "user_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### User per ID abfragen

```javascript
apiClient.user.find('<User ID>');
apiClient.user.find('cl10xppo5000495q73tizqgny');
```

Output:

```json
{
  "user_id": "cl10xppo5000495q73tizqgny",
  "user_email": "fixi@hartmann.xxx",
  "user_name": "Fixi Hartmann",
  "user_createtime": "2022-03-29T22:33:44+0000",
  "user_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### User erstellen / registrieren

```javascript
const userData = {
    user_name: 'Fixi Hartmann',
    user_email: 'fixi@hartmann.xxx'
};

apiClient.user.create(userData);
```

Output:

```json
{
  "user_id": "cl10xppo5000495q73tizqgny",
  "user_email": "fixi@hartmann.xxx",
  "user_name": "Fixi Hartmann",
  "user_createtime": "2022-03-29T22:33:44+0000",
  "user_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### User updaten

```javascript
// Hier müssen nur die Felder angegeben werden die auch geupdated werden sollen,
// in diesem Fall also nur "user_email". Könnte aber genau so "user_name" sein.
const userData = {
    user_email: 'fixi.hartmann@gmail.com'
};

apiClient.user.update(userData);
```

Output:

```json
{
  "user_id": "cl10xppo5000495q73tizqgny",
  "user_email": "fixi@hartmann.xxx",
  "user_name": "Fixi Hartmann",
  "user_createtime": "2022-03-29T22:33:44+0000",
  "user_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### User löschen

```javascript
apiClient.user.delete();
```

Output:

```json
{
  "user_id": "cl10xppo5000495q73tizqgny",
  "user_email": "fixi@hartmann.xxx",
  "user_name": "Fixi Hartmann",
  "user_createtime": "2022-03-29T22:33:44+0000",
  "user_updatetime": "2022-03-30T22:33:44+0000"
}
```

</details>

<details>
<summary>Event Endpoint</summary>

### Events auflisten

```javascript
apiClient.event.list();
```

Output:

```json
[
  {
    "event_id": "cl10xppo5000495q73tizqgny",
    "event_name": "Ein Event",
    "parcour_parcour_id": "cl10xppo5000495q73tdowmeu",
    "event_scoringsystem": "DREIPFEIL",
    "event_createtime": "2022-03-29T22:33:44+0000",
    "event_updatetime": "2022-03-30T22:33:44+0000"
  },
  ...
]
```

---

### Event per ID abfragen

```javascript
apiClient.event.find('<Event ID>');
apiClient.event.find('cl10xppo5000495q73tizqgny');
```

Output:

```json
{
  "event_id": "cl10xppo5000495q73tizqgny",
  "event_name": "Ein Event",
  "parcour_parcour_id": "cl10xppo5000495q73tdowmeu",
  "event_scoringsystem": "DREIPFEIL",
  "event_createtime": "2022-03-29T22:33:44+0000",
  "event_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Event erstellen

```javascript
const data = {
    event_name: 'Ein Event',
    scoring_system: 'DREIPFEIL',
    parcour_id: 'cl10xppo5000495q73tdowmeu'
};

apiClient.event.create(data);
```

Output:

```json
{
  "event_id": "cl10xppo5000495q73tizqgny",
  "event_name": "Ein Event",
  "parcour_parcour_id": "cl10xppo5000495q73tdowmeu",
  "event_scoringsystem": "DREIPFEIL",
  "event_createtime": "2022-03-29T22:33:44+0000",
  "event_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Event updaten

```javascript
const data = {
    event_name: 'Auch ein Event',
};

apiClient.event.update('<Event ID>', data);
apiClient.event.update('cl10xppo5000495q73tizqgny', data);
```

Output:

```json
{
  "event_id": "cl10xppo5000495q73tizqgny",
  "event_name": "Auch ein Event",
  "parcour_parcour_id": "cl10xppo5000495q73tdowmeu",
  "event_scoringsystem": "DREIPFEIL",
  "event_createtime": "2022-03-29T22:33:44+0000",
  "event_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Event löschen

```javascript
apiClient.event.delete('<Event ID>');
apiClient.event.delete('cl10xppo5000495q73tizqgny');
```

Output:

```json
{
  "event_id": "cl10xppo5000495q73tizqgny",
  "event_name": "Auch ein Event",
  "parcour_parcour_id": "cl10xppo5000495q73tdowmeu",
  "event_scoringsystem": "DREIPFEIL",
  "event_createtime": "2022-03-29T22:33:44+0000",
  "event_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Scoreboard anzeigen

```javascript
apiClient.event.scoreboard('<Event ID>');
apiClient.event.scoreboard('cl10xppo5000495q73tizqgny');
```

Output:

```json
{
  "targets": [
    "Bär",
    "Fuchs",
    "Wolf"
  ],
  "users": {
    "Spieler 1": [
      14,
      10,
      8
    ],
    "Spieler 2": [
      12,
      8,
      14
    ]
  }
}
```

---

### Treffer speichern

```javascript
apiClient.event.hit('<Event ID>', '<Target ID>', '<Welcher Schuss (1.-3.)>', '<Was getroffen wurde (1.-3.)');
apiClient.event.hit('cl10xppo5000495q73tizqgny', 'cl10xppo5000495q73tdowmeu', 2, 3);
```

Output:

```json
{
  "targets": [
    "Bär",
    "Fuchs",
    "Wolf"
  ],
  "users": {
    "Spieler 1": [
      14,
      10,
      8
    ],
    "Spieler 2": [
      12,
      8,
      14
    ]
  }
}
```

</details>

<details>
<summary>Parkour Endpoint</summary>

### Parkours auflisten

```javascript
apiClient.parcour.list();
```

Output:

```json
[
  {
    "parcour_id": "cl1xdgyh2000409l734zzbej1",
    "parcour_name": "Ein Parkour",
    "parcour_createtime": "2022-03-29T22:33:44+0000",
    "parcour_updatetime": "2022-03-30T22:33:44+0000"
  },
  ...
]
```

---

### Parkour per ID abfragen

```javascript
apiClient.parcour.find('<Parkour ID>');
apiClient.parcour.find('cl10xppo5000495q73tizqgny');
```

Output:

```json
{
  "parcour_id": "cl1xdgyh2000409l734zzbej1",
  "parcour_name": "Ein Parkour",
  "parcour_createtime": "2022-03-29T22:33:44+0000",
  "parcour_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Parkour erstellen

```javascript
const data = {
    parcour_name: 'Ein Parkour',
    targets: [
        {target_name: 'Fuchs'},
        {target_name: 'Wolf'},
        {target_name: 'Bär'}
    ]
};

apiClient.parcour.create(data);
```

Output:

```json
{
  "parcour_id": "cl1xdgyh2000409l734zzbej1",
  "parcour_name": "Ein Parkour",
  "parcour_createtime": "2022-03-29T22:33:44+0000",
  "parcour_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Parkour updaten

```javascript
const data = {
    parcour_name: 'Auch ein Parkour',
};

apiClient.parcour.update('<Parkour ID>', data);
apiClient.parcour.update('cl10xppo5000495q73tizqgny', data);
```

Output:

```json
{
  "parcour_id": "cl1xdgyh2000409l734zzbej1",
  "parcour_name": "Auch ein Parkour",
  "parcour_createtime": "2022-03-29T22:33:44+0000",
  "parcour_updatetime": "2022-03-30T22:33:44+0000"
}
```

---

### Parkour löschen

```javascript
apiClient.parcour.delete('<Parkour ID>');
apiClient.parcour.delete('cl10xppo5000495q73tizqgny');
```

Output:

```json
{
  "parcour_id": "cl1xdgyh2000409l734zzbej1",
  "parcour_name": "Auch ein Parkour",
  "parcour_createtime": "2022-03-29T22:33:44+0000",
  "parcour_updatetime": "2022-03-30T22:33:44+0000"
}
```

</details>