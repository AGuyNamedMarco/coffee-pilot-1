# Visual Analysis Engine (VAE)

artifact_id: VAE-001
status: draft
purpose: Give the institution the ability to observe websites visually and convert screenshots into structured evidence.

## Thesis
The institution cannot reliably produce best-in-class websites unless it can observe, measure, and learn from visual and experiential evidence.

## VAE v1 Goal
Input:
- website URL
- optional screenshots

Output:
- screenshots
- layout metrics
- typography observations
- color observations
- CTA observations
- mobile/responsive observations
- structured notes for QOS review

## Pipeline
URL
→ browser capture
→ screenshot set
→ visual observation
→ structured metrics
→ QOS evaluation
→ reference memory

## Separation of Concerns
VAE observes.
QOS judges.

Bad:
- premium: high

Good:
- whitespace_density: high
- CTA_count: 1
- hero_height: ~80vh
- interpretation: lower cognitive load may increase premium perception

## VAE v1 Metrics

### Screenshot Set
- desktop
- tablet
- mobile

### Layout
- hero height estimate
- section count
- content width estimate
- image-to-text ratio
- whitespace density

### Typography
- headline scale
- body text scale
- weight contrast
- line length

### Color
- dominant colors
- accent colors
- warmth/coolness
- contrast concerns

### CTA
- count
- visual prominence
- placement
- competing actions

### Interaction / UX Observations
- navigation complexity
- visible friction
- scroll sequence
- mobile stacking issues
- perceived task path

### Output Pattern
Observation → Interpretation → Principle

Example:
Observation: CTA count is 1 and hero has high whitespace.
Interpretation: User decision-making load is reduced.
Principle: Reducing visible choices can increase perceived quality and confidence.

## Initial Use Case
Use VAE to compare:
- Alcove original site
- Alcove generated v2
- future Alcove v3

## Success Criteria
VAE is successful if its observations help produce a redesign that scores higher in QOS review than the previous version.
