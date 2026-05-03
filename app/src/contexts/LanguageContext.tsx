"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "excelso-lang";

function readStoredLanguage(): Language | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "en" || v === "es") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = readStoredLanguage();
    if (stored) setLanguageState(stored);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
