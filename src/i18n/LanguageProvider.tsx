import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./context";
import { translations, type Language } from "./translations";

const STORAGE_KEY = "casa-monte-lang";

const isLanguage = (value: unknown): value is Language =>
  value === "de" || value === "en";

const getInitialLang = (): Language => {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;

    const browser = window.navigator.language.toLowerCase();
    if (browser.startsWith("en")) return "en";
  }
  return "de";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage may be unavailable (private mode); language still applies.
    }
  }, [lang]);

  const toggle = useCallback(
    () => setLang((prev) => (prev === "de" ? "en" : "de")),
    [],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
