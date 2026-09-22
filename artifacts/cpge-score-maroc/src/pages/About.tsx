export function About() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-[-.06em] sm:text-6xl">À propos de CPGE Score</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
          Un outil conçu pour rendre le calcul de votre score plus clair, transparent et compréhensible.
        </p>
      </header>

      <article className="mt-12 space-y-4">
        <section className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 shadow-[0_14px_35px_hsl(var(--foreground)/.035)] sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">Qu'est-ce que CPGE Score ?</h2>
          <p className="mt-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
            CPGE Score est un outil en ligne conçu pour aider les étudiants issus des classes préparatoires aux grandes écoles (CPGE) à calculer et à mieux comprendre leur score à partir des informations qu'ils renseignent.
          </p>
        </section>

        <section className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 shadow-[0_14px_35px_hsl(var(--foreground)/.035)] sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">Pourquoi CPGE Score ?</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
            <p>Certaines formules de calcul peuvent sembler complexes ou difficiles à vérifier.</p>
            <p>CPGE Score a été conçu pour transformer ces données en un résultat lisible et compréhensible, afin de permettre à l'utilisateur de suivre clairement les différentes composantes de son calcul.</p>
          </div>
        </section>

        <section className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--secondary)/.38)] p-6 sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">Une approche transparente</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
            <p>Le site présente le calcul de manière claire afin que l'utilisateur puisse comprendre comment les différentes données saisies interviennent dans le résultat.</p>
            <p>Le résultat fourni par CPGE Score est une estimation calculée à partir des informations renseignées par l'utilisateur.</p>
          </div>
        </section>

        <section className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 shadow-[0_14px_35px_hsl(var(--foreground)/.035)] sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">À qui s'adresse CPGE Score ?</h2>
          <p className="mt-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
            Le service s'adresse principalement aux étudiants et candidats concernés par les classes préparatoires aux grandes écoles (CPGE) et souhaitant obtenir une estimation de leur score.
          </p>
        </section>

        <section className="rounded-[24px] border border-[hsl(var(--accent)/.45)] bg-[hsl(var(--secondary)/.42)] p-6 sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">Un résultat informatif</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
            <p>CPGE Score ne constitue pas une institution d'admission et ne délivre aucune décision officielle.</p>
            <p>Le résultat obtenu ne constitue ni une garantie d'admission, ni un classement officiel, ni une décision d'une école ou d'un établissement.</p>
            <p>Les décisions officielles dépendent toujours des institutions et des procédures d'admission concernées.</p>
          </div>
        </section>
      </article>
    </div>
  );
}