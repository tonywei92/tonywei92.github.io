"use client";
import { Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ButtonToggleDarkMode() {
  const theme = useTheme();
  return (
    <Button
      onClick={() => theme.setTheme(theme.theme === "dark" ? "light" : "dark")}
      variant="ghost"
      size="icon"
    >
      {theme.theme === "dark" ? (
        <SunMoon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
}
