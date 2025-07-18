# 🌐 Corso Interattivo Kubernetes

Un corso interattivo in React + Tailwind per imparare Kubernetes: teoria, laboratorio e quiz per ogni modulo!

🔗 **[Visita il corso online](https://pieranto-mco.github.io/k8s-interactive-course/)**

## 🚀 Avvio locale

1. Clona la repo:

   ```bash
   git clone https://github.com/pieranto-mco/k8s-interactive-course.git
   cd k8s-interactive-course
   ```

2. Installa le dipendenze:

   ```bash
   pnpm install
   ```

3. Avvia il server di sviluppo:

   ```bash
   pnpm run dev
   ```

4. Apri il browser su `http://localhost:5173`

## 📦 Build di produzione

Per creare una build di produzione:

```bash
pnpm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

## 🚀 Deployment automatico

Il progetto è configurato per il deployment automatico su GitHub Pages tramite GitHub Actions:

- **Trigger**: Ogni push sul branch `main`
- **Pipeline**: Build automatico con pnpm + deployment su GitHub Pages
- **URL**: [https://pieranto-mco.github.io/k8s-interactive-course/](https://pieranto-mco.github.io/k8s-interactive-course/)

### Configurazione GitHub Pages

1. Vai su GitHub → Repository → Settings → Pages
2. Seleziona **Source**: "GitHub Actions"
3. La pipeline si attiverà automaticamente ad ogni push

## 🛠️ Stack tecnologico

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS 4
- **Build Tool**: Vite 7
- **Deployment**: GitHub Pages + GitHub Actions
- **Package Manager**: pnpm
