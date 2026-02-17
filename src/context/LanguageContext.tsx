import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    // Load language from storage if available
    useEffect(() => {
        const storedLang = localStorage.getItem('shefa_lang');
        if (storedLang === 'en' || storedLang === 'ms') {
            setLanguage(storedLang);
        }
    }, []);

    // Save to storage on change
    useEffect(() => {
        localStorage.setItem('shefa_lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: keyof typeof translations['en']) => {
        return translations[language][key] || translations['en'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
