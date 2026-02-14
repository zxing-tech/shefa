import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Borrowers from './pages/Borrowers';
import Lenders from './pages/Lenders';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

import { ThemeProvider } from './context/ThemeContext';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'industries' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) as Page;
      if (['home', 'borrowers', 'lenders', 'about', 'services', 'industries', 'contact'].includes(path)) {
        setCurrentPage(path);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Check initial URL
    const path = window.location.pathname.slice(1) as Page;
    if (['home', 'borrowers', 'lenders', 'about', 'services', 'industries', 'contact'].includes(path)) {
      setCurrentPage(path);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'borrowers':
        return <Borrowers />;
      case 'lenders':
        return <Lenders />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'industries':
        return <Industries />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation currentPage={currentPage} onNavigate={navigateTo} />
        {renderPage()}
        <Footer onNavigate={navigateTo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
