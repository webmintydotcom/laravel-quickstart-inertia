import { Head } from '@inertiajs/react';
import { useState } from 'react';

const links = [
    {
        title: 'Documentation',
        description: 'Laravel has wonderful documentation covering every aspect of the framework.',
        href: 'https://laravel.com/docs',
    },
    {
        title: 'Inertia.js',
        description: 'Build single-page apps without building an API. Inertia connects your Laravel backend to your React frontend.',
        href: 'https://inertiajs.com',
    },
    {
        title: 'Shadcn UI',
        description: 'Beautifully designed, accessible components that you own and can customize to your needs.',
        href: 'https://ui.shadcn.com',
    },
    {
        title: 'Tailwind CSS',
        description: 'A utility-first CSS framework packed with classes that can be composed to build any design.',
        href: 'https://tailwindcss.com',
    },
];

export default function Welcome() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    }

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <header className="border-b">
                    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-3">
                            <svg
                                className="h-8 w-auto text-foreground"
                                viewBox="0 0 50 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25 0L50 13V39L25 52L0 39V13L25 0Z"
                                    fill="currentColor"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M25 0L50 13V39L25 52L0 39V13L25 0Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <text
                                    x="25"
                                    y="32"
                                    textAnchor="middle"
                                    fill="currentColor"
                                    fontSize="20"
                                    fontWeight="bold"
                                >
                                    L
                                </text>
                            </svg>
                            <span className="text-lg font-semibold text-foreground">
                                Laravel Quickstart
                            </span>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </header>

                {/* Hero */}
                <section className="mx-auto max-w-5xl px-6 py-20 text-center">
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                            React + Inertia.js + Shadcn UI + Tailwind CSS v4
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Start building with Laravel
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            A quickstart template with everything you need to build modern, full-stack applications.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <a
                                href="https://laravel.com/docs"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                            >
                                Get Started
                            </a>
                            <a
                                href="https://github.com/laravel/laravel"
                                className="inline-flex h-10 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </section>

                {/* Cards */}
                <section className="mx-auto max-w-5xl px-6 pb-20">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {links.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
                            >
                                <h2 className="flex items-center gap-2 font-semibold text-foreground">
                                    {link.title}
                                    <svg
                                        className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {link.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t">
                    <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-muted-foreground">
                        Laravel v12 + React + Inertia.js
                    </div>
                </footer>
            </div>
        </>
    );
}
