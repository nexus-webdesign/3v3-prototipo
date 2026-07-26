import React, { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  CalendarClock,
  ChartNoAxesCombined,
  ChartSpline,
  CloudSun,
  Cpu,
  Cylinder,
  Factory,
  FlaskConical,
  Leaf,
  MapPinned,
  RadioTower,
  RouteOff,
  SatelliteDish,
  Settings2,
  Sprout,
  UsersRound,
} from "lucide-react";

const transitionAreas = [
  {
    icon: Cpu,
    title: "Automação",
    text: "Controle inteligente de válvulas, bombas, poços, reservatórios e sistemas de irrigação.",
  },
  {
    icon: SatelliteDish,
    title: "Sensoriamento",
    text: "Monitoramento do solo, da água e das condições agrometeorológicas em tempo real.",
  },
  {
    icon: ChartSpline,
    title: "Gestão Inteligente",
    text: "Dados integrados para acompanhar a operação e tomar decisões com mais precisão.",
  },
];

const solutions = [
  {
    title: "Gestão e automação da irrigação",
    text: "Programação e controle de válvulas, bombas e setores de irrigação, com acompanhamento da operação em tempo real.",
  },
  {
    title: "Telemetria da captação de água",
    text: "Monitoramento e acionamento de bombas, poços e pontos de captação para maior segurança e controle hídrico.",
  },
  {
    title: "Telemetria e gestão da reservação de água",
    text: "Acompanhamento de níveis, volumes e condições dos reservatórios, com possibilidade de acionamentos automatizados.",
  },
  {
    title: "Gestão e automação da fertirrigação",
    text: "Controle preciso da aplicação de fertilizantes, integração com a irrigação e operação em taxas variáveis.",
  },
  {
    title: "Sensoriamento de variáveis agrometeorológicas",
    text: "Coleta de dados do solo, clima, pressão, condutividade e demais variáveis importantes para o manejo.",
  },
  {
    title: "Recomendações de manejo de irrigação",
    text: "Históricos, indicadores e informações integradas para apoiar decisões mais eficientes sobre quando e quanto irrigar.",
  },
];

const solutionIcons = [
  Settings2,
  RadioTower,
  Cylinder,
  FlaskConical,
  CloudSun,
  ChartNoAxesCombined,
];

const equipment = [
  {
    code: "DIR",
    title: "Dispositivo Inteligente a Rádio",
    text: "Comunicação em rede mesh para controle de válvulas, bombas, poços e reservatórios, integração com sensores e registro de dados.",
    image: "/assets/equipment-dir.webp",
    alt: "Dispositivo Inteligente a Rádio da 3v3 conectado ao sistema de automação da irrigação",
  },
  {
    code: "FIR",
    title: "Fertirrigação Inteligente a Rádio",
    text: "Controle da aplicação de fertilizantes, operação em taxas variáveis e integração com todo o ecossistema 3v3.",
    image: "/assets/equipment-fir.webp",
    alt: "Conjunto de equipamentos FIR da 3v3 instalado em uma central de fertirrigação",
  },
  {
    code: "EMR",
    title: "Estação de Monitoramento a Rádio",
    text: "Acompanhamento de variáveis climáticas e ambientais importantes para o planejamento do manejo.",
    image: "/assets/equipment-emr.webp",
    alt: "Estação de Monitoramento a Rádio instalada em área agrícola",
  },
  {
    code: "ACIONAMENTO",
    title: "Automação de inversores",
    text: "Integração de inversores de frequência para acionamento preciso e monitoramento da pressão da operação.",
    image: "/assets/equipment-inverter.webp",
    alt: "Painel com inversores de frequência conectado à plataforma de monitoramento 3v3",
  },
  {
    code: "TELEMETRIA",
    title: "Captação e reservação de água",
    text: "Monitoramento de captações, níveis e volumes para uma gestão hídrica mais segura e conectada.",
    image: "/assets/equipment-reservoir.webp",
    alt: "Equipamento de telemetria 3v3 com painel solar instalado junto a um canal de captação de água",
  },
];

const benefits = [
  "Controle remoto da operação",
  "Decisões apoiadas por dados",
  "Uso mais eficiente dos recursos",
  "Redução de deslocamentos e tarefas manuais",
  "Maior previsibilidade operacional",
  "Tecnologia escalável para diferentes culturas",
];

const benefitIcons = [
  RadioTower,
  ChartNoAxesCombined,
  Leaf,
  RouteOff,
  CalendarClock,
  Sprout,
];

const successItems = [
  "Atendimento presencial e remoto",
  "Treinamentos para as equipes",
  "Manutenção preventiva",
  "Consultoria especializada",
  "Acompanhamento contínuo",
  "Suporte focado no sucesso da operação",
];

const clients = [
  { src: "/assets/client-citrosuco.png", alt: "Citrosuco", className: "citrosuco" },
  { src: "/assets/client-ibacem.png", alt: "Ibacem", className: "ibacem" },
  { src: "/assets/client-fazenda-nova-neruda.png", alt: "Fazenda Nova Neruda", className: "neruda" },
  { src: "/assets/client-governo-ceara.png", alt: "Governo do Ceará", className: "ceara" },
  { src: "/assets/client-clorofila.png", alt: "Clorofila", className: "clorofila" },
  { src: "/assets/client-agricola-famosa.png", alt: "Agrícola Famosa", className: "famosa" },
  { src: "/assets/client-dinc.png", alt: "Distrito de Irrigação Nilo Coelho", className: "dinc" },
  { src: "/assets/client-norfruit.png", alt: "Norfruit Nordeste Frutas", className: "norfruit" },
  { src: "/assets/client-mata-fresca.png", alt: "Mata Fresca", className: "mata-fresca" },
];

function Icon({ name }) {
  const paths = {
    check: <path d="m5 12 4 4L19 6" />,
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1100,
  delay = 0,
  mobileDelay,
  observeParent = false,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectiveDelay =
      observeParent && mobileDelay !== undefined && window.matchMedia("(max-width: 650px)").matches
        ? mobileDelay
        : delay;
    let frame;
    let timer;
    let observer;
    let started = false;
    const startCounter = () => {
      if (started) return;
      started = true;
      if (reduced) {
        setDisplay(value);
        return;
      }
      timer = window.setTimeout(() => {
        setDisplay(0);
        const start = performance.now();
        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          } else {
            setDisplay(value);
          }
        };
        frame = requestAnimationFrame(animate);
      }, effectiveDelay);
    };

    const observedNode = observeParent ? node.closest(".about-visual") : node;
    if (!observedNode) return;

    if (observeParent) {
      if (observedNode.classList.contains("field-visible") || reduced) {
        startCounter();
      } else {
        observedNode.addEventListener("field-insights-visible", startCounter, { once: true });
      }
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          startCounter();
          observer.disconnect();
        },
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(observedNode);
    }

    return () => {
      observer?.disconnect();
      observedNode.removeEventListener("field-insights-visible", startCounter);
      if (timer) window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [delay, duration, mobileDelay, observeParent, value]);

  return (
    <strong ref={ref}>
      {prefix && <span className="counter-prefix">{prefix}</span>}
      <span className="counter-value">
        {display.toLocaleString("pt-BR")}
        {suffix}
      </span>
    </strong>
  );
}

function ClientSet({ duplicate = false }) {
  return (
    <div className="logo-set" aria-hidden={duplicate || undefined}>
      {clients.map((client) => (
        <div
          className={`client-logo ${client.className}`}
          key={`${duplicate ? "duplicate-" : ""}${client.alt}`}
          tabIndex={duplicate ? -1 : 0}
          aria-label={duplicate ? undefined : client.alt}
        >
          <img src={client.src} alt={duplicate ? "" : client.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("Nome")?.toString().trim() || "";
    const company = data.get("Empresa")?.toString().trim() || "";
    const email = data.get("E-mail")?.toString().trim() || "";
    const phone = data.get("Telefone")?.toString().trim() || "";
    const message = data.get("Mensagem")?.toString().trim() || "";
    const subject = `Contato pelo site — ${company || name}`;
    const body = [
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `E-mail: ${email}`,
      `Telefone: ${phone}`,
      "",
      "Mensagem:",
      message,
    ].join("\n");

    window.location.href = `mailto:contato@3v3.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const revealTimers = new Set();
    const revealNode = (node) => {
      if (node.classList.contains("is-visible")) return;
      node.classList.add("is-visible");
      const delay = Number.parseInt(window.getComputedStyle(node).getPropertyValue("--delay"), 10) || 0;
      const timer = window.setTimeout(() => {
        node.classList.remove("will-reveal");
        revealTimers.delete(timer);
      }, 950 + delay);
      revealTimers.add(timer);
    };
    nodes.forEach((node) => node.classList.add("will-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNode(entry.target);
            observer.unobserve(entry.target);
            visualObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    const visualObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNode(entry.target);
            visualObserver.unobserve(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 12% 0px" }
    );
    nodes.forEach((node) => {
      const isVisualReveal =
        node.matches(".equipment-grid article, .production-feature, .management-screen, .operation-image, .logo-carousel") ||
        Boolean(node.querySelector("img"));
      (isVisualReveal ? visualObserver : observer).observe(node);
    });
    requestAnimationFrame(() => {
      document.querySelectorAll(".hero [data-reveal]").forEach(revealNode);
    });
    return () => {
      observer.disconnect();
      visualObserver.disconnect();
      revealTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const visual = document.querySelector(".about-visual");
    const metrics = visual?.querySelector(".institutional-metrics");
    if (!visual || !metrics) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      visual.classList.add("field-visible");
      metrics.classList.add("is-visible");
      metrics.classList.add("entrance-complete");
      return;
    }
    visual.classList.add("field-ready");
    metrics.classList.add("metrics-ready");
    let imageTimer;
    let completionTimer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        visual.classList.add("field-visible");
        metrics.classList.add("is-visible");
        visual.dispatchEvent(new Event("field-insights-visible"));
        imageTimer = window.setTimeout(() => {
          visual.classList.add("field-image-complete");
        }, 1200);
        completionTimer = window.setTimeout(() => {
          metrics.classList.add("entrance-complete");
        }, 2300);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -18% 0px" }
    );
    observer.observe(visual);
    return () => {
      observer.disconnect();
      if (imageTimer) window.clearTimeout(imageTimer);
      if (completionTimer) window.clearTimeout(completionTimer);
    };
  }, []);

  useEffect(() => {
    const differentials = document.querySelector(".institutional-differentials");
    if (!differentials) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      differentials.classList.add("is-visible");
      return;
    }
    differentials.classList.add("differentials-ready");
    let completionTimer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        differentials.classList.add("is-visible");
        completionTimer = window.setTimeout(() => {
          differentials.classList.add("entrance-complete");
        }, 1250);
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(differentials);
    return () => {
      observer.disconnect();
      if (completionTimer) window.clearTimeout(completionTimer);
    };
  }, []);

  useEffect(() => {
    const grid = document.querySelector(".solution-grid");
    if (!grid) return;
    const cards = [...grid.querySelectorAll(".solution-card")];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }
    const completionTimers = new Set();
    cards.forEach((card) => card.classList.add("solution-ready"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target;
          card.classList.add("is-visible");
          const timer = window.setTimeout(() => {
            card.classList.remove("solution-ready", "is-visible");
            completionTimers.delete(timer);
          }, 2050);
          completionTimers.add(timer);
          observer.unobserve(card);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 8% 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
      completionTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const cards = [...document.querySelectorAll(".equipment-grid article")];
    if (!cards.length) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const completionTimers = new Set();
    cards.forEach((card) => card.classList.add("equipment-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target;
          card.classList.add("is-visible");
          const delay =
            Number.parseInt(
              window.getComputedStyle(card).getPropertyValue("--equipment-entry-delay"),
              10
            ) || 0;
          const timer = window.setTimeout(() => {
            card.classList.remove("equipment-ready");
            completionTimers.delete(timer);
          }, 1400 + delay);
          completionTimers.add(timer);
          observer.unobserve(card);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -12% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
      completionTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeMenu);
    return () => document.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#inicio" className="brand" aria-label="3v3 Tecnologia — início" onClick={() => setMenuOpen(false)}>
            <img src="/assets/logo-orange.png" alt="3v3 Tecnologia" />
          </a>
          <nav id="menu-mobile" className={`main-menu ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            {[
              ["Início", "#inicio"],
              ["A 3v3", "#sobre"],
              ["Soluções", "#solucoes"],
              ["Tecnologia", "#tecnologia"],
              ["Clientes", "#clientes"],
              ["Sucesso do Cliente", "#sucesso"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="header-cta" href="mailto:contato@3v3.com.br">
            Fale com a 3v3 <Icon name="arrow" />
          </a>
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <div className="wrap hero-inner" data-reveal>
            <div className="hero-copy">
              <h1>Do controle da água à <em>inteligência da operação.</em></h1>
              <p>Automação, telemetria, sensoriamento e manejo para uma agricultura irrigada mais eficiente, precisa e conectada.</p>
              <div className="hero-actions">
                <a className="button button-orange" href="mailto:contato@3v3.com.br">
                  Falar com um especialista <Icon name="arrow" />
                </a>
                <a className="button button-outline" href="#solucoes">Conhecer soluções</a>
              </div>
            </div>
          </div>
        </section>

        <section className="transition-bridge" aria-label="Áreas de atuação">
          <div className="wrap transition-grid">
            {transitionAreas.map(({ icon: TransitionIcon, title, text }, index) => (
              <article key={title} data-reveal style={{ "--delay": `${index * 130}ms` }}>
                <div className="transition-top">
                  <span><TransitionIcon strokeWidth={1.8} /></span>
                  <small>0{index + 1}</small>
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-light" id="sobre">
          <div className="wrap about-layout">
            <div className="about-visual">
              <img src="/assets/about-team.webp" alt="Equipe da 3v3 acompanhando uma instalação tecnológica em área agrícola" loading="lazy" />
              <span className="photo-label">TECNOLOGIA EM CAMPO</span>
              <div className="institutional-metrics" aria-label="Indicadores institucionais">
                <div>
                  <Counter value={60} prefix={"+\u00a0"} duration={1200} delay={120} mobileDelay={100} observeParent />
                  <span>fazendas automatizadas</span>
                </div>
                <div>
                  <Counter value={50} prefix={"+\u00a0"} suffix=" mil" duration={1200} delay={520} mobileDelay={500} observeParent />
                  <span>hectares atendidos</span>
                </div>
                <div>
                  <Counter value={6} prefix={"+\u00a0"} suffix=" mil" duration={1200} delay={320} mobileDelay={300} observeParent />
                  <span>dispositivos instalados</span>
                </div>
                <div>
                  <Counter value={10} prefix={"+\u00a0"} duration={1200} delay={720} mobileDelay={700} observeParent />
                  <span>culturas irrigadas</span>
                </div>
              </div>
            </div>

            <div className="section-copy" data-reveal>
              <span className="kicker">A 3v3</span>
              <h2>Tecnologia desenvolvida para a <em>realidade do campo.</em></h2>
              <p>A 3v3 é uma empresa cearense especializada em inovação tecnológica para a agricultura irrigada. Desde 2012, desenvolve soluções próprias que integram gestão, automação e sensoriamento, transformando dados do campo em decisões mais precisas.</p>
              <p>Da concepção à industrialização, a 3v3 reúne engenharia, produção, implantação e acompanhamento especializado para criar tecnologias adaptadas às necessidades reais de cada operação.</p>
              <ul className="institutional-differentials" aria-label="Diferenciais institucionais">
                <li>
                  <MapPinned aria-hidden="true" />
                  <Counter value={10} suffix=" estados" duration={1050} />
                  <span>Presença em todo o Brasil</span>
                </li>
                <li>
                  <UsersRound aria-hidden="true" />
                  <Counter value={20} prefix={"+\u00a0"} suffix=" profissionais" duration={1050} delay={110} />
                  <span>Equipe multidisciplinar</span>
                </li>
                <li>
                  <BadgeCheck aria-hidden="true" />
                  <strong>ISO 9001:2015</strong>
                  <span>Qualidade certificada</span>
                </li>
                <li>
                  <Factory aria-hidden="true" />
                  <Counter value={10} prefix={"+\u00a0"} suffix=" mil/ano" duration={1050} delay={330} />
                  <span>Capacidade produtiva de equipamentos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="orange-band">
          <div className="wrap orange-band-inner" data-reveal>
            <div>
              <span>DO CAMPO AO DADO. DO DADO À DECISÃO.</span>
              <h2>Uma operação mais conectada começa com a tecnologia certa.</h2>
            </div>
            <a className="button button-white" href="#contato">Converse com nossa equipe <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="solutions section-light" id="solucoes">
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <span className="kicker">ECOSSISTEMA DE SOLUÇÕES</span>
              <h2>Tecnologia conectada a cada etapa <em>da sua operação.</em></h2>
              <p>Gestão, controle e inteligência trabalhando juntos para uma agricultura irrigada mais eficiente.</p>
            </div>
            <div className="solution-grid">
              {solutions.map((solution, index) => {
                const SolutionIcon = solutionIcons[index];
                return (
                  <article
                    className="solution-card"
                    key={solution.title}
                  >
                    <div className="solution-card-top">
                      <span className="solution-icon" aria-hidden="true">
                        <SolutionIcon />
                      </span>
                      <span className="solution-number">0{index + 1}</span>
                    </div>
                    <h3>{solution.title}</h3>
                    <p>{solution.text}</p>
                    <a href="#contato" aria-label={`Conversar sobre ${solution.title}`}>
                      Conversar sobre esta solução <Icon name="arrow" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="technology" id="tecnologia">
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <span className="kicker">TECNOLOGIA E EQUIPAMENTOS</span>
              <h2>Um ecossistema conectado <em>do sensor à gestão.</em></h2>
              <p>Equipamentos próprios que trabalham de forma integrada para oferecer controle, telemetria e inteligência à operação.</p>
            </div>
            <div className="equipment-grid">
              {equipment.map((item, index) => (
                <article
                  className={index === 0 ? "equipment-featured equipment-card" : "equipment-card"}
                  key={item.code}
                  style={{ "--equipment-entry-delay": `${(index % 3) * 110}ms` }}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="equipment-shade" />
                  <div className="equipment-content" style={{ "--equipment-delay": `${140 + (index % 3) * 120}ms` }}>
                    <span>{item.code}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="production-feature" data-reveal>
              <div className="production-media">
                <img className="motion-gif" src="/assets/production-line.gif" alt="Linha de produção de placas eletrônicas da 3v3 em operação" loading="lazy" />
                <img className="motion-still" src="/assets/production-line-still.webp" alt="Linha de produção de placas eletrônicas da 3v3" loading="lazy" />
              </div>
              <div className="production-copy">
                <span className="kicker">DESENVOLVIMENTO E FABRICAÇÃO PRÓPRIOS</span>
                <h2>Da concepção à <em>operação no campo.</em></h2>
                <p>A 3v3 desenvolve e fabrica suas próprias soluções, reunindo engenharia, produção, integração e suporte especializado para entregar tecnologias robustas e adaptadas à agricultura irrigada.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="connected-management">
          <div className="management-overlay" />
          <div className="wrap management-layout">
            <div className="management-copy" data-reveal>
              <span className="kicker kicker-light">GESTÃO CONECTADA</span>
              <h2>Controle e informação para <em>toda a operação.</em></h2>
              <p>Acompanhe a irrigação, visualize equipamentos no mapa, consulte históricos, monitore sensores e receba informações importantes para o manejo. A plataforma 3v3 conecta campo e gestão para tornar as decisões mais rápidas, seguras e precisas.</p>
              <div className="management-benefits">
                {[
                  "Visualização interativa da fazenda",
                  "Acesso remoto às informações",
                  "Histórico de automação e sensoriamento",
                  "Monitoramento online e offline",
                  "Alertas e acompanhamento operacional",
                  "Apoio às recomendações de manejo",
                ].map((item) => <span key={item}><Icon name="check" />{item}</span>)}
              </div>
            </div>
            <div className="management-screen" data-reveal>
              <img src="/assets/gestao-conectada.webp" alt="Plataforma de gestão conectada 3v3 exibida no computador e no celular" loading="lazy" />
              <span><i /> OPERAÇÃO CONECTADA</span>
            </div>
          </div>
        </section>

        <section className="results section-light" id="resultados">
          <div className="wrap">
            <div className="section-heading centered" data-reveal>
              <span className="kicker">RESULTADOS E BENEFÍCIOS</span>
              <h2>Eficiência que se traduz <em>na operação.</em></h2>
            </div>
            <div className="result-grid" data-reveal>
              <div><Counter value={34} prefix="Até " suffix="%" /><span>de economia de água</span></div>
              <div><Counter value={25} prefix="Até " suffix="%" /><span>de economia de energia</span></div>
              <div><Counter value={22} prefix="Até " suffix="%" /><span>de redução de insumos</span></div>
              <div><Counter value={40} prefix="Até " suffix="%" /><span>de aumento de produtividade</span></div>
            </div>
            <p className="result-note">Resultados observados em operações acompanhadas pela 3v3. Os percentuais podem variar conforme cultura, estrutura, manejo e condições de cada projeto.</p>
            <div className="benefit-grid">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefitIcons[index];
                return (
                  <article key={benefit} data-reveal style={{ "--delay": `${(index % 3) * 120}ms` }}>
                    <span><BenefitIcon strokeWidth={1.8} /></span>
                    <h3>{benefit}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="operation">
          <div className="operation-image" data-reveal>
            <img
              src="/assets/technology-operation-field.webp"
              alt="Estação de monitoramento 3v3 instalada em uma plantação irrigada"
              loading="lazy"
            />
          </div>
          <div className="wrap operation-panel" data-reveal>
            <span className="kicker kicker-light">TECNOLOGIA EM OPERAÇÃO</span>
            <h2>Agrícola <em>Famosa</em></h2>
            <p className="operation-lead">Tecnologia aplicada na maior produtora de melão do mundo.</p>
            <div className="operation-stats">
              <div><Counter value={14} /><span>fazendas automatizadas</span></div>
              <div><Counter value={12} prefix="+" suffix=" mil" /><span>hectares</span></div>
              <div><Counter value={3} prefix="+" suffix=" mil" /><span>dispositivos instalados</span></div>
            </div>
            <p>A atuação da 3v3 integra automação, telemetria, sensoriamento e gestão da irrigação em uma operação de grande escala, contribuindo para um campo mais conectado, preciso e preparado para crescer.</p>
          </div>
        </section>

        <section className="clients" id="clientes">
          <div className="wrap clients-heading" data-reveal>
            <span className="kicker">QUEM CONFIA NA 3v3</span>
            <h2>Grandes operações conectadas à <em>nossa tecnologia.</em></h2>
          </div>
          <div className="logo-carousel" aria-label="Clientes da 3v3 Tecnologia" data-reveal>
            <div className="logo-track">
              <ClientSet />
              <ClientSet duplicate />
            </div>
          </div>
        </section>

        <section className="customer-success" id="sucesso">
          <div className="success-photo" role="img" aria-label="Equipe da 3v3 acompanhando sensores e dados em uma plantação" />
          <div className="success-panel" data-reveal>
            <span className="kicker kicker-light">SUCESSO DO CLIENTE</span>
            <h2>Tecnologia que evolui junto com <em>a operação.</em></h2>
            <p>Na 3v3, a entrega não termina na implantação. Nossa equipe acompanha cada operação para garantir que a tecnologia continue gerando valor ao longo do tempo.</p>
            <div className="success-list">
              {successItems.map((item) => <span key={item}><Icon name="check" />{item}</span>)}
            </div>
            <a className="button button-orange" href="#contato">Fale com nossa equipe <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="wrap contact-layout">
            <div className="contact-copy" data-reveal>
              <span className="kicker">FALE COM A 3v3</span>
              <h2>Vamos cultivar uma operação <em>mais inteligente?</em></h2>
              <p>Converse com a 3v3 e descubra como automação, sensoriamento e gestão podem transformar o controle da sua irrigação.</p>
            </div>
            <form
              className="contact-form"
              action="mailto:contato@3v3.com.br"
              method="post"
              encType="text/plain"
              onSubmit={handleContactSubmit}
              data-reveal
            >
              <div className="form-field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="Nome" type="text" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="empresa">Empresa</label>
                <input id="empresa" name="Empresa" type="text" autoComplete="organization" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="E-mail" type="email" autoComplete="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="telefone">Telefone</label>
                <input id="telefone" name="Telefone" type="tel" autoComplete="tel" required />
              </div>
              <div className="form-field form-field-wide">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="Mensagem" rows="5" required />
              </div>
              <button className="button button-orange form-submit" type="submit">
                Falar com um especialista <Icon name="arrow" />
              </button>
              <p className="form-note">Ao enviar, seu aplicativo de e-mail será aberto com a mensagem preenchida.</p>
            </form>
          </div>
        </section>

      </main>

      <footer className="institutional-footer" aria-label="Informações institucionais da 3v3 Tecnologia">
        <div className="wrap institutional-footer-inner">
          <div className="institutional-card" data-reveal>
            <a href="#inicio" className="institutional-logo" aria-label="3v3 Tecnologia — início">
              <img src="/assets/logo-white.png" alt="3v3 Tecnologia" />
            </a>

            <div className="institutional-company">
              <strong>3v3 Tecnologia Ltda.</strong>
              <address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Doca+Sales+191+Parque+Santa+Maria+Fortaleza+CE+60873-005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rua Doca Sales, 191<br />
                  Parque Santa Maria, Fortaleza - CE<br />
                  CEP 60873-005
                </a>
              </address>
            </div>

            <div className="institutional-details">
              <span><b>CNPJ:</b> 15.630.860/0001-86</span>
              <a href="tel:+558541411997"><b>Telefone:</b> +55 (85) 4141-1997</a>
              <a href="mailto:contato@3v3.com.br"><b>E-mail:</b> contato@3v3.com.br</a>
              <a href="https://www.3v3.com.br/" target="_blank" rel="noopener noreferrer"><b>Site:</b> www.3v3.com.br</a>
            </div>

            <div className="institutional-social" aria-label="Redes sociais da 3v3 Tecnologia">
              <a href="https://www.instagram.com/3v3.tecnologia/" target="_blank" rel="noopener noreferrer" aria-label="3v3 Tecnologia no Instagram"><Icon name="instagram" /></a>
              <a href="https://www.linkedin.com/company/3v3-tecnologia" target="_blank" rel="noopener noreferrer" aria-label="3v3 Tecnologia no LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>
        </div>

        <div className="institutional-legal">
          <div className="wrap institutional-legal-inner">
            <span>© 2026 3v3 Tecnologia. Todos os direitos reservados.</span>
            <a href="/?privacidade=1">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  );
}
