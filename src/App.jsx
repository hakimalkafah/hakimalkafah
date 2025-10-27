import React from 'react';
import useReveal from './hooks/useReveal.js';
import TiltCard from './components/TiltCard.jsx';
import ShimmerButton from './components/ShimmerButton.jsx';
import NeonBackground from './components/NeonBackground.jsx';

const App = () => {
  // Scroll progress + cursor glow micro-interactions
  React.useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const glow = document.getElementById('cursor-glow');

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      if (bar) bar.style.width = `${Math.max(0, Math.min(1, scrolled)) * 100}%`;
    };
    const onMove = (e) => {
      if (!glow) return;
      glow.style.transform = `translate(${e.clientX - 160}px, ${e.clientY - 160}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Reveal refs
  const summaryRef = useReveal();
  const experienceRef = useReveal();
  const projectsRef = useReveal();
  const skillsRef = useReveal();
  const eduRef = useReveal();
  const contactRef = useReveal();

  return (
    <div className="w-screen overflow-x-hidden font-sans antialiased text-cyan-100 min-h-screen flex flex-col relative z-10 bg-black">
      <NeonBackground />

      {/* Scroll progress */}
      <div id="scroll-progress" className="scroll-progress" style={{ boxShadow: '0 0 12px rgba(34,211,238,.55)', background: 'linear-gradient(90deg,#06b6d4,#38bdf8)' }} />

      {/* Cursor-follow glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div id="cursor-glow" className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="w-full py-14">
        <div className="container mx-auto px-6 md:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 text-sm animate-[var(--animate-fade-down)]" style={{ animationDelay: '40ms' }}>
            <span className="size-1.5 rounded-full bg-cyan-400 animate-[var(--animate-glow)]" />
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight neon-heading animate-[var(--animate-fade-down)]" style={{ animationDelay: '120ms' }}>Hakim Alkafah</h1>
          <p className="text-xl md:text-2xl neon-subtle animate-[var(--animate-fade-down)]" style={{ animationDelay: '220ms' }}>Full-Stack Software Engineer | Systems | Cloud | DevOps</p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-5xl px-6 md:px-10 py-12 grid gap-10 grow">
        {/* Professional Summary */}
        <div ref={summaryRef} className="reveal">
          <TiltCard>
            <section className="neon-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Professional Summary</h2>
              <div className="neon-divider mb-6" />
              <p className="leading-relaxed text-lg text-cyan-100/90">
                Full-stack software engineer with extensive experience developing scalable, secure, and distributed solutions using Python, Flask, React, Docker, and SQL. Proven track record automating workflows, modernizing CI/CD pipelines, and building robust, containerized cloud deployments.
              </p>
            </section>
          </TiltCard>
        </div>

        {/* Professional Experience */}
        <div ref={experienceRef} className="reveal">
          <TiltCard>
            <section className="neon-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Professional Experience</h2>
              <div className="neon-divider mb-4" />
              <div className="space-y-8 divide-y divide-cyan-400/20">
                {/* Ford */}
                <div className="pt-0 first:pt-0">
                  <h3 className="text-2xl font-bold text-cyan-200">Core Systems Software Engineer - Ford Motor Company</h3>
                  <p className="text-sm text-cyan-300/70 mb-4">Mar 2023 - Present | Dearborn, MI</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="transition-transform duration-300 hover:translate-x-0.5 text-cyan-100/90">Developed and deployed scalable full-stack solutions on GCP serving over 200 engineers.</li>
                    <li className="transition-transform duration-300 hover:translate-x-0.5 text-cyan-100/90">Automated workflows reducing manual processes, saving 1200+ engineer-hours annually.</li>
                    <li className="transition-transform duration-300 hover:translate-x-0.5 text-cyan-100/90">Built secure, containerized microservices with Flask, React, and Docker.</li>
                    <li className="transition-transform duration-300 hover:translate-x-0.5 text-cyan-100/90">Modernized CI/CD pipelines using GitHub Actions, reducing deployment times by 50%.</li>
                  </ul>
                </div>

                {/* PDW */}
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-cyan-200">Prototype Test Driver - Performance Driven Workforce (Ford Contract)</h3>
                  <p className="text-sm text-cyan-300/70 mb-4">Oct 2021 - Feb 2023 | Allen Park, MI</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="transition-transform duration-300 hover:translate-x-0.5 text-cyan-100/90">Evaluated pre-production software, documenting 300+ software issues for engineering resolution.</li>
                  </ul>
                </div>
              </div>
            </section>
          </TiltCard>
        </div>

        {/* Featured Projects */}
        <div ref={projectsRef} className="reveal">
          <TiltCard>
            <section className="neon-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Featured Projects</h2>
              <div className="neon-divider mb-6" />
              <article className="space-y-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-cyan-200">Contractor Scheduler Platform</h3>
                  <p className="text-sm text-cyan-300/70 uppercase tracking-[0.2em]">Next.js | Clerk Auth | Neon UI</p>
                </div>
                <p className="text-lg text-cyan-100/90 leading-relaxed">
                  Built a secure scheduling hub that lets contractors coordinate projects in real time. Utilizes Clerk-powered authentication, a responsive Next.js front end, and a modular layout so teams can track workloads and timelines from any device.
                </p>
                <ul className="list-disc list-inside space-y-3 text-cyan-100/90">
                  <li className="transition-transform duration-300 hover:translate-x-0.5">Role-aware dashboard with fast context switching between clients and active projects.</li>
                  <li className="transition-transform duration-300 hover:translate-x-0.5">Scheduling surface tuned for high-contrast visibility in the field, even on tablets.</li>
                  <li className="transition-transform duration-300 hover:translate-x-0.5">Integrated auth and session management via Clerk to keep contractor data locked down.</li>
                </ul>
                <div className="pt-2">
                  <a
                    href="https://contractor-scheduler-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn"
                  >
                    <span aria-hidden className="shimmer-overlay slow-shimmer" />
                    <span className="relative z-10">View Live Demo</span>
                  </a>
                </div>
              </article>
            </section>
          </TiltCard>
        </div>

        {/* Technical Skills */}
        <div ref={skillsRef} className="reveal">
          <TiltCard>
            <section className="neon-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Technical Skills</h2>
              <div className="neon-divider mb-4" />
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Languages &amp; Frameworks:</strong> Python (Flask, Django), JavaScript, React, HTML5/CSS3, Java (academic)</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Cloud &amp; DevOps:</strong> GCP (Cloud Run), Docker, GitHub Actions, CI/CD, Terraform (basic), Agile/Scrum</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Databases:</strong> PostgreSQL, MySQL, MS SQL, Data Modeling</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Practices:</strong> TDD, Code Reviews, Secure Coding, Logging/Monitoring</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Collaboration Tools:</strong> SharePoint, Confluence, MS Teams</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Languages:</strong> Fluent in Arabic and English</li>
              </ul>
            </section>
          </TiltCard>
        </div>

        {/* Education & Certifications */}
        <div ref={eduRef} className="reveal">
          <TiltCard>
            <section className="neon-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Education &amp; Certifications</h2>
              <div className="neon-divider mb-4" />
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>B.S. Applied Computer Science:</strong> Eastern Michigan University, Magna Cum Laude (GPA 3.78), Dec 2022</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>A.A.S. Computer Information Systems:</strong> Henry Ford College, Cum Laude (GPA 3.55), May 2020</li>
                <li className="transition-transform duration-300 hover:-translate-y-0.5 text-cyan-100/90"><strong>Certification:</strong> Microsoft MTA - Software Development Fundamentals (2019)</li>
              </ul>
            </section>
          </TiltCard>
        </div>

        {/* Resume download */}
        <section className="text-center reveal">
          <ShimmerButton href="/resumes/Hakim_Alkafah_General_Resume.pdf" className="neon-btn" download>
            Download Full Resume
          </ShimmerButton>
        </section>

        {/* Contact */}
        <div ref={contactRef} className="reveal">
          <TiltCard>
            <section className="neon-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Contact</h2>
              <p className="text-lg text-cyan-100/90">Email: <a href="mailto:hakimalkafah@gmail.com" className="text-cyan-300 link-underline">hakimalkafah@gmail.com</a></p>
              <p className="text-lg text-cyan-100/90">LinkedIn: <a href="https://www.linkedin.com/in/hakim-alkafah-808014177/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 link-underline">hakim-alkafah</a></p>
            </section>
          </TiltCard>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-cyan-300/70 py-8 text-center text-sm w-full mt-10">
        {`Copyright ${new Date().getFullYear()} Hakim Alkafah - Built with neon love`}
      </footer>
    </div>
  );
};

export default App;
