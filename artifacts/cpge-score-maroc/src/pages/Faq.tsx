import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Qu'est-ce que CPGE Score ?",
    answer:
      "CPGE Score est un outil qui aide les étudiants et candidats des classes préparatoires aux grandes écoles à obtenir une estimation de leur score à partir des informations saisies dans le calculateur. Le résultat est informatif et ne constitue pas une décision officielle d'admission, de classement ou d'affectation.",
  },
  {
    question: "À quoi sert le calculateur ?",
    answer:
      "Le calculateur permet d'appliquer la formule intégrée à CPGE Score étape par étape, en tenant compte de votre filière, de votre parcours et de vos notes. Il vous aide à lire votre estimation de manière transparente, sans remplacer les informations ou décisions officielles.",
  },
  {
    question: "Comment mon score est-il calculé ?",
    answer:
      "Le calcul suit la formule N = N1 + (N2 − 10) + (170 × N3 / 20) + (10 × N4 / 25). N1 correspond au parcours scolaire, N2 à la moyenne calculée avec M1 et M2, N3 à la moyenne pondérée des matières de la filière et N4 à la note du conseil de classe.",
  },
  {
    question: "Quelles informations dois-je renseigner ?",
    answer:
      "Vous devez renseigner votre filière, votre type de baccalauréat, votre situation de redoublement, M1, M2, les notes des matières demandées pour votre filière et la note du conseil de classe. Les coefficients affichés dépendent de la filière sélectionnée.",
  },
  {
    question: "Que signifient M1, M2, M3 et M4 ?",
    answer:
      "M1 correspond à la moyenne du passage du 1-BAC à la terminale et M2 à la moyenne générale du baccalauréat. Dans le calculateur, les composantes de la formule sont ensuite présentées sous les noms N1, N2, N3 et N4 : N3 est la moyenne pondérée des matières et N4 la note du conseil de classe. M3 et M4 ne sont pas demandées comme champs distincts.",
  },
  {
    question: "Quelles filières CPGE sont prises en compte ?",
    answer:
      "CPGE Score prend en compte les filières MP, PSI, TSI, ECS et ECT. Les baccalauréats admissibles et les matières évaluées varient selon la filière sélectionnée et sont affichés directement dans le calculateur.",
  },
  {
    question: "Le résultat obtenu est-il un score officiel ?",
    answer:
      "Non. Le résultat fourni par CPGE Score est une estimation informative calculée à partir des données saisies. Il ne constitue ni un score officiel, ni une admission garantie, ni un classement ou une décision d'une institution.",
  },
  {
    question: "Puis-je utiliser le résultat pour une candidature ?",
    answer:
      "Vous pouvez utiliser cette estimation comme repère pour préparer votre dossier et mieux comprendre votre situation. Elle ne remplace pas une candidature officielle, les conditions d'admission, les documents demandés ou la décision de l'institution concernée.",
  },
  {
    question: "Que faire si je ne connais pas certaines de mes notes ?",
    answer:
      "Consultez votre relevé de notes ou les documents officiels disponibles avant de renseigner le calculateur. Pour obtenir un résultat fiable, utilisez les valeurs exactes demandées par les différents champs et ne remplacez pas une note inconnue par une valeur choisie au hasard.",
  },
  {
    question: "Le calculateur conserve-t-il mes informations ?",
    answer:
      "Les données saisies dans le calculateur restent uniquement dans cette page : le calcul est effectué dans votre navigateur et aucun compte n'est nécessaire. CPGE Score n'enregistre ni ne transmet les valeurs saisies par le calculateur ; consultez la Politique de confidentialité pour les informations générales liées au Site.",
  },
  {
    question: "Puis-je refaire le calcul avec d'autres valeurs ?",
    answer:
      "Oui. Vous pouvez utiliser le bouton « Recommencer » à tout moment pour réinitialiser le calculateur et saisir une autre filière, un autre parcours ou d'autres notes.",
  },
  {
    question: "Le résultat peut-il être différent d'un classement ou d'une décision officielle ?",
    answer:
      "Oui. Une estimation calculée par CPGE Score peut être différente d'un classement ou d'une décision officielle, car ceux-ci peuvent dépendre de règles, de données, de places disponibles et de critères propres à l'institution. Le résultat de CPGE Score ne garantit donc ni admission, ni classement, ni affectation.",
  },
] as const;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

export function Faq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-16">
        <header className="max-w-3xl">
          <div className="eyebrow mb-3">Besoin d'une précision ?</div>
          <h1 className="font-display text-4xl font-extrabold tracking-[-.06em] sm:text-6xl">Questions fréquentes</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
            Retrouvez les réponses aux principales questions concernant le calcul de votre score et l'utilisation de CPGE Score.
          </p>
        </header>

        <section className="mt-12 rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-5 shadow-[0_14px_35px_hsl(var(--foreground)/.035)] sm:p-8" aria-label="Questions fréquentes">
          <Accordion type="single" collapsible className="divide-y divide-[hsl(var(--border))]">
            {faqItems.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`} className="border-0">
                <AccordionTrigger className="gap-5 py-5 text-left font-display text-base font-bold text-[hsl(var(--foreground))] no-underline hover:no-underline sm:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-8 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </>
  );
}