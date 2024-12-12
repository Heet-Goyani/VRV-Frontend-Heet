import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F3F4F6', // Light gray
                foreground: '#1F2937', // Dark gray
                card: {
                    DEFAULT: '#FFFFFF', // White card background
                    foreground: '#1F2937', // Dark gray text
                },
                popover: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#1F2937',
                },
                primary: {
                    DEFAULT: '#1D4ED8', // Bold blue
                    foreground: '#FFFFFF', // White text on primary
                },
                secondary: {
                    DEFAULT: '#10B981', // Soft teal
                    foreground: '#FFFFFF', // White text on secondary
                },
                muted: {
                    DEFAULT: '#9CA3AF', // Muted gray
                    foreground: '#6B7280', // Darker muted gray
                },
                accent: {
                    DEFAULT: '#F97316', // Orange
                    foreground: '#FFFFFF', // White text on accent
                },
                destructive: {
                    DEFAULT: '#DC2626', // Red
                    foreground: '#FFFFFF', // White text on destructive
                },
                border: '#E5E7EB', // Light border gray
                input: '#FFFFFF', // White input background
                ring: '#3B82F6', // Ring blue
                chart: {
                    '1': '#1D4ED8',
                    '2': '#10B981',
                    '3': '#F97316',
                    '4': '#F59E0B', // Yellow
                    '5': '#DC2626',
                },
                sidebar: {
                    DEFAULT: '#1F2937', // Dark sidebar
                    foreground: '#F3F4F6', // Light text
                    primary: '#3B82F6', // Sidebar accent
                    'primary-foreground': '#FFFFFF',
                    accent: '#F97316',
                    'accent-foreground': '#FFFFFF',
                    border: '#374151', // Darker border
                    ring: '#3B82F6',
                },
            },
            borderRadius: {
                lg: '16px', // Large rounded corners
                md: '12px', // Medium rounded corners
                sm: '8px', // Small rounded corners
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
