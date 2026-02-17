import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Borrowers from './pages/Borrowers';
import Lenders from './pages/Lenders';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) as Page;
      if (['home', 'borrowers', 'lenders', 'about', 'services', 'contact'].includes(path)) {
        setCurrentPage(path);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Check initial URL
    const path = window.location.pathname.slice(1) as Page;
    if (['home', 'borrowers', 'lenders', 'about', 'services', 'contact'].includes(path)) {
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
        return <Home navigateTo={navigateTo} />;
      case 'borrowers':
        return <Borrowers />;
      case 'lenders':
        return <Lenders />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-shefa-white">
        <Navigation currentPage={currentPage} onNavigate={navigateTo} />
        {renderPage()}
        <Footer onNavigate={navigateTo} />
      </div>
    </LanguageProvider>
  );
}

export default App;
