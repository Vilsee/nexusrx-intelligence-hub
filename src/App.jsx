import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import Demo from './pages/Demo';
import Leaderboard from './pages/Leaderboard';
import Corpus from './pages/Corpus';
import Playground from './pages/Playground';
import DocsLayout from './pages/docs/DocsLayout';
import DocsQuickstart from './pages/docs/DocsQuickstart';
import DocsAttackCategories from './pages/docs/DocsAttackCategories';
import DocsAPIReference from './pages/docs/DocsAPIReference';
import DocsCIIntegration from './pages/docs/DocsCIIntegration';
import NewScan from './pages/dashboard/NewScan';
import DashboardHome from './pages/dashboard/DashboardHome';
import Settings from './pages/dashboard/Settings';
import CelestialDemo from './pages/CelestialDemo';
import OdysseyDemo from './pages/OdysseyDemo';
import AnoAIDemo from './pages/AnoAIDemo';
import { ScanProvider } from './context/ScanContext';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '50px', backgroundColor: 'black', height: '100vh', width: '100vw', zIndex: 9999, position: 'absolute' }}>
          <h1>Something went wrong.</h1>
          <pre style={{ fontSize: '20px', whiteSpace: 'pre-wrap' }}>{this.state.error && this.state.error.toString()}</pre>
          <pre>{this.state.error && this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

import MidnightLuxeLayout from './components/MidnightLuxeLayout';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScanProvider>
          <MidnightLuxeLayout>
            <Routes>
              <Route path="/" element={<Landing />} />
              
              {/* Public Tools */}
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/corpus" element={<Corpus />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/celestial" element={<CelestialDemo />} />
              <Route path="/odyssey" element={<OdysseyDemo />} />
              <Route path="/ano-ai" element={<AnoAIDemo />} />

              {/* Documentation Hub */}
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={<DocsQuickstart />} />
                <Route path="quickstart" element={<DocsQuickstart />} />
                <Route path="attacks" element={<DocsAttackCategories />} />
                <Route path="api" element={<DocsAPIReference />} />
                <Route path="ci-cd" element={<DocsCIIntegration />} />
              </Route>

              {/* Developer Dashboard */}
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="new-scan" element={<NewScan />} />
                <Route path="reports" element={<DashboardHome />} />
                <Route path="report/:id" element={<Report />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </MidnightLuxeLayout>
        </ScanProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
