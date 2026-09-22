import { useEffect, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { AppShell } from '@/components/AppShell';
import { Home } from '@/pages/Home';
import { CalculatorPage } from '@/pages/Calculator';
import { HowItWorks } from '@/pages/HowItWorks';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { Faq } from '@/pages/Faq';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Seo() {
  const [location] = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'CPGE Score Maroc — Votre score, en clair',
      '/calculateur': 'Calculateur CPGE — CPGE Score Maroc',
      '/comment-ca-marche': 'Comment ça marche ? — CPGE Score Maroc',
      '/politique-de-confidentialite': 'Politique de confidentialité — CPGE Score Maroc',
      '/faq': 'FAQ — CPGE Score',
    };
    document.title = titles[location] ?? 'CPGE Score Maroc';
    const descriptions: Record<string, string> = {
      '/faq': "Retrouvez les réponses aux principales questions sur le calcul de votre score et l'utilisation de CPGE Score.",
    };
    const description = descriptions[location] ?? 'Calculez votre score de sélection CPGE au Maroc avec la formule officielle, étape par étape.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:title' }));
    ogTitle.setAttribute('content', document.title);
    const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:description' }));
    ogDescription.setAttribute('content', description);
  }, [location]);
  return null;
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
        <Seo />
        <AppShell>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/calculateur" component={CalculatorPage} />
            <Route path="/comment-ca-marche" component={HowItWorks} />
            <Route path="/politique-de-confidentialite" component={PrivacyPolicy} />
            <Route path="/faq" component={Faq} />
            <Route component={NotFound} />
          </Switch>
        </AppShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
