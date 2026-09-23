import { useState } from 'react';
import {
  Home, User, Briefcase, FileText, Brain, Code, Mail, Shield,
  ArrowRight, Download, ExternalLink, AlertTriangle, Eye, FileCheck,
  Video, Newspaper, X, Search, Database, Wrench
} from 'lucide-react';
import './App.css';

const profileLinks = {
  github: 'https://github.com/Axelle141188',
  linkedin: 'https://www.linkedin.com/in/axelle-t-inesa/',
  email: 'mailto:axelle.tandissa@gmail.com',
  substack: 'https://mindandmalice.substack.com',
  cvEn: '/Axelle_Tandissa_Fraud_Analyst_EN.pdf',
  cvFr: '/Axelle_Tandissa_Fraud_Analyst_FR.pdf'
};

const projects = [
  {
    title: 'Threat Intelligence Dashboard',
    description: 'Real-time cyber threat monitoring system focused on Luxembourg banking-sector threat intelligence.',
    tech: ['Python', 'OSINT', 'Streamlit', 'Threat Intel'],
    demo: 'https://axelle-threat-intelligence.streamlit.app/',
    video: 'https://www.youtube.com/embed/yg5vNW8SvaQ?rel=0',
    github: 'https://github.com/Axelle141188/threat-intelligence-dashboard',
    image: '/projects/threat-dashboard.png'
  },
  {
    title: 'AI Fraud Detection System',
    description: 'Machine learning prototype for banking fraud detection with model comparison and behavioural analysis.',
    tech: ['Python', 'Pandas', 'ML', 'Fraud'],
    demo: 'https://axelle-fraud-detection.streamlit.app/',
    video: 'https://www.youtube.com/embed/rhjoM1LJSqM?rel=0',
    github: 'https://github.com/Axelle141188/ai-fraud-detection',
    image: '/projects/ai-fraud.png'
  },
  {
    title: 'SEPA Social Engineering Detector',
    description: 'Multilingual detector for psychological manipulation patterns in SEPA-related fraud emails.',
    tech: ['Python', 'NLP', 'SEPA', 'Social Engineering'],
    demo: 'https://axelle-sepa-detector.streamlit.app/',
    video: 'https://www.youtube.com/embed/j9iLgp51wDw?rel=0',
    github: 'https://github.com/Axelle141188/sepa-social-engineering-detector',
    image: '/projects/sepa-detector.png'
  }
];

const cases = [
  { id: '#01', title: 'Wirecard AG', meta: 'Accounting Fraud • Institutional Trust', url: 'https://github.com/Axelle141188/fraud-case-files/blob/main/case-01-wirecard.md' },
  { id: '#02', title: 'Fake Banking Advisor', meta: 'APP Fraud • Social Engineering', url: 'https://github.com/Axelle141188/fraud-case-files/blob/main/case-02-fake-banking-advisor.md' },
  { id: '#03', title: 'Valdy / CCF', meta: 'Identity Theft • Organized Fraud', url: 'https://github.com/Axelle141188/fraud-case-files/blob/main/case-03-ccf-valdy.md' }
];

const behaviouralRows = [
  [
    'Internal Accounting Fraud (e.g. Wirecard)',
    'Halo effect, groupthink, confirmation bias',
    'Blind trust, absence of critical thinking, collective validation',
    'Revenue concentrated in opaque regions, non-rotating auditor, funds never directly verified',
    'Auditor rotation, Bank Confirmation procedure, whistleblower protection'
  ],
  [
    'APP Fraud / Fake Banking Advisor',
    'Artificial urgency, authority impersonation, illusion of control',
    'Acute stress, obedience to authority, fast action without reflection',
    'SMS sender name spoofing, transfers to recently opened relay accounts, inbound call followed by unusual transfer',
    'Behavioural detection, independent verification callback, Naegelen Law anti-spoofing'
  ],
  [
    'Insider Threat (e.g. Valdy / CCF)',
    'Automatic institutional trust, invisibility of temporary status',
    'Absence of oversight, presumption of good faith toward the employee',
    'Repeated Master Data modifications, unsolicited card orders, multiple payment limit increases',
    'UEBA, Four-Eyes Principle, Segregation of Duties, automatic client alerts'
  ],
  [
    'Romance Scam',
    'Emotional isolation, need for attachment, progressive trust-building',
    'Emotional dependency, sharing of personal information, repeated voluntary transfers',
    'Recently created social media profile, refusal of video or voice calls, progressive financial requests',
    'Detection of unusual international transfers, banking behavioural alerts, reporting via Stop-Escroqueries'
  ],
  [
    'Banking Phishing',
    'Fear, urgency, institutional authority',
    'Immediate link click, credential entry without verification, panic response',
    'Suspicious URL mimicking the real bank, spoofed email header, fake login page',
    'Anti-phishing filters, Strong Customer Authentication (SCA/PSD2), client awareness'
  ],
  [
    'Deepfake Fraud',
    'Visual and auditory trust, hierarchical authority',
    'Compliance without verification, fast action under apparent pressure from a superior',
    'AI-generated video or voice, urgent transfer request outside normal channels, unsolicited contact',
    'Independent verification via separate channel, anti-fraud protocols for large transfers, employee training'
  ],
  [
    'Pig Butchering Scam',
    'Progressive emotional bond, greed, FOMO (Fear Of Missing Out)',
    'Progressive and voluntary investments, borrowing to invest further, denial in the face of warning signs',
    'Fictitious crypto platform, gains displayed but not withdrawable, initial contact via "wrong number" on messaging app',
    'Reporting of unregulated platforms, banking alerts on repeated crypto transfers, financial education'
  ]
];

function ProjectCard({ project, index, onWatchDemo }) {
  return (
    <article className="project-card">
      <a className={`project-image image-${index}`} href={project.demo} target="_blank" rel="noreferrer">
        <img src={project.image} alt={`${project.title} screenshot`} />
        <span className="image-overlay">Open Live Demo</span>
      </a>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
      <div className="card-footer">
        <a href={project.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={13} /></a>
        <button
          type="button"
          className="watch-demo-btn"
          onClick={() => onWatchDemo(project)}
          aria-label={`Watch ${project.title} demo video`}
        >
          <Video size={14} /> Watch Demo
        </button>
        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}><Code size={17} /></a>
      </div>
    </article>
  );
}

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div>
          <div className="logo-card"><Shield size={38} /></div>
          <nav className="nav-list">
            {[
              [Home, 'HOME', '#home'], [User, 'ABOUT ME', '#about'], [Briefcase, 'CORE PROJECTS', '#projects'],
              [Code, 'TECHNICAL SKILLS', '#skills'], [FileText, 'FRAUD CASE FILES', '#cases'],
              [Brain, 'BEHAVIOURAL INTELLIGENCE', '#behavioral'], [Newspaper, 'MIND & MALICE', '#content'], [Mail, 'CONTACT', '#contact']
            ].map(([Icon, label, link], i) => <a className={i === 0 ? 'active' : ''} href={link} key={label}><Icon size={18} /><span>{label}</span></a>)}
          </nav>
        </div>
        <div className="sidebar-socials">
          <a href={profileLinks.github} target="_blank" rel="noreferrer"><Code size={18} /></a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
          <a href={profileLinks.email}><Mail size={18} /></a>
        </div>
      </aside>

      <main className="main">
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Hi, I'm</p>
            <h1>Axelle Tandissa Inesa <span>Cyber Fraud & Behavioural Intelligence Analyst</span></h1>
            <p className="hero-text">
              I analyse fraud and scams through the intersection of behavioural psychology,
              data and cybersecurity — focusing on how manipulation tactics and human
              vulnerabilities are exploited in financial attacks.
            </p>
            <p className="brand-line">
              Fraud Intelligence • Threat Intelligence • Behavioural Intelligence
            </p>
            <div className="tags">{['Fraud Detection','Threat Intelligence','Fraud Investigation','Behavioural Analysis','Cybersecurity'].map(t => <span key={t}>{t}</span>)}</div>
            <div className="hero-buttons">
              <a href={profileLinks.cvEn} className="primary-btn" download>
                <Download size={16} /> English CV
              </a>
              <a href={profileLinks.cvFr} className="ghost-btn" download>
                <Download size={16} /> CV français
              </a>
            </div>
          </div>

          <div className="hero-dashboard">
            <div className="dark-panel chart-panel">
              <div className="panel-header">
                <h3>THREAT INTELLIGENCE DASHBOARD</h3>
                <a href="https://axelle-threat-intelligence.streamlit.app/" target="_blank" rel="noreferrer">
                  Live Dashboard →
                </a>
              </div>
              <div className="metrics">
                <div><small>IOC monitoring</small><strong>Automated</strong><span>hourly refresh</span></div>
                <div><small>IP enrichment</small><strong>GeoIP + ASN</strong><span>network context</span></div>
                <div><small>Threat feeds</small><strong>2</strong><span>Abuse.ch + ET</span></div>
              </div>
              <div className="threat-map-preview">
                <img
                  src="/projects/threat-map.png"
                  alt="Geographic distribution of malicious IPs"
                />
              </div>
            </div>

            <div className="dark-panel detections-panel">
              <div className="panel-header">
                <h3>THREAT INTELLIGENCE WORKFLOW</h3>
                <a href="https://axelle-threat-intelligence.streamlit.app/" target="_blank" rel="noreferrer">
                  Explore →
                </a>
              </div>
              <div className="soc-pipeline">
                {[
                  { step: 'COLLECT', desc: 'Abuse.ch + Emerging Threats', sub: 'Malicious IP feeds' },
                  { step: 'ENRICH', desc: 'GeoLite2 City + ASN', sub: 'Location and network context' },
                  { step: 'ANALYZE', desc: 'Countries + organizations', sub: 'Infrastructure patterns' },
                  { step: 'INVESTIGATE', desc: 'Interactive IP lookup', sub: 'IOC verification' }
                ].map((item, i, arr) => (
                  <div key={item.step} className="pipeline-item">
                    <div className="pipeline-step">
                      <div className="pipeline-dot" />
                      <div className="pipeline-content">
                        <b>{item.step}</b>
                        <span>{item.desc}</span>
                        <small>{item.sub}</small>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="pipeline-arrow">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-panel">
          <div className="section-header"><h2><Briefcase size={22}/> CORE PROJECTS</h2><a href={profileLinks.github} target="_blank" rel="noreferrer">View all projects <ArrowRight size={13}/></a></div>
          <div className="projects-grid">{projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onWatchDemo={setActiveVideo}/>)}</div>
        </section>

        <section id="skills" className="skills-panel">
          <div className="section-header"><h2><Code size={22}/> TECHNICAL SKILLS</h2></div>
          <div className="skills-grid">
            <div className="skill-group"><div className="skill-icon"><Search size={20}/></div><div><h3>Fraud & Investigation</h3><p>Fraud detection · Social engineering analysis · Manipulation technique detection · Risk scoring</p></div></div>
            <div className="skill-group"><div className="skill-icon"><Shield size={20}/></div><div><h3>Threat Intelligence & OSINT</h3><p>Threat feeds · IOC analysis · GeoIP / ASN enrichment · OSINT</p></div></div>
            <div className="skill-group"><div className="skill-icon"><Database size={20}/></div><div><h3>Data & Machine Learning</h3><p>Python · pandas · scikit-learn · Random Forest · Logistic regression · Isolation Forest · Imbalanced datasets</p></div></div>
            <div className="skill-group"><div className="skill-icon"><Wrench size={20}/></div><div><h3>Tools</h3><p>Streamlit · Plotly · Git · GitHub · VS Code</p></div></div>
          </div>
        </section>

        <div className="lower-grid">
          <div className="left-stack">
            <section id="behavioral" className="light-panel">
              <div className="section-header">
                <h2><Brain size={22}/> BEHAVIOURAL INTELLIGENCE</h2>
                <a href="https://github.com/Axelle141188/behavioral-intelligence" target="_blank" rel="noreferrer">View full analysis <ArrowRight size={13}/></a>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Fraud Type</th>
                      <th>Psychological Trigger</th>
                      <th>Victim Behavior</th>
                      <th>Technical Indicators</th>
                      <th>Detection Opportunities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {behaviouralRows.map(row => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => <td key={i}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="right-stack">
            <section id="cases" className="case-panel">
              <div className="section-header"><h2><FileText size={22}/> FRAUD CASE FILES</h2><a href="https://github.com/Axelle141188/fraud-case-files" target="_blank" rel="noreferrer">View all cases <ArrowRight size={13}/></a></div>
              {cases.map((item, i) => (
                <a className="case-item" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
                  <div className={`case-icon case-color-${i}`}><FileText size={19}/></div>
                  <div><small>Case File {item.id}</small><h3>{item.title}</h3><p>{item.meta}</p></div>
                  <ArrowRight size={18}/>
                </a>
              ))}
              <a className="outline-btn" href="https://github.com/Axelle141188/fraud-case-files" target="_blank" rel="noreferrer"><FileText size={16}/> View All Case Files</a>
            </section>

            <section id="about" className="about-card">
              <h2><User size={18}/> ABOUT ME</h2>
              <p>
                I analyse fraud and scams, with a focus on the psychological mechanics that make them work. My background is in behavioural psychology, which is where the interest started: understanding how people are manipulated matters as much as understanding the systems being attacked.
              </p>
              <p>
                I build hands-on tools for fraud detection, social engineering analysis and threat intelligence, and I publish analyses of real scam cases through Mind & Malice. I'm currently preparing for CompTIA Security+.
              </p>
              <div className="traits">
                <div><Brain size={20}/><span>Analytical Mindset</span></div>
                <div><Eye size={20}/><span>Behavioural Perspective</span></div>
                <div><FileCheck size={20}/><span>Investigative Rigour</span></div>
                <div><AlertTriangle size={20}/><span>Continuous Learner</span></div>
              </div>
              <div id="contact" className="contact-grid">
                <div>
                  <h4>LET'S CONNECT</h4>
                  <p>📧 <a href={profileLinks.email}>axelle.tandissa@gmail.com</a></p>
                  <p>🔗 <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
                  <p>📍 Belgium-based · Open to relocate / remote</p>
                </div>
                <div id="content">
                  <h4>FOLLOW MY WORK</h4>
                  <a
                    className="follow-box article"
                    href="https://mindandmalice.substack.com/p/elle-a-verifie-linkedin-elle-a-appele"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileText size={25}/><div><b>Latest Article</b><span>Elle a vérifié LinkedIn. Elle a appelé la banque. Elle a perdu 120 000 €.</span></div>
                  </a>
                  <a className="follow-box purple" href={profileLinks.substack} target="_blank" rel="noreferrer">
                    <Newspaper size={25}/><div><b>Newsletter</b><span>Mind & Malice</span></div>
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {activeVideo && (
        <div className="video-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeVideo.title} demo video`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="video-modal-header">
              <div>
                <small>PROJECT DEMO</small>
                <h3>{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                className="video-modal-close"
                onClick={() => setActiveVideo(null)}
                aria-label="Close demo video"
              >
                <X size={20} />
              </button>
            </div>
            <div className="video-frame-wrap">
              <iframe
                src={activeVideo.video}
                title={`${activeVideo.title} portfolio demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
