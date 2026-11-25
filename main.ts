import { mkdirSync, writeFileSync } from 'node:fs';

const slogan = 'Fast feet, clear receipts: a Solana wallet agent that moves money quickly and asks before it spends.';
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', slogan + '\n', 'utf8');
