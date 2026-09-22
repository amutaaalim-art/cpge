import { BookOpen, Calculator, CircleHelp, FileText, Info, Menu, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const links = [
    { href: '/', label: 'Accueil', icon: BookOpen },
    { href: '/calculateur', label: 'Calculateur', icon: Calculator },
    { href: '/comment-ca-marche', label: 'Comment ça marche', icon: CircleHelp },
    { href: '/faq', label: 'FAQ', icon: CircleHelp },
    { href: '/a-propos', label: 'À propos', icon: Info },
    { href: '/politique-de-confidentialite', label: 'Politique de confidentialité', icon: FileText },
  ];
  return (
    <div className="site-shell site-grid">
      <header className="relative z-20 border-b border-[hsl(var(--border)/.75)] bg-[hsl(var(--background)/.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <span className="grid h-10 w-10 place-items-center rounded-[13px] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_8px_20px_hsl(var(--primary)/.2)]">
              <span className="font-display text-lg font-extrabold">C</span>
            </span>
            <span>
              <span className="block font-display text-[15px] font-extrabold tracking-[-.03em]">CPGE Score</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">Maroc</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${location === href ? 'bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]'}`}>
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/calculateur" data-testid="button-header-calculator" className="hidden rounded-full bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-[0_7px_16px_hsl(var(--primary)/.17)] transition-transform hover:-translate-y-0.5 sm:block">
            Calculer mon score
          </Link>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} data-testid="button-mobile-menu" className="rounded-xl p-2 text-[hsl(var(--foreground))] md:hidden">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[hsl(var(--border)/.7)] px-5 py-3 md:hidden" aria-label="Navigation mobile">
            {links.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-${href.slice(1) || 'home'}`} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[hsl(var(--foreground))]">
                <Icon size={17} className="text-[hsl(var(--primary))]" /> {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[hsl(var(--border)/.8)] px-5 py-8 text-xs text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>CPGE Score Maroc · Un outil pour mieux se préparer.</span>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <Link href="/politique-de-confidentialite" data-testid="link-privacy-policy" className="font-semibold text-[hsl(var(--primary))] underline decoration-[hsl(var(--accent)/.7)] underline-offset-4 hover:decoration-[hsl(var(--primary))]">
            Politique de confidentialité
          </Link>
          <span className="font-mono">Formule officielle · calcul transparent</span>
        </div>
      </footer>
    </div>
  );
}