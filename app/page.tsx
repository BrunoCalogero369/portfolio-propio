export default function Portfolio() {
  const proyectos = [
    {
      titulo: "Vértice Producciones & POS",
      descripcion:
        "Plataforma para eventos y sistema POS de caja en vivo para barra. Control de stock, cobros por métodos de pago y exportación de reportes.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "LocalStorage", "POS"],
      link: "https://vertice-producciones.netlify.app/",
      destacado: true,
    },
    {
      titulo: "NeoFit AI",
      descripcion:
        "Generador inteligente de rutinas de entrenamiento potenciado por IA (Gemini API). Interfaz dinámica y personalizada según objetivos del usuario.",
      tags: ["React", "Next.js", "Gemini API", "Tailwind CSS"],
      link: "https://neofit-ai.netlify.app/",
      destacado: false,
    },
    {
      titulo: "Portfolio Fotografía • Flor Salva",
      descripcion:
        "Portfolio profesional de alto rendimiento visual para fotógrafa. Galería interactiva, diseño responsivo fluido y UX minimalista.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://portfolio-flor-salva.netlify.app/",
      destacado: false,
    },
    {
      titulo: "Calogero Repuestos",
      descripcion:
        "Catálogo web interactivo para venta de repuestos automotores. Filtros rápidos y optimización móvil.",
      tags: ["React", "Next.js", "Tailwind CSS", "UI/UX"],
      link: "https://calogerorepuestos.netlify.app/",
      destacado: false,
    },
    {
      titulo: "ShowFinder",
      descripcion:
        "Buscador y explorador de eventos y shows en vivo. Interfaz limpia para encontrar recitales y fechas de forma intuitiva.",
      tags: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      link: "https://showfinder33.netlify.app/",
      destacado: false,
    },
  ];

  const stack = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"],
    Seguridad: ["OWASP Top 10", "PortSwigger Academy", "Secure Coding", "Burp Suite"],
    TestingTools: ["Jest", "React Testing Library", "Git & GitHub", "Mobile-First UX"],
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-violet-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <span className="font-extrabold text-base sm:text-lg tracking-wider text-white">
            BRUNO<span className="text-violet-500">.</span>CALOGERO
          </span>
          <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-400">
            <a href="#proyectos" className="hover:text-violet-400 transition-colors">Proyectos</a>
            <a href="#seguridad" className="hover:text-violet-400 transition-colors">Seguridad</a>
            <a href="#contacto" className="hover:text-violet-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 flex flex-col gap-16 sm:gap-24">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-start gap-5 sm:gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/50 text-violet-300 text-[11px] sm:text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Disponible para nuevos desafíos
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-snug sm:leading-tight">
            Desarrollador Frontend & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">Secure Coding</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Hola, soy <strong className="text-zinc-200">Bruno Calogero</strong>. Me especializo en construir aplicaciones web modernas, escalables y veloces con <strong className="text-violet-400">React, Next.js y TypeScript</strong>, sumando una visión activa en <strong className="text-violet-400">Seguridad Web (OWASP Top 10)</strong> para prevenir vulnerabilidades desde el código.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 pt-2">
            <a
              href="#proyectos"
              className="w-full sm:w-auto text-center bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-violet-900/30 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Ver mis proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto text-center bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-bold px-6 py-3 rounded-xl transition-all text-sm sm:text-base"
            >
              Contactar
            </a>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2 sm:gap-3">
              <span className="text-violet-500">#</span> Proyectos Destacados
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">Aplicaciones en producción e implementaciones reales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {proyectos.map((p, idx) => (
              <div
                key={idx}
                className={`bg-zinc-900/60 border ${
                  p.destacado ? "border-violet-500/50 shadow-violet-950/20 shadow-xl" : "border-zinc-800/80"
                } rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-5 hover:border-violet-500/80 transition-all group`}
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                      {p.titulo}
                    </h3>
                    {p.destacado && (
                      <span className="shrink-0 text-[10px] font-black uppercase bg-violet-600/30 text-violet-300 border border-violet-500/40 px-2 py-0.5 rounded-md">
                        Destacado
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{p.descripcion}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, i) => (
                      <span key={i} className="text-[11px] sm:text-xs bg-zinc-950 text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors pt-1"
                  >
                    Visitar Proyecto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENFOQUE DE SEGURIDAD / DIFERENCIAL */}
        <section id="seguridad" className="bg-gradient-to-br from-violet-950/30 via-zinc-900 to-zinc-950 border border-violet-800/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2 text-violet-400 font-bold text-[11px] sm:text-xs uppercase tracking-widest">
            🛡️ Diferencial Profesional
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Frontend con mentalidad de <span className="text-violet-400">Web Application Security</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Además de construir interfaces ágiles, estoy profundizando en seguridad ofensiva y defensiva a través de los labs de <strong className="text-white">PortSwigger Web Security Academy</strong>. Esto me permite escribir código limpio y prevenir vulnerabilidades críticas como:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-1">
            {["OWASP Top 10", "Broken Access Control", "SQL Injection", "SSRF & OS Command Injection"].map((item, idx) => (
              <div key={idx} className="bg-zinc-950/80 border border-violet-900/40 p-3 rounded-xl text-center text-xs font-semibold text-violet-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK & SKILLS */}
        <section className="flex flex-col gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2 sm:gap-3">
            <span className="text-violet-500">#</span> Habilidades & Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-zinc-900/40 border border-zinc-800 p-5 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4">
              <h3 className="text-base sm:text-lg font-bold text-violet-400">Core Frontend</h3>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {stack.Frontend.map((s, i) => (
                  <li key={i} className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-200 px-2.5 py-1 rounded-lg">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-5 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4">
              <h3 className="text-base sm:text-lg font-bold text-violet-400">Seguridad & AppSec</h3>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {stack.Seguridad.map((s, i) => (
                  <li key={i} className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-200 px-2.5 py-1 rounded-lg">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-5 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 sm:col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg font-bold text-violet-400">Testing & Herramientas</h3>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {stack.TestingTools.map((s, i) => (
                  <li key={i} className="text-xs bg-zinc-900 border border-zinc-700 text-zinc-200 px-2.5 py-1 rounded-lg">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACTO */}
        <footer id="contacto" className="border-t border-zinc-800 pt-8 sm:pt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-base sm:text-lg font-bold text-white">¿Conectamos?</span>
            <span className="text-xs text-zinc-400">Español (Nativo) • Inglés B2 (Upper-Intermediate)</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 w-full sm:w-auto">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BrunoCalogero369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
            >
              GitHub
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}