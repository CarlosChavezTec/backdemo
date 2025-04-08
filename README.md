
# Next.js API – SQLite CRUD

## Instrucciones

1. Instala dependencias:
```bash
npm install
```

2. Inicia el servidor:
```bash
npm run dev
```

3. Endpoints disponibles:

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
```json
{
  "name": "Luis",
  "email": "luis@example.com"
}
```
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

## Base de datos
Se genera automáticamente un archivo `users.db`.

## Debug
Incluye configuración `.vscode/launch.json` para debuggear desde VS Code.

npm install -g @railway/cli
railway login --browserless
railway link
git add .railway/project.json