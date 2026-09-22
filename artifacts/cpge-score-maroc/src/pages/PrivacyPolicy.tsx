import type { ReactNode } from 'react';

const googlePartnerSitesUrl = 'https://policies.google.com/technologies/partner-sites?hl=fr';
const googleAdsSettingsUrl = 'https://adssettings.google.com/?hl=fr';

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-[hsl(var(--primary))] underline decoration-[hsl(var(--accent)/.7)] underline-offset-4 hover:decoration-[hsl(var(--primary))]"
    >
      {children}
    </a>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-[-.06em] sm:text-6xl">
          Politique de confidentialité
        </h1>
        <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">
          Dernière mise à jour : 22 septembre 2026
        </p>
      </header>

      <article className="mt-12 rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 shadow-[0_14px_35px_hsl(var(--foreground)/.035)] sm:p-10">
        <div className="space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
          <p>
            Bienvenue sur <strong className="font-bold text-[hsl(var(--foreground))]">CPGE Score</strong>.
          </p>
          <p>
            La présente Politique de confidentialité explique comment CPGE Score (« nous », « notre site » ou « le Site ») traite les informations susceptibles d’être collectées lorsque vous utilisez notre site web et ses services.
          </p>
          <p>
            En utilisant CPGE Score, vous acceptez les pratiques décrites dans la présente politique, dans les limites prévues par la législation applicable.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">1. Présentation de CPGE Score</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>
                CPGE Score est un outil destiné à aider les étudiants et candidats des classes préparatoires aux grandes écoles (CPGE) à effectuer une estimation de leur score à partir des informations qu’ils saisissent dans le calculateur.
              </p>
              <p className="rounded-2xl border border-[hsl(var(--accent)/.45)] bg-[hsl(var(--secondary)/.42)] p-5">
                Le résultat fourni par CPGE Score constitue une <strong className="font-bold text-[hsl(var(--foreground))]">estimation informative</strong> et ne constitue pas une décision officielle d’admission, de classement ou d'affectation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">2. Informations que nous pouvons collecter</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score est conçu pour fonctionner sans nécessiter la création d’un compte utilisateur.</p>
              <p>Selon la manière dont vous utilisez le Site, les informations susceptibles d’être traitées peuvent notamment comprendre :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>les informations saisies volontairement dans le calculateur ;</li>
                <li>les données techniques nécessaires au fonctionnement et à la sécurité du Site ;</li>
                <li>l’adresse IP ou des informations techniques similaires, lorsqu’elles sont traitées par notre hébergeur, nos fournisseurs techniques ou nos services publicitaires ;</li>
                <li>des informations relatives au navigateur, à l’appareil et au système d’exploitation ;</li>
                <li>des informations relatives à la navigation sur le Site, notamment les pages consultées et certaines interactions ;</li>
                <li>des informations stockées dans ou accessibles depuis votre navigateur, notamment au moyen de cookies ou de technologies similaires.</li>
              </ul>
              <p>Nous ne demandons pas aux utilisateurs de fournir des informations telles que leur numéro de téléphone, leur adresse postale ou leurs informations bancaires pour utiliser le calculateur.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">3. Utilisation des informations saisies dans le calculateur</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Les informations saisies dans le calculateur sont utilisées afin de :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>effectuer les calculs demandés ;</li>
                <li>afficher le résultat correspondant aux données saisies ;</li>
                <li>permettre le fonctionnement et l'amélioration du service ;</li>
                <li>détecter et prévenir les erreurs, abus ou utilisations malveillantes du Site.</li>
              </ul>
              <p>CPGE Score ne demande pas aux utilisateurs de saisir des informations permettant de les identifier directement lorsqu'elles ne sont pas nécessaires au fonctionnement du calculateur.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">4. Cookies et technologies similaires</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score peut utiliser des cookies, du stockage local ou des technologies similaires nécessaires au fonctionnement du Site, à la sécurité, à la mesure d’audience ou à la diffusion de publicités.</p>
              <p>Des cookies peuvent également être déposés par des fournisseurs tiers lorsque leurs services sont utilisés sur le Site.</p>
              <p>Lorsque Google AdSense est utilisé pour diffuser des annonces, <strong className="font-bold text-[hsl(var(--foreground))]">Google et ses partenaires peuvent utiliser des cookies ou d'autres technologies afin de diffuser des annonces, mesurer leur performance et, selon les choix de l'utilisateur et les exigences applicables, personnaliser les annonces</strong>.</p>
              <p><ExternalLink href={googlePartnerSitesUrl}>Google indique que les fournisseurs tiers, y compris Google, peuvent utiliser des cookies pour diffuser des annonces en fonction des visites antérieures d'un utilisateur sur ce site ou sur d'autres sites.</ExternalLink></p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">5. Google AdSense</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score peut utiliser <strong className="font-bold text-[hsl(var(--foreground))]">Google AdSense</strong>, un service de publicité fourni par Google.</p>
              <p>Google et ses partenaires peuvent utiliser des cookies, des pixels espions, des adresses IP ou d'autres identifiants et technologies similaires dans le cadre de la diffusion et de la mesure des annonces.</p>
              <p>Ces technologies peuvent notamment être utilisées pour :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>diffuser des annonces ;</li>
                <li>mesurer les impressions et les interactions avec les annonces ;</li>
                <li>limiter la fréquence d'affichage des annonces ;</li>
                <li>améliorer la pertinence des annonces ;</li>
                <li>personnaliser les annonces lorsque cela est autorisé et lorsque l'utilisateur a fourni le consentement requis.</li>
              </ul>
              <p>Les utilisateurs peuvent gérer certains paramètres relatifs aux annonces personnalisées dans les <ExternalLink href={googleAdsSettingsUrl}>paramètres publicitaires de Google</ExternalLink>.</p>
              <p>Pour plus d'informations sur la manière dont Google utilise les données collectées via les sites et applications de ses partenaires, veuillez consulter :</p>
              <p className="border-l-2 border-[hsl(var(--accent))] pl-5 font-semibold text-[hsl(var(--foreground))]"><ExternalLink href={googlePartnerSitesUrl}>« Comment Google utilise les informations provenant des sites ou applications qui utilisent ses services »</ExternalLink>.</p>
              <p>Google exige notamment que les éditeurs informent clairement leurs utilisateurs de l'utilisation de cookies et du fait que des tiers peuvent placer et lire des cookies ou utiliser des technologies similaires dans le cadre de la diffusion d'annonces.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">6. Publicités personnalisées et consentement</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Selon la localisation de l'utilisateur et les exigences légales applicables, CPGE Score peut devoir obtenir le consentement de l'utilisateur avant d'utiliser certaines informations ou certains cookies à des fins de personnalisation des annonces.</p>
              <p>Pour les utilisateurs situés dans l'Espace économique européen (EEE), au Royaume-Uni et en Suisse, Google impose notamment des exigences spécifiques concernant le consentement à l'utilisation de cookies ou du stockage local ainsi qu'à l'utilisation de données personnelles pour la personnalisation des annonces lorsque la législation l'exige.</p>
              <p>Lorsque cela est nécessaire, CPGE Score utilise un mécanisme de consentement approprié afin de permettre aux utilisateurs d'exprimer leurs choix concernant l'utilisation de leurs données et la personnalisation des annonces.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">7. Fournisseurs et partenaires tiers</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Certains services utilisés par CPGE Score peuvent être fournis par des entreprises tierces.</p>
              <p>Ces fournisseurs peuvent traiter certaines informations techniques nécessaires à la fourniture de leurs services, conformément à leurs propres politiques de confidentialité et aux règles applicables.</p>
              <p>Les principaux services tiers utilisés sur le Site peuvent notamment comprendre :</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Google AdSense, pour la diffusion de publicités ;</li>
                <li>les services d'hébergement et d'infrastructure nécessaires au fonctionnement du Site ;</li>
                <li>d'autres services techniques éventuellement intégrés au Site.</li>
              </ul>
              <p>La liste des fournisseurs tiers peut évoluer lorsque de nouveaux services sont ajoutés ou que certains services sont supprimés.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">8. Partage des informations</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score ne vend pas les informations personnelles de ses utilisateurs.</p>
              <p>Certaines informations techniques peuvent toutefois être traitées ou transmises à des prestataires techniques ou publicitaires lorsque cela est nécessaire au fonctionnement du Site, à la sécurité, à la mesure d’audience ou à la diffusion des annonces.</p>
              <p>Les données peuvent également être communiquées lorsque cela est nécessaire pour respecter une obligation légale, protéger les droits du Site ou prévenir une activité frauduleuse ou abusive.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">9. Conservation des données</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Nous conservons les informations uniquement pendant la durée nécessaire aux finalités pour lesquelles elles sont traitées, ou pendant la durée imposée par les obligations légales applicables.</p>
              <p>La durée de conservation peut varier selon la nature des informations et le service concerné.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">10. Sécurité</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables afin de protéger les informations traitées dans le cadre de CPGE Score contre l'accès non autorisé, la perte, la modification ou la divulgation.</p>
              <p>Toutefois, aucun service accessible sur Internet ne peut garantir une sécurité absolue.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">11. Liens vers des sites tiers</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Le Site peut contenir des liens vers des sites ou services exploités par des tiers.</p>
              <p>CPGE Score n'est pas responsable des pratiques de confidentialité, du contenu ou de la sécurité de ces sites tiers.</p>
              <p>Nous vous recommandons de consulter leur propre politique de confidentialité avant de leur communiquer des informations.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">12. Droits des utilisateurs</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Selon la législation applicable à votre situation, vous pouvez disposer de droits concernant vos données personnelles, notamment des droits d'accès, de rectification, de suppression, de limitation ou d'opposition au traitement.</p>
              <p>Vous pouvez également disposer de droits spécifiques concernant votre consentement aux cookies et à la personnalisation des annonces.</p>
              <p>Pour exercer un droit ou poser une question concernant la confidentialité, vous pouvez contacter CPGE Score à l'adresse indiquée sur la page de contact du Site.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">13. Gestion des préférences publicitaires</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Les utilisateurs peuvent gérer leurs préférences concernant certaines publicités personnalisées via les <ExternalLink href={googleAdsSettingsUrl}>outils de gestion des annonces proposés par Google</ExternalLink>.</p>
              <p>Google fournit également des informations permettant aux utilisateurs de comprendre et de gérer l'utilisation des données dans le cadre de ses services publicitaires.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">14. Protection des mineurs</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score n'est pas destiné à collecter volontairement des informations personnelles auprès d'enfants.</p>
              <p>Nous ne cherchons pas à utiliser les données de personnes que nous savons âgées de moins de 13 ans pour personnaliser des publicités.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">15. Modifications de cette politique</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Nous pouvons mettre à jour cette Politique de confidentialité lorsque nos services, nos pratiques ou les exigences légales applicables évoluent.</p>
              <p>La date de dernière mise à jour figurant au début de cette page sera modifiée lorsque des changements importants seront apportés.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">16. Contact</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Pour toute question concernant cette Politique de confidentialité ou le traitement des données sur CPGE Score, vous pouvez nous contacter via les coordonnées disponibles sur le Site.</p>
            </div>
          </section>
        </div>

        <p className="mt-12 border-t border-[hsl(var(--border))] pt-6 font-mono text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">
          Dernière mise à jour : 22 septembre 2026
        </p>
      </article>
    </div>
  );
}