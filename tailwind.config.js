/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "background-01": "hsl(var(--background-01))",
      "background-02": "hsl(var(--background-02))",
      "background-03": "hsl(var(--background-03))",
      "background-04": "hsl(var(--background-04))",
      "foreground-01": "hsl(var(--foreground-01))",
      "foreground-02": "hsl(var(--foreground-02))",
      "foreground-03": "hsl(var(--foreground-03))",
      "foreground-04": "hsl(var(--foreground-04))",
    },
  },
};
