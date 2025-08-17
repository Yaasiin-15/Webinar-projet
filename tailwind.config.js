module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // blue-800 - Professional navy for trust and authority
        secondary: "#3b82f6", // blue-500 - Supporting blue for hierarchy and links
        accent: "#ea580c", // orange-600 - High-contrast orange for CTAs and urgency elements
        background: "#ffffff", // white - Clean white canvas for maximum readability
        surface: "#f8fafc", // slate-50 - Subtle gray for section separation without borders
        "text-primary": "#1f2937", // gray-800 - High contrast dark gray for scanning
        "text-secondary": "#6b7280", // gray-500 - Medium gray for supporting text without distraction
        success: "#059669", // emerald-600 - Green for form confirmation and positive indicators
        warning: "#d97706", // amber-600 - Amber for countdown timer and urgency messaging
        error: "#dc2626", // red-600 - Red for form validation feedback only
        border: "#e5e7eb", // gray-200 - Minimal borders for form inputs and subtle card separation
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}