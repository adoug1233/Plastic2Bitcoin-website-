// Safe filenames (no spaces or parentheses) — avoids URL/encoding issues
export const images = {
  hero: 'hero.jpeg',
  team1: 'team1.jpeg',
  team2: 'team2.jpeg',
  revolution: 'revolution.jpeg',
  techBarrels: 'tech-barrels.jpeg',
  techTanks: 'tech-tanks.jpeg',
  techSword: 'tech-sword.jpeg',
  techMining: 'tech-mining.jpeg',
  techNight: 'tech-barrels.jpeg', // fallback, not used in current layout
  energyCost: 'energy-cost.jpeg',
  miningRigs: 'mining-rigs.jpeg',
  miningStack: 'mining-rigs.jpeg', // fallback
  miningLayout: 'mining-layout.jpeg',
  tokenization: 'tokenization.jpeg',
  gamified: 'gamified.jpeg',
  global: 'global.jpeg',
  partnerships: 'partnerships.jpeg',
  closing: 'closing.jpeg',
  blueSwordLogo: 'blue-sword-logo.jpeg', // served from public/ root (see logoUrl)
} as const

/** Logo is at public/images/ (source: new pics /blue sword logo.jpeg). ?v=3 bypasses cache. */
export const logoUrl = '/images/blue-sword-logo.jpeg?v=4'

export function img(path: string): string {
  return '/images/' + path
}
