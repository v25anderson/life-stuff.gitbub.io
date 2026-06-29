import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minha Vida" },
      { name: "description", content: "Diário pessoal, tracker de progresso e sincronização com Google Drive." },
      { property: "og:title", content: "Minha Vida" },
      { property: "og:description", content: "Diário pessoal, tracker de progresso e sincronização com Google Drive." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Preserva o hash (token OAuth do Google) ao redirecionar
    const hash = window.location.hash || "";
    window.location.replace("/minha-vida.html" + hash);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f6f5fa",
        color: "#1d1a2f",
        fontFamily: "system-ui, sans-serif",
        fontSize: 14,
      }}
    >
      Carregando…
    </div>
  );
}
