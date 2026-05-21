import { VisualAnalysis } from './schema';

/**
 * VAE v1
 * Purpose:
 * Convert human-observed website traits into structured evidence.
 *
 * Note:
 * Early versions intentionally prefer explicit observations
 * over unreliable automated inference.
 */

export function createAnalysis(input: Partial<VisualAnalysis>): VisualAnalysis {
  return {
    source: {
      url: input.source?.url ?? 'unknown',
      analyzedAt: new Date().toISOString(),
    },

    screenshots: input.screenshots ?? {},

    layout: {
      heroHeight: input.layout?.heroHeight,
      sectionCount: input.layout?.sectionCount,
      contentWidth: input.layout?.contentWidth,
      imageTextRatio: input.layout?.imageTextRatio,
      whitespaceDensity: input.layout?.whitespaceDensity,
    },

    typography: input.typography ?? {},
    color: input.color ?? {},
    cta: input.cta ?? {},
    interaction: input.interaction ?? {},

    observations: input.observations ?? [],
    interpretations: input.interpretations ?? [],
    principles: input.principles ?? [],
  };
}

/**
 * Institutional learning pattern:
 * Observation → Interpretation → Principle
 */

export const alcoveExample = createAnalysis({
  source: {
    url: 'https://alcove-community-coffee.square.site'
  },

  layout: {
    whitespaceDensity: 'medium'
  },

  cta: {
    count: 2,
    prominence: 'moderate'
  },

  interaction: {
    mobileIssues: [
      'long text wrapping',
      'uneven stacking'
    ]
  },

  observations: [
    'Mobile layouts compress large headings',
    'Community feeling relies heavily on copy rather than imagery'
  ],

  interpretations: [
    'Reduced emotional trust from missing authentic visuals'
  ],

  principles: [
    'Authenticity often outweighs polish for local businesses'
  ]
});
