import { useEffect, useMemo, useState } from 'react';
import MathMarkdown from './components/MathMarkdown';
import VisualizationPanel from './components/Visualizers';
import { closingSection, courseMeta, exerciseGroups, introSection, sections } from './content/day1Content';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = window.localStorage.getItem('day1-theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function useActiveSection(navItems) {
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? '');

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.15, 0.35, 0.55, 0.75],
        rootMargin: '-15% 0px -55% 0px',
      },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [navItems]);

  return [activeId, setActiveId];
}

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'light' ? 'oscura' : 'clara';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Cambiar a vista ${nextTheme}`}
      title={`Cambiar a vista ${nextTheme}`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === 'light' ? '◐' : '◑'}
      </span>
      <span className="theme-toggle__text">Vista {nextTheme}</span>
    </button>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 20 20" className="button-icon" aria-hidden="true">
      <path
        d="M3.5 15.5h13M5.5 12.2l2.8-2.9 2.5 1.9 3.7-4.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="12.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.3" cy="9.3" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.8" cy="11.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VisualizationLabel({ children }) {
  return (
    <span className="button-with-icon">
      <ChartIcon />
      <span>{children}</span>
    </span>
  );
}

function BlockRail({ navItems, activeId }) {
  return (
    <nav className="block-rail" aria-label="Barra de desplazamiento por bloques">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={item.id === activeId ? 'block-rail__dot is-active' : 'block-rail__dot'}
          title={item.title}
          data-tooltip={item.title}
          aria-label={item.title}
          onClick={() => scrollToSection(item.id)}
        >
          <span className="sr-only">{item.title}</span>
        </button>
      ))}
    </nav>
  );
}

function ScrollTopButton({ visible }) {
  return (
    <button
      type="button"
      className={visible ? 'scroll-top-button is-visible' : 'scroll-top-button'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver hasta arriba"
    >
      ↑
    </button>
  );
}

function Sidebar({ navItems, activeId }) {
  return (
    <>
      <aside className="sidebar" aria-hidden="true" />
      <div className="mobile-nav" aria-label="Navegación del Día 1">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === activeId ? 'nav-chip is-active' : 'nav-chip'}
            onClick={() => scrollToSection(item.id)}
          >
            {item.navLabel}
          </button>
        ))}
      </div>
    </>
  );
}

function IntroSection() {
  return (
    <section id={introSection.id} className="page-section intro-section">
      <div className="hero-card hero-card--intro">
        <div className="hero-card__copy">
          <p className="eyebrow">Curso · Día 1</p>
          <h1>{courseMeta.title}</h1>
          <div className="hero-card__description rich-text">
            <MathMarkdown content={introSection.usageIntro} />
          </div>
        </div>
        <div className="hero-card__panel hero-card__panel--guide">
          <div className="hero-guide">
            <p className="prompt-label">Cómo usar la aplicación</p>
            <div className="hero-guide__list">
              {introSection.guideItems.map((item) => (
                <article key={item.title} className="hero-guide__item">
                  <h3 className="hero-guide__title">
                    {item.kind === 'visualizacion' ? <VisualizationLabel>{item.title}</VisualizationLabel> : item.title}
                  </h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="hero-guide__note rich-text">
              <MathMarkdown content={introSection.usageNote} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepNavigator({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="step-block">
      <div className="step-pills">
        {steps.map((_, index) => (
          <button
            key={`step-${index + 1}`}
            type="button"
            className={index === activeStep ? 'step-pill is-active' : 'step-pill'}
            onClick={() => setActiveStep(index)}
          >
            Paso {index + 1}
          </button>
        ))}
      </div>
      <div className="step-list">
        {steps.map((step, index) => (
          <div key={`step-line-${index + 1}`} className={index === activeStep ? 'step-card is-active' : 'step-card'}>
            <span className="step-card__number">{index + 1}</span>
            <MathMarkdown content={step} className="rich-text" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExampleCard({ example, onOpenVisual }) {
  const [showSolution, setShowSolution] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  return (
    <article className="surface-card surface-card--example">
      <div className="section-card__header">
        <div>
          <p className="eyebrow">Ejemplo resuelto {example.number}</p>
          <h3>{example.title}</h3>
        </div>
        <div className="card-actions">
          <button type="button" className="secondary-button" onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? 'Ocultar desarrollo' : 'Ver desarrollo'}
          </button>
          <button type="button" className="secondary-button" onClick={() => setShowErrors(!showErrors)}>
            {showErrors ? 'Ocultar errores' : 'Ver errores a evitar'}
          </button>
          <button type="button" className="secondary-button" onClick={onOpenVisual}>
            <VisualizationLabel>Abrir visualización</VisualizationLabel>
          </button>
        </div>
      </div>
      <div className="prompt-row">
        <div>
          <p className="prompt-label">Planteamiento</p>
          <MathMarkdown content={example.statement} className="rich-text" />
        </div>
        <div>
          <p className="prompt-label">Qué se busca</p>
          <p>{example.ask}</p>
        </div>
      </div>
      {showSolution ? <StepNavigator steps={example.steps} /> : null}
      <div className="result-grid">
        <div className="result-card">
          <p className="prompt-label">Resultado</p>
          <MathMarkdown content={example.result} className="rich-text" />
        </div>
        <div className="result-card">
          <p className="prompt-label">Interpretación</p>
          <MathMarkdown content={example.interpretation} className="rich-text" />
        </div>
      </div>
      {showErrors ? (
        <div className="error-box">
          <p className="error-box__title">Errores a evitar</p>
          <ul className="plain-list">
            {example.errors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mini-note mini-note--soft">
        <strong>Visualización sugerida.</strong> {example.visualPrompt}
      </div>
    </article>
  );
}

function LessonSection({ section, theme }) {
  const [tab, setTab] = useState('explicacion');

  return (
    <section id={section.id} className="page-section lesson-section">
      <div className="section-head">
        <div>
          <p className="eyebrow">{section.badge}</p>
          <h2>{section.title}</h2>
        </div>
      </div>
      <div className="info-grid">
        <article className="surface-card">
          <h3>Qué significa en palabras simples</h3>
          <MathMarkdown content={section.meaning} className="rich-text" />
        </article>
        <article className="surface-card">
          <h3>Para qué sirve en economía</h3>
          <MathMarkdown content={section.economyUse} className="rich-text" />
        </article>
      </div>
      <div className="tab-row">
        <button type="button" className={tab === 'explicacion' ? 'tab-button is-active' : 'tab-button'} onClick={() => setTab('explicacion')}>
          Explicación paso a paso
        </button>
        <button type="button" className={tab === 'ejemplo' ? 'tab-button is-active' : 'tab-button'} onClick={() => setTab('ejemplo')}>
          Ejemplo resuelto
        </button>
        <button type="button" className={tab === 'visualizacion' ? 'tab-button is-active' : 'tab-button'} onClick={() => setTab('visualizacion')}>
          <VisualizationLabel>Visualización</VisualizationLabel>
        </button>
      </div>
      {tab === 'explicacion' ? (
        <div className="stacked-panels">
          {section.explanationParts.map((part) => (
            <article key={part.title} className="surface-card surface-card--lesson">
              <h3>{part.title}</h3>
              <MathMarkdown content={part.content} className="rich-text" />
            </article>
          ))}
        </div>
      ) : null}
      {tab === 'ejemplo' ? <ExampleCard example={section.example} onOpenVisual={() => setTab('visualizacion')} /> : null}
      {tab === 'visualizacion' ? <VisualizationPanel visual={section.visual} theme={theme} /> : null}
    </section>
  );
}

function ExerciseCard({ exercise, theme }) {
  const [showSolution, setShowSolution] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [showVisual, setShowVisual] = useState(false);

  return (
    <article className="surface-card surface-card--exercise">
      <div className="section-card__header">
        <div>
          <p className="eyebrow">
            Ejercicio {exercise.number} · {exercise.type}
          </p>
          <h3>{exercise.title}</h3>
        </div>
        <div className="card-actions">
          <button type="button" className="secondary-button" onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? 'Ocultar desarrollo' : 'Ver desarrollo'}
          </button>
          <button type="button" className="secondary-button" onClick={() => setShowErrors(!showErrors)}>
            {showErrors ? 'Ocultar errores' : 'Ver errores a evitar'}
          </button>
          <button type="button" className="secondary-button" onClick={() => setShowVisual(!showVisual)}>
            <VisualizationLabel>{showVisual ? 'Ocultar visualización' : 'Abrir visualización'}</VisualizationLabel>
          </button>
        </div>
      </div>
      <div className="prompt-row">
        <div>
          <p className="prompt-label">Planteamiento</p>
          <MathMarkdown content={exercise.statement} className="rich-text" />
        </div>
        <div>
          <p className="prompt-label">Qué se pide</p>
          <p>{exercise.ask}</p>
        </div>
      </div>
      {showSolution ? <StepNavigator steps={exercise.steps} /> : null}
      <div className="result-grid">
        <div className="result-card">
          <p className="prompt-label">Resultado</p>
          <MathMarkdown content={exercise.result} className="rich-text" />
        </div>
        <div className="result-card">
          <p className="prompt-label">Interpretación</p>
          <MathMarkdown content={exercise.interpretation} className="rich-text" />
        </div>
      </div>
      {showErrors ? (
        <div className="error-box">
          <p className="error-box__title">Errores a evitar</p>
          <ul className="plain-list">
            {exercise.errors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mini-note mini-note--soft">
        <strong>Visualización sugerida.</strong> {exercise.visualHint}
      </div>
      {showVisual ? <VisualizationPanel visual={exercise.visual} theme={theme} /> : null}
    </article>
  );
}

function ExerciseSection({ group, theme }) {
  return (
    <section id={group.id} className="page-section lesson-section">
      <div className="section-head">
        <div>
          <p className="eyebrow">{group.badge}</p>
          <h2>{group.title}</h2>
        </div>
      </div>
      <article className="surface-card">
        <MathMarkdown content={group.intro} className="rich-text" />
      </article>
      <div className="exercise-stack">
        {group.exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} theme={theme} />
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section id={closingSection.id} className="page-section closing-section">
      <div className="section-head">
        <div>
          <p className="eyebrow">{closingSection.badge}</p>
          <h2>{closingSection.title}</h2>
        </div>
      </div>
      <div className="info-grid">
        <article className="surface-card">
          <MathMarkdown content={closingSection.message} className="rich-text" />
        </article>
        <article className="surface-card">
          <h3>Lista de salida del Día 1</h3>
          <ul className="plain-list">
            {closingSection.readiness.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <MathMarkdown content={closingSection.conclusion} className="rich-text" />
        </article>
      </div>
      <footer className="footer-note">{courseMeta.footerText}</footer>
    </section>
  );
}

export default function App() {
  const navItems = useMemo(
    () => [introSection, ...sections, ...exerciseGroups, closingSection].map(({ id, navLabel, badge, title }) => ({ id, navLabel, badge, title })),
    [],
  );
  const [activeId] = useActiveSection(navItems);
  const [theme, setTheme] = useState(getInitialTheme);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('day1-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#f2f2ee' : '#0d1218');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <BlockRail navItems={navItems} activeId={activeId} />
      <ScrollTopButton visible={showScrollTop} />
      <Sidebar navItems={navItems} activeId={activeId} />
      <main className="main-content">
        <IntroSection />
        {sections.map((section) => {
          return (
            <LessonSection
              key={section.id}
              section={section}
              theme={theme}
            />
          );
        })}
        {exerciseGroups.map((group) => {
          return (
            <ExerciseSection
              key={group.id}
              group={group}
              theme={theme}
            />
          );
        })}
        <ClosingSection />
      </main>
    </div>
  );
}
