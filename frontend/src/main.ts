import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <main>
      <h1>fastapi-vite-template</h1>
      <p>Vite + TypeScript frontend is up and running.</p>
    </main>
  `;
}
