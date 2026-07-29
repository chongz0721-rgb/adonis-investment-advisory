"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";

type Leader = {
  id: string;
  name: string;
  title: string;
  image: string;
  education: string[];
  career: string[];
  quote: string;
  bio: string[];
};

type Article = {
  id: string;
  category: string;
  date: string;
  title: string;
  deck: string;
  body: string[];
  accent: string;
};

type Chapter = "top" | "firm" | "capabilities" | "leadership" | "insights" | "global" | "contact";

const chapterMeta: Record<Chapter, { index: string; label: string }> = {
  top: { index: "00", label: "Home" },
  firm: { index: "01", label: "Our Firm" },
  capabilities: { index: "02", label: "Capabilities" },
  leadership: { index: "03", label: "Leadership" },
  insights: { index: "04", label: "Insights" },
  global: { index: "05", label: "Global Offices" },
  contact: { index: "06", label: "Contact" },
};

const leaders: Leader[] = [
  {
    id: "adonis-yang",
    name: "Adonis Yang",
    title: "Founder & Chief Executive Officer",
    image: "/assets/adonis-yang.png",
    education: [
      "B.S., Computer & Electrical Engineering — California Institute of Technology",
      "M.S. and Ph.D., Calculus & Applied Mathematical Systems — Massachusetts Institute of Technology",
    ],
    career: [
      "Former EVP & Head of Information Markets Investment Strategy, Oracle",
      "Former Head of Global Public Affairs, Eli Lilly and Company",
      "Former Asia Pacific Investment Leader, PwC",
    ],
    quote:
      "Capital is most powerful when it sees around corners — and arrives with the operating discipline to build what comes next.",
    bio: [
      "Adonis Yang founded Adonis Investment & Advisory in 2018 with a singular premise: the most consequential investment decisions sit at the intersection of technology, geopolitics and human judgment.",
      "A systems engineer by training and a strategist by instinct, Adonis became known for translating complex technical shifts into decisive capital agendas. At Oracle, he built a cross-market investment intelligence practice spanning cloud infrastructure, semiconductor economics and enterprise transformation. His subsequent work across healthcare and professional services gave him an unusually broad view of how reputation, regulation and capital compound.",
      "Under his leadership, the firm expanded from a two-person advisory studio in Pasadena to nine global offices. He continues to chair the firm’s Investment Council and personally sponsors a small number of long-horizon transformation mandates each year.",
    ],
  },
  {
    id: "tommy-chong",
    name: "Tommy Chong",
    title: "Founder & Chief Business Officer",
    image: "/assets/tommy-chong.jpg",
    education: [
      "B.B.A., Business Administration — Peking University",
      "M.S., Business Analytics — The Wharton School, University of Pennsylvania",
      "D.B.A., Business Administration — Harvard University",
    ],
    career: [
      "Former Head of East Coast Business, JPMorgan Chase & Co.",
      "Former SVP, Strategy Consulting, Deloitte",
      "Former Head of Asia Pacific Commercial Operations, Eli Lilly China",
    ],
    quote:
      "The best strategy does more than describe the future. It creates the commercial momentum that makes the future inevitable.",
    bio: [
      "Tommy Chong co-founded Adonis Investment & Advisory to build a firm where boardroom ambition could be translated into measurable market action. He leads global client development, strategic partnerships and the firm’s commercial operating system.",
      "Across banking, consulting and life sciences, Tommy built a reputation for mobilizing complex organizations around a single growth thesis. His work has connected capital formation, market entry, corporate development and stakeholder strategy across North America and Asia Pacific.",
      "At Adonis, Tommy designed the firm’s One Table model: investors, operators, scientists and policy specialists working as a single senior team. He also oversees the Global Fellows network, a curated community of former executives and technical leaders who join client teams at pivotal moments.",
    ],
  },
];

const articles: Article[] = [
  {
    id: "vela",
    category: "Strategic Partnership",
    date: "July 18, 2026",
    title: "Adonis and Vela Semiconductor launch a trans-Pacific intelligence alliance",
    deck: "A multi-year platform designed to accelerate resilient compute infrastructure across three continents.",
    accent: "01",
    body: [
      "Adonis Investment & Advisory has entered a fictional strategic alliance with Vela Semiconductor, an imagined next-generation compute company, to establish a trans-Pacific investment and operating platform.",
      "The mandate brings together capital strategy, supply-chain design and sovereign stakeholder engagement. A joint team in San Francisco, Shanghai and Tokyo will examine opportunities across advanced packaging, energy-efficient data centers and specialist manufacturing.",
      "The first phase will map twenty-four high-conviction growth corridors and develop a capital allocation architecture for Vela’s next decade of expansion.",
    ],
  },
  {
    id: "northstar",
    category: "Healthcare",
    date: "June 02, 2026",
    title: "Northstar Bio selects Adonis for its global precision-health expansion",
    deck: "From breakthrough science to a commercial platform built for trust, access and scale.",
    accent: "02",
    body: [
      "Northstar Bio, a fictional precision-health pioneer, has appointed Adonis to shape its next phase of international growth.",
      "The engagement integrates portfolio strategy, market access and partnership development across the United States, China, the United Kingdom and Japan. The team will also establish an evidence-led stakeholder model designed for rapidly changing health systems.",
      "The work reflects the firm’s belief that healthcare leaders must treat trust, access and scientific excellence as one integrated strategic agenda.",
    ],
  },
  {
    id: "atlas",
    category: "Adonis Institute",
    date: "May 12, 2026",
    title: "The Atlas 2040: where intelligence, energy and capital converge",
    deck: "Our annual signal book identifies seven systems rewriting the global opportunity set.",
    accent: "03",
    body: [
      "The Atlas 2040 is the Adonis Institute’s annual fictional research program on structural change. This year’s edition examines how intelligence infrastructure, energy abundance and new capital formation models are beginning to reinforce one another.",
      "Our central conclusion is not that change will be linear. It is that a small number of feedback loops will create outsized winners across industries and regions.",
      "The report translates those loops into seven board-level choices, from securing computational advantage to redesigning institutional partnerships for an era of strategic interdependence.",
    ],
  },
  {
    id: "lumen",
    category: "Private Capital",
    date: "April 21, 2026",
    title: "Lumen Mobility closes a landmark growth round with Adonis as strategic advisor",
    deck: "A fictional $1.8 billion transaction to scale autonomous freight infrastructure.",
    accent: "04",
    body: [
      "Lumen Mobility has completed a fictional $1.8 billion growth financing to scale its autonomous freight network, with Adonis serving as strategic advisor.",
      "Beyond the financing, Adonis developed a phased market architecture connecting industrial partners, fleet operators and public infrastructure stakeholders.",
      "The transaction demonstrates how well-designed capital can unlock an entire operating ecosystem, rather than finance a single company in isolation.",
    ],
  },
  {
    id: "paris-forum",
    category: "Global Forum",
    date: "March 09, 2026",
    title: "Leaders convene in Paris to rethink the architecture of durable growth",
    deck: "Forty decision-makers. One private table. No panels, no prepared remarks.",
    accent: "05",
    body: [
      "The inaugural Adonis Long Horizon Forum brought together a fictional group of forty founders, investors, scientists and former public leaders in Paris.",
      "Discussions explored the institutional conditions required for durable innovation, the changing geography of talent and the role of private capital in strengthening critical systems.",
      "Insights from the forum will inform a new body of work from the Adonis Institute later this year.",
    ],
  },
  {
    id: "nine-cities",
    category: "Our Firm",
    date: "January 16, 2026",
    title: "Nine cities, one investment mind",
    deck: "Why our global office model is designed around decisions, not territories.",
    accent: "06",
    body: [
      "Adonis has reached nine global offices, but we have deliberately avoided building nine separate firms.",
      "Every mandate is staffed across markets and disciplines. New York can lead a transaction, Shanghai can challenge its operating assumptions, London can examine regulation and Tokyo can test the technology roadmap — all within one senior team.",
      "This model keeps local insight close to the decision while preserving a single global standard of judgment.",
    ],
  },
];

const offices = [
  { city: "New York", address: "88 Hudson Square, 41st Floor", phone: "+1 212 555 0188", left: 28, top: 36, headquarters: true },
  { city: "Los Angeles", address: "725 Grand Meridian, Suite 2600", phone: "+1 310 555 0146", left: 16, top: 44 },
  { city: "San Francisco", address: "180 Mission Vista, 32nd Floor", phone: "+1 415 555 0164", left: 13, top: 38 },
  { city: "Boston", address: "60 Beacon Harbor, 19th Floor", phone: "+1 617 555 0129", left: 30, top: 33 },
  { city: "London", address: "14 Hanover Passage, Mayfair", phone: "+44 20 7946 0182", left: 48, top: 29 },
  { city: "Paris", address: "28 Avenue Montaigne, 7e", phone: "+33 1 87 65 20 18", left: 49, top: 34 },
  { city: "Shanghai", address: "288 Lujiazui Crescent, Tower II", phone: "+86 21 5555 2018", left: 79, top: 42 },
  { city: "Beijing", address: "16 Financial Garden, Chaoyang", phone: "+86 10 5555 1818", left: 77, top: 35 },
  { city: "Tokyo", address: "3-8 Marunouchi Gate, Chiyoda", phone: "+81 3 5550 2018", left: 87, top: 40 },
];

const companyUniverse = [
  { name: "Google", slug: "google", color: "#4285F4", mode: "symbol" },
  { name: "Microsoft", slug: "microsoft", color: "#F25022", mode: "symbol" },
  { name: "Amazon", slug: "amazon", color: "#FF9900", mode: "symbol" },
  { name: "Tesla", slug: "tesla", color: "#CC0000", mode: "symbol" },
  { name: "NVIDIA", slug: "nvidia", color: "#76B900", mode: "symbol" },
  { name: "Eli Lilly", slug: "elililly", color: "#D52B1E", mode: "wordmark" },
  { name: "Johnson & Johnson", slug: "johnsonandjohnson", color: "#EB1700", mode: "wordmark" },
  { name: "Oracle", slug: "oracle", color: "#F80000", mode: "symbol" },
  { name: "PwC", slug: "pwc", color: "#E0301E", mode: "wordmark" },
  { name: "JPMorganChase", slug: "jpmorgan", color: "#0B6E9F", mode: "wordmark" },
  { name: "Deloitte", slug: "deloitte", color: "#86BC25", mode: "wordmark" },
  { name: "IBM", slug: "ibm", color: "#052FAD", mode: "symbol" },
  { name: "Salesforce", slug: "salesforce", color: "#00A1E0", mode: "symbol" },
  { name: "Apple", slug: "apple", color: "#111111", mode: "symbol" },
  { name: "Meta", slug: "meta", color: "#0467DF", mode: "symbol" },
  { name: "Adobe", slug: "adobe", color: "#FF0000", mode: "symbol" },
  { name: "Siemens", slug: "siemens", color: "#009999", mode: "symbol" },
  { name: "TSMC", slug: "tsmc", color: "#E21C2A", mode: "wordmark" },
  { name: "SAP", slug: "sap", color: "#0FAAFF", mode: "symbol" },
  { name: "Toyota", slug: "toyota", color: "#EB0A1E", mode: "symbol" },
];

const capabilities = [
  {
    number: "01",
    title: "Investment Strategy",
    text: "Private capital architecture, portfolio conviction and cross-border opportunity design for moments that redefine an institution.",
  },
  {
    number: "02",
    title: "Corporate Transformation",
    text: "Enterprise strategy built to move from the boardroom to the operating system — with pace, precision and accountable outcomes.",
  },
  {
    number: "03",
    title: "Strategic Intelligence",
    text: "A proprietary view of technology, policy and market structure that helps leaders see inflection points before consensus forms.",
  },
  {
    number: "04",
    title: "Reputation & Influence",
    text: "Stakeholder strategy for organizations whose license to lead depends on credibility across markets, institutions and society.",
  },
];

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetUrl = (path: string) => `${assetBasePath}${path}`;

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-lockup ${light ? "brand-light" : ""}`}>
      <span className="brand-monogram">A</span>
      <span className="brand-name">
        <strong>ADONIS</strong>
        <small>INVESTMENT &amp; ADVISORY</small>
      </span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLeader, setActiveLeader] = useState<Leader | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter>("top");
  const [transitionChapter, setTransitionChapter] = useState<Chapter>("top");
  const [chapterTransitioning, setChapterTransitioning] = useState(false);

  const modalOpen = Boolean(activeLeader || activeArticle);

  useEffect(() => {
    const syncChapterFromLocation = () => {
      const hash = window.location.hash.slice(1) as Chapter;
      setActiveChapter(hash in chapterMeta ? hash : "top");
    };
    syncChapterFromLocation();
    window.addEventListener("popstate", syncChapterFromLocation);
    return () => window.removeEventListener("popstate", syncChapterFromLocation);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveLeader(null);
        setActiveArticle(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [modalOpen]);

  const closeMenu = () => setMenuOpen(false);
  const closeModal = () => {
    setActiveLeader(null);
    setActiveArticle(null);
  };
  const closeOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };
  const openChapter = (chapter: Chapter) => {
    closeMenu();
    if (chapter === activeChapter) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setTransitionChapter(chapter);
    setChapterTransitioning(true);
    window.setTimeout(() => {
      setActiveChapter(chapter);
      const nextUrl = chapter === "top"
        ? `${window.location.pathname}${window.location.search}`
        : `${window.location.pathname}${window.location.search}#${chapter}`;
      window.history.pushState({}, "", nextUrl);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 360);
    window.setTimeout(() => setChapterTransitioning(false), 820);
  };
  const handleChapterNavigation = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const link = target.closest("a");
    const href = link?.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const chapter = href.slice(1) as Chapter;
    if (!(chapter in chapterMeta)) return;
    event.preventDefault();
    openChapter(chapter);
  };

  return (
    <main
      className="chapter-view"
      data-chapter={activeChapter}
      onClick={handleChapterNavigation}
    >
      <div className="concept-ribbon">
        <span>Fictional concept website · Created for private entertainment</span>
        <span className="ribbon-domain">ADONIS-INVESTMENT-ADVISORY.COM</span>
      </div>

      <header className="site-header">
        <a href="#top" aria-label="Adonis home" onClick={closeMenu}>
          <BrandMark />
        </a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#firm" onClick={closeMenu}>Our Firm</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <a href="#insights" onClick={closeMenu}>Insights</a>
          <a href="#global" onClick={closeMenu}>Global Offices</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <aside className="chapter-rail" aria-label="Section navigation">
        {(Object.entries(chapterMeta) as [Chapter, { index: string; label: string }][]).map(([chapter, meta]) => (
          <a
            href={`#${chapter}`}
            className={activeChapter === chapter ? "active" : ""}
            aria-label={`Open ${meta.label}`}
            key={chapter}
          >
            <span>{meta.index}</span>
            <b>{meta.label}</b>
          </a>
        ))}
      </aside>

      <div
        className={`chapter-transition ${chapterTransitioning ? "is-active" : ""}`}
        aria-hidden="true"
      >
        <span>{chapterMeta[transitionChapter].index} / 06</span>
        <strong>{chapterMeta[transitionChapter].label}</strong>
        <i />
      </div>

      <section className="hero chapter-panel chapter-home" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow gold">Investment excellence · Global consequence</p>
          <h1>Conviction<br />beyond <em>consensus.</em></h1>
          <p className="hero-deck">
            We unite private capital, strategic intelligence and operating judgment
            to build enduring advantage in a world being rewritten.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#firm">
              Discover Adonis <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#insights">
              Explore our thinking <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <div className="orbit-center">
            <span>9</span>
            <small>GLOBAL<br />OFFICES</small>
          </div>
          {["NY", "LA", "SF", "BO", "LDN", "PAR", "SHA", "BJ", "TKY"].map((city, index) => (
            <span key={city} className={`orbit-city city-${index + 1}`}>{city}</span>
          ))}
        </div>

        <div className="hero-bottom">
          <div className="hero-stat">
            <strong>$27B<sup>+</sup></strong>
            <span>Strategic capital advised*</span>
          </div>
          <div className="hero-stat">
            <strong>18</strong>
            <span>Markets connected*</span>
          </div>
          <div className="hero-stat">
            <strong>2018</strong>
            <span>Founded in California</span>
          </div>
          <p className="hero-note">*Illustrative figures for this fictional concept.</p>
        </div>
        <a href="#firm" className="scroll-cue" aria-label="Scroll to our firm">
          <span>SCROLL</span>
          <i />
        </a>
      </section>

      <section className="brand-universe chapter-panel chapter-home" aria-labelledby="universe-title">
        <div className="section-shell">
          <div className="universe-heading">
            <p className="eyebrow" id="universe-title">Selected collaboration universe</p>
            <p>Fictional presentation of global brands for concept demonstration only.</p>
          </div>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...companyUniverse, ...companyUniverse].map((company, index) => (
                <span className={`company-logo-card ${company.mode === "wordmark" ? "is-wordmark" : ""}`} key={`${company.slug}-${index}`}>
                  {company.mode === "wordmark" ? (
                    <Image
                      className={`company-logo-image logo-image-${company.slug}`}
                      src={assetUrl(`/assets/logos/${company.slug}.svg`)}
                      alt={`${company.name} logo`}
                      width={180}
                      height={54}
                      unoptimized
                    />
                  ) : (
                    <>
                      <span
                        className="company-logo-symbol"
                        aria-hidden="true"
                        style={{
                          backgroundColor: company.color,
                          maskImage: `url("${assetUrl(`/assets/logos/${company.slug}.svg`)}")`,
                          WebkitMaskImage: `url("${assetUrl(`/assets/logos/${company.slug}.svg`)}")`,
                        }}
                      />
                      <span className="company-logo-name">{company.name}</span>
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="firm-section chapter-panel chapter-firm" id="firm">
        <div className="section-shell split-heading">
          <div>
            <p className="eyebrow">Our Firm</p>
            <span className="section-index">01 — 06</span>
          </div>
          <div className="firm-intro">
            <h2>Built for the decisions that <em>change trajectories.</em></h2>
            <p className="large-copy">
              Adonis is an independent global investment and advisory firm serving
              a select group of leaders at defining moments.
            </p>
            <p>
              We were founded in 2018 by Adonis Yang and Tommy Chong after a late-night
              conversation in Pasadena about a widening gap: capital had become more
              abundant, yet truly integrated judgment had become rare. Their answer
              was a different kind of firm — one that could see like an investor,
              build like an operator and advise with absolute discretion.
            </p>
          </div>
        </div>

        <div className="origin-panel">
          <div className="origin-copy">
            <p className="eyebrow gold">The origin of Adonis</p>
            <h3>Two disciplines.<br />One impossible standard.</h3>
            <p>
              From an original two-person studio, Adonis moved quickly: advising a
              transformative technology carve-out in its first year, opening New York
              and Shanghai in 2020, and establishing a connected nine-city platform
              by 2024.
            </p>
            <blockquote>
              “Never confuse scale with significance. We built Adonis to be present
              only where the decision truly matters.”
            </blockquote>
            <span>— Adonis Yang, Founder &amp; CEO</span>
          </div>
          <div className="timeline">
            {[
              ["2018", "The firm is founded in California with one technology mandate and a refusal to think small."],
              ["2020", "New York and Shanghai open, creating a trans-Pacific advisory spine."],
              ["2022", "Adonis Institute launches to connect proprietary research directly to client decisions."],
              ["2024", "The ninth office opens in Tokyo. One global partnership model remains."],
              ["2026", "A new era begins: intelligence, capital and influence become one integrated platform."],
            ].map(([year, text]) => (
              <div className="timeline-item" key={year}>
                <strong>{year}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section chapter-panel chapter-capabilities" id="capabilities">
        <div className="section-shell">
          <div className="section-title-row">
            <div>
              <p className="eyebrow gold">What we do</p>
              <h2>One firm for the full<br /><em>arc of ambition.</em></h2>
            </div>
            <p>
              Our senior teams cross traditional boundaries because the most important
              questions never belong to a single discipline.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <a href="#contact" aria-label={`Discuss ${capability.title}`}>
                  Discuss a mandate <i aria-hidden="true">↗</i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership-section chapter-panel chapter-leadership" id="leadership">
        <div className="section-shell">
          <div className="leadership-heading">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2>Senior by design.<br /><em>Personal by principle.</em></h2>
            </div>
            <p>
              Every relationship is led by the people whose names are on the firm.
              Select a founder to read their full story.
            </p>
          </div>
          <div className="leader-grid">
            {leaders.map((leader, index) => (
              <button
                className="leader-card"
                key={leader.id}
                onClick={() => setActiveLeader(leader)}
                aria-label={`Read ${leader.name}'s biography`}
              >
                <div className={`leader-image leader-image-${leader.id}`}>
                  <Image
                    src={assetUrl(leader.image)}
                    alt={`Portrait of ${leader.name}`}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    priority={index === 0}
                    unoptimized
                  />
                  <span className="leader-number">0{index + 1}</span>
                  <span className="leader-open" aria-hidden="true">↗</span>
                </div>
                <div className="leader-meta">
                  <div>
                    <h3>{leader.name}</h3>
                    <p>{leader.title}</p>
                  </div>
                  <span>VIEW PROFILE</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section chapter-panel chapter-insights" id="insights">
        <div className="section-shell">
          <div className="section-title-row dark-text">
            <div>
              <p className="eyebrow">Stories &amp; perspectives</p>
              <h2>Ideas with the power<br />to <em>move markets.</em></h2>
            </div>
            <p>
              Dispatches from fictional client work, the Adonis Institute and our
              conversations with leaders shaping the next global era.
            </p>
          </div>
          <div className="featured-story">
            <div className="story-visual" aria-hidden="true">
              <span className="story-code">A / 26</span>
              <div className="story-sphere">
                <i />
                <i />
                <i />
              </div>
              <span className="story-location">SAN FRANCISCO × SHANGHAI × TOKYO</span>
            </div>
            <div className="story-copy">
              <p className="story-category">{articles[0].category} · {articles[0].date}</p>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].deck}</p>
              <button onClick={() => setActiveArticle(articles[0])}>
                Read the story <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
          <div className="article-grid">
            {articles.slice(1).map((article) => (
              <button
                className="article-card"
                key={article.id}
                onClick={() => setActiveArticle(article)}
                aria-label={`Read ${article.title}`}
              >
                <span className="article-number">{article.accent}</span>
                <p className="story-category">{article.category} · {article.date}</p>
                <h3>{article.title}</h3>
                <p>{article.deck}</p>
                <span className="article-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="global-section chapter-panel chapter-global" id="global">
        <div className="section-shell">
          <div className="global-heading">
            <div>
              <p className="eyebrow gold">One global firm</p>
              <h2>Nine cities.<br /><em>One investment mind.</em></h2>
            </div>
            <p>
              We work as a single partnership across the world’s most consequential
              centers of capital, technology and influence.
            </p>
          </div>
          <div className="global-layout">
            <div className="world-stage" aria-label="World map showing nine global offices">
              <Image
                className="world-map-art"
                src={assetUrl("/assets/world-map.svg")}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 68vw"
                unoptimized
              />
              <div className="world-map-glow" aria-hidden="true" />
              {offices.map((office, index) => (
                <span
                  className={`map-marker ${office.headquarters ? "map-headquarters" : ""}`}
                  style={{ left: `${office.left}%`, top: `${office.top}%` }}
                  key={office.city}
                >
                  <i />
                  <b>{office.city}</b>
                  <small>{office.headquarters ? "GLOBAL HQ" : `0${index + 1}`}</small>
                </span>
              ))}
              <div className="map-caption">
                <span>ROBINSON PROJECTION</span>
                <span>GLOBAL ADVISORY NETWORK</span>
                <span>9 CITIES · 2026</span>
              </div>
            </div>
            <div className="office-list">
              {offices.map((office, index) => (
                <details key={office.city} open={index === 0}>
                  <summary>
                    <span>0{index + 1}</span>
                    <strong>
                      {office.city}
                      {office.headquarters && <small>Global HQ</small>}
                    </strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div>
                    <p>{office.address}</p>
                    <a href={`tel:${office.phone.replaceAll(" ", "")}`}>{office.phone}</a>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="headquarters-feature">
            <div className="headquarters-image">
              <Image
                src={assetUrl("/assets/new-york-office.jpg")}
                alt="Illustrative luxury office interior representing the Adonis New York headquarters"
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                unoptimized
              />
              <span>Illustrative concept image</span>
            </div>
            <div className="headquarters-copy">
              <p className="eyebrow gold">Global headquarters · New York</p>
              <h3>Where capital meets consequence.</h3>
              <p className="headquarters-address">88 Hudson Square · 41st Floor · New York</p>
              <p>
                The firm’s global command center brings investment leaders, operating
                partners and senior advisors together around one table — with direct
                links to every Adonis office worldwide.
              </p>
              <div className="headquarters-facts">
                <span><strong>41</strong>Floor</span>
                <span><strong>24/9</strong>Global coverage</span>
                <span><strong>2019</strong>Established</span>
              </div>
              <a href="mailto:concierge@adonis-investment-advisory.com" className="text-link">
                Contact New York <span aria-hidden="true">↗</span>
              </a>
              <small>
                Fictional office presentation ·{" "}
                <a href="https://unsplash.com/photos/QVVHV24DA_o" target="_blank" rel="noreferrer">
                  Image source: Unsplash
                </a>
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section chapter-panel chapter-contact" id="contact">
        <div className="contact-orbit" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="section-shell contact-inner">
          <p className="eyebrow gold">Begin a conversation</p>
          <h2>The next decisive move<br />starts with <em>one question.</em></h2>
          <a className="button button-gold" href="mailto:concierge@adonis-investment-advisory.com">
            Contact the private office <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <BrandMark light />
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#firm">Our Firm</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#leadership">Leadership</a>
              <a href="#insights">Stories</a>
            </div>
            <div>
              <strong>Global</strong>
              <a href="#global">Americas</a>
              <a href="#global">Europe</a>
              <a href="#global">Asia Pacific</a>
              <a href="#global">All offices</a>
            </div>
            <div>
              <strong>Connect</strong>
              <a href="mailto:concierge@adonis-investment-advisory.com">Private Office</a>
              <a href="#contact">Media</a>
              <a href="#contact">Careers</a>
              <span>+1 212 555 0188</span>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            <strong>Fictional concept notice.</strong> Adonis Investment &amp; Advisory,
            its people, offices, credentials, transactions, figures and partnerships
            shown on this website are fictional and created solely for private
            entertainment and design demonstration. No investment services are offered.
            Company names and trademarks belong to their respective owners; no affiliation
            or endorsement is implied.
          </p>
          <div>
            <span>© 2026 Adonis Investment &amp; Advisory — Fictional Concept</span>
            <span>Privacy</span>
            <span>Legal</span>
          </div>
        </div>
      </footer>

      {activeLeader && (
        <div className="modal-backdrop" onClick={closeOnBackdrop} role="presentation">
          <section className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profile-title">
            <button className="modal-close" onClick={closeModal} aria-label="Close profile">×</button>
            <div className="profile-portrait">
              <Image
                src={assetUrl(activeLeader.image)}
                alt={`Portrait of ${activeLeader.name}`}
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
                unoptimized
              />
              <span>ADONIS / LEADERSHIP</span>
            </div>
            <div className="profile-content">
              <p className="eyebrow gold">Founder profile</p>
              <h2 id="profile-title">{activeLeader.name}</h2>
              <h3>{activeLeader.title}</h3>
              <blockquote>“{activeLeader.quote}”</blockquote>
              {activeLeader.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="profile-columns">
                <div>
                  <strong>Education</strong>
                  {activeLeader.education.map((item) => <p key={item}>{item}</p>)}
                </div>
                <div>
                  <strong>Previous leadership</strong>
                  {activeLeader.career.map((item) => <p key={item}>{item}</p>)}
                </div>
              </div>
              <p className="profile-disclaimer">All biographical details are fictional for this concept website.</p>
            </div>
          </section>
        </div>
      )}

      {activeArticle && (
        <div className="modal-backdrop article-backdrop" onClick={closeOnBackdrop} role="presentation">
          <article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-title">
            <button className="modal-close" onClick={closeModal} aria-label="Close article">×</button>
            <div className="article-modal-header">
              <p className="eyebrow gold">{activeArticle.category} · {activeArticle.date}</p>
              <span className="article-modal-number">{activeArticle.accent}</span>
              <h2 id="article-title">{activeArticle.title}</h2>
              <p>{activeArticle.deck}</p>
            </div>
            <div className="article-modal-body">
              {activeArticle.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="article-signoff">
                <BrandMark light />
                <span>Fictional story for concept demonstration only.</span>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
