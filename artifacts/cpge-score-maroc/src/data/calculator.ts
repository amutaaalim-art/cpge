export type FiliereCode = 'MP' | 'PSI' | 'TSI' | 'ECS' | 'ECT';

export type SubjectCoefficient = {
  name: string;
  coefficient: number;
};

export const FILIERES: Record<FiliereCode, {
  label: string;
  description: string;
  eligibleBaccalaureates: string[];
  subjects: SubjectCoefficient[];
}> = {
  MP: {
    label: 'Mathématiques & Physique',
    description: 'La voie scientifique exigeante, au cœur des sciences fondamentales.',
    eligibleBaccalaureates: [
      'Sciences mathématiques A ou B',
      'Sciences physiques',
    ],
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
    eligibleBaccalaureates: [
      'Sciences mathématiques A ou B',
      'Sciences physiques',
      'Sciences de la Vie et de la Terre',
      'Sciences Agricoles',
    ],
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
    eligibleBaccalaureates: [
      'Sciences et Technologies Electrique',
      'Sciences et Technologies Mécanique',
    ],
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
    eligibleBaccalaureates: [
      'Sciences mathématiques A ou B',
      'Sciences physiques',
      'Sciences de la Vie ou de la Terre',
      'Sciences Agricoles',
    ],
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
    eligibleBaccalaureates: [
      'Sciences Économiques',
      'Sciences de gestion Comptable',
    ],
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

export function calculateN1(repetition: ScoreInputs['repetition']): number {
  return repetition === 'none' ? 10 : repetition === 'premiere' ? 5 : 0;
}

export function calculateN2(m1: number, m2: number): number {
  return (m1 + 2 * m2) / 3;
}

export function calculateN3(
  subjects: SubjectCoefficient[],
  notes: Record<string, number | null | undefined>,
): { n3: number; weightedSum: number; totalCoefficients: number } {
  const weightedSum = subjects.reduce(
    (sum, subject) => sum + (notes[subject.name] ?? 0) * subject.coefficient,
    0,
  );
  const totalCoefficients = subjects.reduce(
    (sum, subject) => sum + subject.coefficient,
    0,
  );
  return {
    n3: totalCoefficients ? weightedSum / totalCoefficients : 0,
    weightedSum,
    totalCoefficients,
  };
}

export function calculateFinalScore(n1: number, n2: number, n3: number, n4: number): number {
  return n1 + (n2 - 10) + (170 * n3 / 20) + (10 * n4 / 25);
}

export function calculateScore(inputs: ScoreInputs): ScoreResult {
  const subjects = FILIERES[inputs.filiere].subjects;
  const { n3, weightedSum, totalCoefficients } = calculateN3(subjects, inputs.subjects);
  const n1 = calculateN1(inputs.repetition);
  const n2 = inputs.m1 !== null && inputs.m2 !== null ? calculateN2(inputs.m1, inputs.m2) : 0;
  const n4 = inputs.n4 ?? 0;
  return {
    n1,
    n2,
    n3,
    n4,
    weightedSum,
    totalCoefficients,
    total: calculateFinalScore(n1, n2, n3, n4),
  };
}

export function formatNumber(value: number, digits = 2) {
  return value.toLocaleString('fr-FR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}