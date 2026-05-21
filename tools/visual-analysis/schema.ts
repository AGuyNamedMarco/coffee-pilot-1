export interface VisualAnalysis {
  source: {
    url: string;
    analyzedAt: string;
  };

  screenshots: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };

  layout: {
    heroHeight?: string;
    sectionCount?: number;
    contentWidth?: string;
    imageTextRatio?: string;
    whitespaceDensity?: 'low' | 'medium' | 'high';
  };

  typography: {
    headlineScale?: string;
    bodyScale?: string;
    weightContrast?: string;
    lineLength?: string;
  };

  color: {
    dominantColors?: string[];
    accentColors?: string[];
    warmth?: 'cool' | 'neutral' | 'warm';
  };

  cta: {
    count?: number;
    placement?: string[];
    prominence?: string;
  };

  interaction: {
    navComplexity?: string;
    visibleFriction?: string[];
    mobileIssues?: string[];
    scrollBehavior?: string;
  };

  observations: string[];
  interpretations: string[];
  principles: string[];
}
