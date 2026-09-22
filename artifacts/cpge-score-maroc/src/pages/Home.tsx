import { ArrowRight, Check, CircleHelp, FileCheck2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

const pieces = [
  { key: 'N1', title: 'Parcours scolaire', text: 'Le bonus lié à un éventuel redoublement en première année ou en terminale.' },
  { key: 'N2', title: 'Notes du bac', text: 'La moyenne pondérée des notes de la première et de la deuxième année.' },
  { key: 'N3', title: 'Matières qualifiantes', text: 'Chaque note compte selon les coefficients exacts de votre filière.' },
  { key: 'N4', title: 'Conseil de classe', text: 'La note attribuée par le conseil, sur 25, entre dans le calcul final.' },
];

export function Home() {
  return (
    <div>
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute right-[6%] top-16 hidden h-56 w-56 rounded-full bg-[hsl(var(--accent)/.12)] blur-3xl lg:block" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
          <div className="relative">
            <div className="eyebrow fade-up mb-5 flex items-center gap-2"><Sparkles size={13} /> Votre repère pour les CPGE marocaines</div>
            <h1 className="fade-up font-display text-[clamp(2.8rem,7vw,5.7rem)] font-extrabold leading-[.99] tracking-[-.07em] text-[hsl(var(--foreground))]">
              Votre score,<br /><span className="text-[hsl(var(--primary))]">en clair.</span>
            </h1>
            <p className="fade-up-delay mt-7 max-w-lg text-lg leading-8 text-[hsl(var(--muted-foreground))]">
              Un calcul transparent et vérifiable de votre score, pour éclairer votre parcours
            </p>
            <div className="fade-up-delay mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/calculateur" data-testid="button-start-calculator" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[hsl(var(--primary))] px-6 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-[0_12px_24px_hsl(var(--primary)/.2)] transition-transform hover:-translate-y-0.5">
                Commencer le calcul <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/comment-ca-marche" data-testid="link-learn-formula" className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/.62)] px-6 py-3.5 text-sm font-bold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--card))]">
                Voir la formule
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[hsl(var(--primary))]" /> Calcul local et privé</span>
              <span className="flex items-center gap-1.5"><FileCheck2 size={15} className="text-[hsl(var(--primary))]" /> Sans approximation</span>
            </div>
          </div>
          <div className="soft-float relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-5 rounded-[36px] border border-[hsl(var(--primary)/.1)]" />
            <div className="relative overflow-hidden rounded-[27px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[0_24px_60px_hsl(var(--foreground)/.1)]">
              <div className="flex items-center justify-between border-b border-[hsl(var(--border))] px-6 py-5">
                <div><div className="font-display text-sm font-bold">Aperçu du calcul</div><div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">Filière MP · simulation</div></div>
                <span className="rounded-full bg-[hsl(var(--secondary))] px-3 py-1 font-mono text-[10px] font-bold text-[hsl(var(--primary))]">PRÊT</span>
              </div>
              <div className="p-6">
                <div className="mb-6 rounded-2xl bg-[hsl(var(--primary))] p-5 text-[hsl(var(--primary-foreground))]">
                  <div className="text-xs opacity-75">Score estimé</div><div className="mt-2 font-mono text-5xl font-bold tracking-[-.08em]">142,68</div><div className="mt-1 text-xs opacity-70">sur une formule détaillée</div>
                </div>
                <div className="space-y-3">
                  {pieces.map((piece, index) => <div key={piece.key} className="flex items-center justify-between rounded-xl border border-[hsl(var(--border)/.75)] px-4 py-3"><div className="flex items-center gap-3"><span className="font-mono text-xs font-bold text-[hsl(var(--primary))]">{piece.key}</span><span className="text-sm font-semibold">{piece.title}</span></div><span className="font-mono text-sm text-[hsl(var(--muted-foreground))]">{['10,00', '16,33', '15,72', '20,00'][index]}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-[hsl(var(--border)/.75)] bg-[hsl(var(--card)/.55)]">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="max-w-xl"><div className="eyebrow mb-3">Le calcul, sans zone grise</div><h2 className="font-display text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">Quatre repères. Une décision plus sereine.</h2></div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {pieces.map((piece, index) => <article key={piece.key} className="group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background)/.7)] p-5 transition-transform hover:-translate-y-1"><div className="flex items-center justify-between"><span className="font-mono text-sm font-bold text-[hsl(var(--primary))]">{piece.key}</span><span className="grid h-7 w-7 place-items-center rounded-full bg-[hsl(var(--secondary))] text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span></div><h3 className="mt-8 font-display text-lg font-bold">{piece.title}</h3><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{piece.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-24">
        <div><div className="eyebrow mb-3">Pensé pour vous</div><h2 className="font-display text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">Pas besoin d’être expert en formules.</h2><p className="mt-4 leading-7 text-[hsl(var(--muted-foreground))]">Avancez étape par étape. À chaque écran, vous savez quoi renseigner, pourquoi, et comment votre note est prise en compte.</p><Link href="/comment-ca-marche" data-testid="link-how-it-works" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">Comprendre le détail <ArrowRight size={16} /></Link></div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[['01', 'Choisissez', 'Votre filière et votre baccalauréat.'], ['02', 'Renseignez', 'Vos notes, avec leurs décimales.'], ['03', 'Vérifiez', 'Le détail avant de retenir votre score.']].map(([number, title, text]) => <div key={number} className="rounded-2xl bg-[hsl(var(--secondary)/.7)] p-5"><div className="font-mono text-xs text-[hsl(var(--accent))]">{number}</div><div className="mt-9 font-display font-bold">{title}</div><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text}</p></div>)}
        </div>
      </section>
      <section className="mx-5 mb-16 rounded-[28px] bg-[hsl(var(--primary))] px-6 py-12 text-center text-[hsl(var(--primary-foreground))] sm:mx-auto sm:max-w-6xl sm:px-12">
        <CircleHelp className="mx-auto mb-4 opacity-75" size={25} /><h2 className="font-display text-3xl font-extrabold tracking-[-.05em]">Votre prochaine étape commence ici.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 opacity-75">Un calcul clair ne remplace pas votre travail. Il vous aide à le situer.</p><Link href="/calculateur" data-testid="button-cta-calculator" className="mt-7 inline-flex rounded-full bg-[hsl(var(--card))] px-6 py-3 text-sm font-bold text-[hsl(var(--primary))] transition-transform hover:-translate-y-0.5">Calculer mon score <ArrowRight className="ml-2" size={16} /></Link>
      </section>
    </div>
  );
}