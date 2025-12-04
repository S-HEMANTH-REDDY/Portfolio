import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full cursor-pointer
        bg-gradient-to-br from-accent/20 via-accent/10 to-transparent
        backdrop-blur-xl border border-accent/30
        shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]
        hover:shadow-[0_12px_40px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
        hover:border-accent/50 hover:scale-110 hover:rotate-12
        active:scale-95 active:rotate-0
        transition-all duration-500 ease-out
        group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 
        group-hover:from-accent/20 group-hover:via-accent/10 group-hover:to-accent/20 
        transition-all duration-700 ease-out" />
      
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
        bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]
        scale-0 group-hover:scale-150 transition-all duration-700 ease-out" 
        style={{ opacity: 0.1 }} />

      {/* Icon container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]
            group-hover:text-amber-300 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]
            group-hover:rotate-180 transition-all duration-700 ease-out" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]
            group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]
            group-hover:-rotate-12 transition-all duration-500 ease-out" />
        )}
      </div>

      {/* Outer glow ring */}
      <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-accent/30 via-transparent to-accent/30
        blur-md transition-opacity duration-500 -z-10" />
    </button>
  );
};

export default ThemeToggle;
