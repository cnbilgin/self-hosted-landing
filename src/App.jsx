import React, { useState, useEffect } from "react";
import AppBlock from "./components/AppBlock";
import "./App.css";

function App() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    try {
      const response = await fetch("/config/apps.json");
      if (!response.ok) {
        throw new Error("Failed to load applications");
      }
      const data = await response.json();
      setApps(data.apps || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAppClick = (app) => {
    if (app.url) {
      window.open(app.url, "_blank");
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <p>Loading applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={loadApps} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Self-Hosted Apps</h1>
        <p>Click on any app to access it</p>
      </header>

      <main>
        <div className="apps-grid">
          {apps.map((app) => (
            <AppBlock
              key={app.id}
              app={app}
              onClick={() => handleAppClick(app)}
            />
          ))}
        </div>

        {apps.length === 0 && (
          <div className="no-apps">
            <p>No applications found</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
