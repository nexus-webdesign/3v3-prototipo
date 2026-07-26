import React from "react";
import { createRoot } from "react-dom/client";
import Site from "./Site";
import "./styles.css";

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-wrap">
        <a className="privacy-brand" href="/" aria-label="Voltar ao site da 3v3">
          <img src="/assets/logo-orange.png" alt="3v3 Tecnologia" />
        </a>
        <span className="kicker">POLÍTICA DE PRIVACIDADE</span>
        <h1>Privacidade e proteção de dados</h1>
        <p>Este site institucional apresenta informações sobre a 3v3 Tecnologia e não possui cadastro, autenticação, área administrativa ou formulário de coleta de dados.</p>
        <h2>Contato direto</h2>
        <p>Ao entrar em contato por telefone ou e-mail, os dados fornecidos serão utilizados exclusivamente para atender à solicitação e manter a comunicação relacionada aos serviços da 3v3.</p>
        <h2>Links externos</h2>
        <p>O site contém links para canais externos, como Google Maps, Instagram e LinkedIn. O tratamento de dados nesses ambientes segue as políticas próprias de cada plataforma.</p>
        <h2>Seus direitos</h2>
        <p>Para solicitar informações, correções ou exclusão de dados eventualmente fornecidos em um contato direto, escreva para <a href="mailto:contato@3v3.com.br">contato@3v3.com.br</a>.</p>
        <a className="button button-orange" href="/">Voltar ao site</a>
      </div>
    </main>
  );
}

const isPrivacy = new URLSearchParams(window.location.search).has("privacidade");

if (isPrivacy) {
  document.title = "Política de Privacidade | 3v3 Tecnologia";
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isPrivacy ? <PrivacyPage /> : <Site />}
  </React.StrictMode>
);
