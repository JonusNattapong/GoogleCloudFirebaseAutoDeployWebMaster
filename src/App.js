import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Placeholder components - to be implemented in separate files
const Dashboard = () => (
  <div className="dashboard">
    <h2>Deployment Dashboard</h2>
    <div className="deployment-status">
      <h3>Current Status</h3>
      <div className="status-card active">
        Production: Active
      </div>
      <div className="status-card">
        Staging: Ready
      </div>
    </div>
  </div>
);

const Deployments = () => (
  <div className="deployments">
    <h2>Recent Deployments</h2>
    <div className="deployment-list">
      <div className="deployment-item">
        <span className="status success">✓</span>
        <span className="environment">Production</span>
        <span className="timestamp">2 hours ago</span>
      </div>
    </div>
  </div>
);

const Settings = () => (
  <div className="settings">
    <h2>Deployment Settings</h2>
    <form className="settings-form">
      <div className="form-group">
        <label>Project ID</label>
        <input type="text" placeholder="your-project-id" />
      </div>
      <div className="form-group">
        <label>Environment</label>
        <select>
          <option value="production">Production</option>
          <option value="staging">Staging</option>
          <option value="development">Development</option>
        </select>
      </div>
    </form>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Firebase AutoDeploy WebMaster</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/deployments">Deployments</Link>
            <Link to="/settings">Settings</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deployments" element={<Deployments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Google Cloud Firebase AutoDeploy WebMaster &copy; 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;