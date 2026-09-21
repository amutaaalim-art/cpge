export type FiliereCode = 'MP' | 'PSI' | 'TSI' | 'ECS' | 'ECT';

export type SubjectCoefficient = {
  name: string;
  coefficient: number;
};

export const FILIERES: Record<FiliereCode, {
  label: string;
  description: string;
  subjects: SubjectCoefficient[];
}> = {
  MP: {
    label: 'Mathématiques & Physique',
    description: 'La voie scientifique exigeante, au cœur des sciences fondamentales.',
    subjects: [
      { name: 'Mathématiques', coefficient: 4 },
      { name: '1ère langue étrangère', coefficient: 1 },
      { name: '2ème langue étrangère', coefficient: 0.5 },
      { name: 'Physique Chimie', coefficient: 3 },
      { name: 'Langue arabe', coefficient: 0.5 },
    ],
  },
  PSI: {
    label: 'Physique & Sciences de l’ingénieur',
    description: 'Pour relier la théorie physique aux systèmes et aux applications.',
    subjects: [
      { name: 'Mathématiques', coefficient: 3 },
      { name: '1ère langue étrangère', coefficient: 1 },
      { name: '2ème langue étrangère', coefficient: 0.5 },
      { name: 'Physique Chimie', coefficient: 4 },
      { name: 'Langue arabe', coefficient: 0.5 },
    ],
  },
  TSI: {
    label: 'Technologie & Sciences industrielles',
    description: 'Une voie concrète pour comprendre les systèmes et leur construction.',
    subjects: [
      { name: 'Mathématiques', coefficient: 3 },
      { name: '1ère langue étrangère', coefficient: 1 },
      { name: '2ème langue étrangère', coefficient: 0.5 },
      { name: 'Physique Chimie', coefficient: 2 },
      { name: 'Langue arabe', coefficient: 0.5 },
      { name: 'Sciences de l’ingénieur / Études des systèmes ou Construction mécanique', coefficient: 2 },
    ],
  },
  ECS: {
    label: 'Économique & Commerciale — voie scientifique',
    description: 'Les mathématiques au service de l’analyse, de l’économie et du commerce.',
    subjects: [
      { name: 'Mathématiques', coefficient: 4 },
      { name: '1ère langue étrangère', coefficient: 2 },
      { name: '2ème langue étrangère', coefficient: 2 },
      { name: 'Langue arabe', coefficient: 1 },
    ],
  },
  ECT: {
    label: 'Économique & Commerciale — voie technologique',
    description: 'Une approche équilibrée entre gestion, économie et langues.',
    subjects: [
      { name: 'Mathématiques', coefficient: 2.5 },
      { name: '1ère langue étrangère', coefficient: 1.5 },
      { name: '2ème langue étrangère', coefficient: 1 },
      { name: 'Langue arabe', coefficient: 0.5 },
      { name: 'Compta. et maths. financières', coefficient: 0.75 },
      { name: 'Éco. générale et statistiques', coefficient: 2 },
      { name: 'Éco. et org. administr. entreprise', coefficient: 0.75 },
    ],
  },
};

export const BAC_OPTIONS = [
  'Sciences mathématiques',
  'Sciences physiques',
  'Sciences de la vie et de la terre',
  'Sciences et technologies',
  'Baccalauréat professionnel',
];

export type ScoreInputs = {
  filiere: FiliereCode;
  bac: string;
  repetition: 'none' | 'premiere' | 'terminale';
  m1: number | null;
  m2: number | null;
  subjects: Record<string, number | null>;
  n4: number | null;
};

export type ScoreResult = {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  weightedSum: number;
  totalCoefficients: number;
  total: number;
};

export const emptyInputs = (): ScoreInputs => ({
  filiere: 'MP',
  bac: '',
  repetition: 'none',
  m1: null,
  m2: null,
  subjects: {},
  n4: null,
});

export function calculateScore(inputs: ScoreInputs): ScoreResult {
  const subjects = FILIERES[inputs.filiere].subjects;
  const weightedSum = subjects.reduce((sum, subject) => sum + (inputs.subjects[subject.name] ?? 0) * subject.coefficient, 0);
  const totalCoefficients = subjects.reduce((sum, subject) => sum + subject.coefficient, 0);
  const n3 = totalCoefficients ? weightedSum / totalCoefficients : 0;
  const n1 = inputs.repetition === 'none' ? 10 : inputs.repetition === 'premiere' ? 5 : 0;
  const n2 = inputs.m1 !== null && inputs.m2 !== null ? (inputs.m1 + 2 * inputs.m2) / 3 : 0;
  const n4 = inputs.n4 ?? 0;
  return { n1, n2, n3, n4, weightedSum, totalCoefficients, total: n1 + (n2 - 10) + (170 * n3 / 20) + (10 * n4 / 25) };
}

export function formatNumber(value: number, digits = 2) {
  return value.toLocaleString('fr-FR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}