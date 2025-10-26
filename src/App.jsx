import React from 'react';

const App = () => {
  return (
    // Ensure the root always stretches the full viewport width
    <div className="w-screen overflow-x-hidden font-sans antialiased text-gray-900 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-10 shadow-lg drop-shadow-lg">
        <div className="container mx-auto px-6 md:px-10 text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Hakim Alkafah</h1>
          <p className="text-2xl md:text-3xl font-medium text-indigo-100/90">Full-Stack Software Engineer</p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-5xl px-6 md:px-10 py-12 grid gap-12 grow">
        {/* Professional Summary */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-gray-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-600">Professional Summary</h2>
          <p className="leading-relaxed text-lg">
            Full-stack software engineer with extensive experience developing scalable, secure, and distributed solutions using Python, Flask, React, Docker, and SQL. Proven track record automating workflows, modernizing CI/CD pipelines, and building robust, containerized cloud deployments.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-gray-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-600">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>Languages &amp; Frameworks:</strong> Python (Flask, Django), JavaScript, React, HTML5/CSS3, Java (academic)</li>
            <li><strong>Cloud &amp; DevOps:</strong> GCP (Cloud Run), Docker, GitHub Actions, CI/CD, Terraform (basic), Agile/Scrum</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, MS SQL, Data Modeling</li>
            <li><strong>Practices:</strong> TDD, Code Reviews, Secure Coding, Logging/Monitoring</li>
            <li><strong>Collaboration Tools:</strong> SharePoint, Confluence, MS Teams</li>
            <li><strong>Languages:</strong> Fluent in Arabic and English</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-gray-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-600">Professional Experience</h2>
          <div className="space-y-8 divide-y divide-gray-200">
            {/* Ford */}
            <div className="pt-0 first:pt-0">
              <h3 className="text-2xl font-bold text-gray-800">Core Systems Software Engineer – Ford Motor Company</h3>
              <p className="text-sm text-gray-600 mb-4">Mar&nbsp;2023 – Present | Dearborn, MI</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Developed and deployed scalable full-stack solutions on GCP serving over 200 engineers.</li>
                <li>Automated workflows reducing manual processes, saving 1200+ engineer-hours annually.</li>
                <li>Built secure, containerized microservices with Flask, React, and Docker.</li>
                <li>Modernized CI/CD pipelines using GitHub Actions, reducing deployment times by 50%.</li>
              </ul>
            </div>

            {/* PDW */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-800">Prototype Test Driver – Performance Driven Workforce (Ford Contract)</h3>
              <p className="text-sm text-gray-600 mb-4">Oct&nbsp;2021 – Feb&nbsp;2023 | Allen Park, MI</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Evaluated pre-production software, documenting 300+ software issues for engineering resolution.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-gray-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-600">Education &amp; Certifications</h2>
          <ul className="space-y-3 text-lg list-disc list-inside">
            <li><strong>B.S. Applied Computer Science:</strong> Eastern Michigan University, Magna Cum Laude (GPA 3.78), Dec 2022</li>
            <li><strong>A.A.S. Computer Information Systems:</strong> Henry Ford College, Cum Laude (GPA 3.55), May 2020</li>
            <li><strong>Certification:</strong> Microsoft MTA – Software Development Fundamentals (2019)</li>
          </ul>
        </section>

        {/* Resume download */}
        <section className="text-center">
          <a
            href="/resumes/Hakim_Alkafah_General_Resume.pdf"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-400/60"
            download
          >
            Download Full Resume
          </a>
        </section>

        {/* Contact */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-gray-200 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-600">Contact</h2>
          <p className="text-lg">Email: <a href="mailto:hakimalkafah@gmail.com" className="text-indigo-600 underline hover:text-indigo-800">hakimalkafah@gmail.com</a></p>
          <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/hakim-alkafah-808014177/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-800">hakim-alkafah</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm w-full mt-16">
        © {new Date().getFullYear()} Hakim Alkafah. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
