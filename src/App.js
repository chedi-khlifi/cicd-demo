import React, { useState } from 'react';
import './App.css';

const STEPS = [
  { icon: '📝', label: 'Code commit', detail: 'git push origin main' },
  { icon: '⚙️', label: 'GitHub Actions triggered', detail: 'Workflow: CI/CD — Build & Deploy' },
  { icon: '🧪', label: 'Test & Lint', detail: 'npm test && npm run lint' },
  { icon: '📦', label: 'Build React app', detail: 'npm run build → /build folder' },
  { icon: '🚀', label: 'Deploy to gh-pages', detail: 'peaceiris/actions-gh-pages@v3' },
  { icon: '🌐', label: 'Live on GitHub Pages', detail: 'https://your-name.github.io/cicd-demo' },
];

export default function App() {
  const [active, setActive] = useState(null);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState([]);

  const runPipeline = () => {
    if (running) return;
    setRunning(true);
    setDone([]);
    setActive(null);
    STEPS.forEach((_, i) => {
      setTimeout(() => {
        setActive(i);
        setTimeout(() => {
          setDone(d => [...d, i]);
          if (i === STEPS.length - 1) {
            setActive(null);
            setRunning(false);
          }
        }, 900);
      }, i * 1100);
    });
  };

  return (
    <div className="app">
      <header>
        <h1>🚀 CI/CD Pipeline Demo</h1>
        <p>React → GitHub Actions → GitHub Pages</p>
        <span className="sha">commit: <code>a3f9c12</code></span>
      </header>

      <div className="pipeline">
        {STEPS.map((s, i) => (
          <div key={i} className={`step ${active === i ? 'running' : ''} ${done.includes(i) ? 'done' : ''}`}>
            <div className="step-icon">{s.icon}</div>
            <div className="step-body">
              <div className="step-label">{s.label}</div>
              <div className="step-detail">{s.detail}</div>
            </div>
            <div className="step-status">
              {done.includes(i) ? '✅' : active === i ? '⏳' : '⬜'}
            </div>
          </div>
        ))}
      </div>

      <button className="run-btn" onClick={runPipeline} disabled={running}>
        {running ? 'Pipeline running…' : '▶ Simulate pipeline'}
      </button>

      {done.length === STEPS.length && (
        <div className="success-banner">
          ✅ Deployed! Your app is live on GitHub Pages.
        </div>
      )}
    </div>
  );
}
