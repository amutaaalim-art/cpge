import { describe, expect, it } from 'vitest';
import {
  calculateFinalScore,
  calculateN1,
  calculateN2,
  calculateN3,
  FILIERES,
} from './calculator';

describe('CPGE score calculations', () => {
  it('calculates N1 for every repetition situation', () => {
    expect(calculateN1('none')).toBe(10);
    expect(calculateN1('premiere')).toBe(5);
    expect(calculateN1('terminale')).toBe(0);
  });

  it('calculates N2 with the second year weighted twice', () => {
    expect(calculateN2(12, 18)).toBe(16);
    expect(calculateN2(0, 20)).toBeCloseTo(13.3333333333);
  });

  it('calculates N3 from weighted subject notes without premature rounding', () => {
    const subjects = FILIERES.MP.subjects;
    const result = calculateN3(subjects, {
      Mathématiques: 15.25,
      '1ère langue étrangère': 14,
      '2ème langue étrangère': 16,
      'Physique Chimie': 17.5,
      'Langue arabe': 13,
    });

    expect(result.totalCoefficients).toBe(9);
    expect(result.weightedSum).toBeCloseTo(142);
    expect(result.n3).toBeCloseTo(142 / 9);
  });

  it('calculates the final score with the official formula', () => {
    expect(calculateFinalScore(10, 16.4, 15.82, 21)).toBeCloseTo(159.27);
    expect(calculateFinalScore(0, 0, 0, 0)).toBe(-10);
    expect(calculateFinalScore(10, 20, 20, 25)).toBe(200);
  });
});