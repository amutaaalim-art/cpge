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
                <li>l’adresse IP ou des informations techniques similaires, lorsqu’elles sont traitées par notre hébergeur ou nos fournisseurs techniques ;</li>
                <li>des informations relatives au navigateur, à l’appareil et au système d’exploitation ;</li>
                <li>des informations nécessaires au fonctionnement technique du Site, lorsqu’elles sont disponibles auprès de l’hébergeur ou des fournisseurs techniques.</li>
              </ul>
              <p>À ce jour, le Site n’utilise aucun outil de mesure d’audience, de publicité ou de suivi comportemental.</p>
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
              <p>À ce jour, CPGE Score ne dépose ni ne lit de cookie publicitaire et n’utilise ni <span className="font-mono text-[13px]">localStorage</span> ni <span className="font-mono text-[13px]">sessionStorage</span>.</p>
              <p>Aucun service publicitaire ou analytique tiers n’est actuellement intégré aux pages du Site. La présente politique pourra être mise à jour si de tels services sont ajoutés ultérieurement.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">5. Services publicitaires Google</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score n’intègre actuellement aucun service publicitaire Google, notamment <strong className="font-bold text-[hsl(var(--foreground))]">Google AdSense</strong>.</p>
              <p>Aucun script publicitaire, cookie publicitaire ou mécanisme de personnalisation des annonces n’est donc actuellement utilisé par le Site.</p>
              <p>Si un service publicitaire Google ou un autre service publicitaire tiers est ajouté ultérieurement, la présente politique sera mise à jour afin de décrire son fonctionnement, les données concernées et les choix proposés aux utilisateurs.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">6. Publicités personnalisées et consentement</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>À ce jour, aucun système de consentement publicitaire, aucune bannière de cookies et aucun CMP ne sont utilisés, car aucun service publicitaire ou analytique n’est intégré au Site.</p>
              <p>Si de tels services sont ajoutés ultérieurement, CPGE Score mettra à jour cette politique et mettra en place, lorsque cela est requis, un mécanisme permettant aux utilisateurs d’exprimer et de gérer leurs choix.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">7. Fournisseurs et partenaires tiers</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Le Site utilise certains services techniques tiers nécessaires à son fonctionnement, notamment pour l’hébergement et le chargement des polices.</p>
              <p>Ces fournisseurs peuvent traiter certaines informations techniques nécessaires à la fourniture de leurs services, conformément à leurs propres politiques de confidentialité et aux règles applicables.</p>
              <p>Aucun service publicitaire ou analytique tiers n’est actuellement intégré au Site.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>les services d'hébergement et d'infrastructure nécessaires au fonctionnement du Site ;</li>
                <li>Google Fonts, utilisé pour charger les polices de caractères.</li>
              </ul>
              <p>La liste des fournisseurs tiers peut évoluer lorsque de nouveaux services sont ajoutés ou que certains services sont supprimés.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">8. Partage des informations</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score ne vend pas les informations personnelles de ses utilisateurs.</p>
              <p>Certaines informations techniques peuvent toutefois être traitées ou transmises à des prestataires techniques lorsque cela est nécessaire au fonctionnement du Site ou à sa sécurité. Aucun prestataire publicitaire ou analytique n’est actuellement intégré.</p>
              <p>Les données peuvent également être communiquées lorsque cela est nécessaire pour respecter une obligation légale, protéger les droits du Site ou prévenir une activité frauduleuse ou abusive.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">9. Conservation des données</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>Les données saisies dans le calculateur restent dans la mémoire de la page pendant le calcul. Elles ne sont pas envoyées au serveur et ne sont pas enregistrées dans un cookie, dans le stockage local ou dans une base de données par CPGE Score.</p>
              <p>Elles disparaissent lorsque l’utilisateur réinitialise le calculateur, recharge la page ou quitte la page du calculateur.</p>
              <p>Les éventuelles informations techniques traitées par l’hébergeur ou les fournisseurs techniques sont conservées selon leurs propres règles et les obligations légales applicables.</p>
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
              <p>Si des cookies ou des services publicitaires sont ajoutés ultérieurement, vous pourrez également disposer de droits spécifiques concernant votre consentement et la personnalisation des annonces.</p>
              <p>Pour exercer un droit ou poser une question concernant la confidentialité, vous pouvez contacter CPGE Score à l'adresse indiquée sur la page de contact du Site.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-extrabold text-[hsl(var(--foreground))]">13. Évolution des préférences publicitaires</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]">
              <p>CPGE Score n’utilise actuellement aucun service publicitaire tiers. Il n’existe donc pas de préférence publicitaire à gérer dans le Site.</p>
              <p>Si un service publicitaire est ajouté ultérieurement, la présente politique sera mise à jour afin de présenter les outils et les choix disponibles pour gérer l’utilisation des données et la personnalisation des annonces.</p>
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