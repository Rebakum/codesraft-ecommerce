import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Add transition class for smooth theme change
    root.classList.add("theme-transitioning");
    setIsTransitioning(true);

    if (dark) {
      root.classList.add("dark");
      body.classList.add("dark");
      body.style.backgroundColor = "#1a0f08";
      body.style.color = "#f5e6d0";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      body.style.backgroundColor = "#fdf8f0";
      body.style.color = "#3e2715";
      localStorage.setItem("theme", "light");
    }

    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      root.classList.remove("theme-transitioning");
      setIsTransitioning(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [dark]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const saved = localStorage.getItem("theme");
      if (!saved) {
        setDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
