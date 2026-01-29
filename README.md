# Site de Otavio — Deploy

Este repositório contém um site estático (HTML/CSS/JS). Abaixo estão instruções para publicar no Firebase Hosting (Google) e uma alternativa usando GitHub Pages.

**Publicar no Firebase Hosting (recomendado para link público do Google)**

1. Instale o Firebase CLI (requer Node.js):

```bash
npm install -g firebase-tools
```

2. Faça login na sua conta Google:

```bash
firebase login
```

3. Dentro da pasta do site (esta pasta), inicialize o hosting (escolha projeto existente ou crie um novo):

```bash
firebase init hosting
```

- Quando perguntado por `public directory`, informe `.` (ponto) ou `public` conforme sua preferência.
- Escolha `Single-page app` = `Yes` se for uma SPA.

4. Ajuste `firebase.json` e `.firebaserc` se necessário (o `.firebaserc` tem `your-firebase-project-id` como placeholder).

5. Faça o deploy:

```bash
firebase deploy --only hosting
```

Ao finalizar, o CLI exibirá a URL pública do Firebase (ex: `https://your-project.web.app`) — esse é o link para divulgar.

---

**Alternativa: GitHub Pages**

1. Crie um repositório no GitHub e conecte este diretório local.

```bash
git init
git add .
git commit -m "Site inicial"
# criar repositório remoto no GitHub e então:
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

2. No GitHub, vá em `Settings` → `Pages` e selecione a branch `main` e a pasta `/ (root)` para publicar.

3. O GitHub Pages fornecerá um link público (ex: `https://seu-usuario.github.io/seu-repo`).

---

Se quiser, eu posso:
- Atualizar `.firebaserc` com o ID do projeto (se você me fornecer).
- Inicializar um repo Git local e criar um `gh-pages` branch com um deploy automático.
- Gerar um favicon simples.

Quer que eu gere um favicon e atualize `.firebaserc` com um ID de projeto (me informe o ID)?
