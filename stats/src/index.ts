import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

const matchReader = new MatchReader('./original.csv');
matchReader.read();

let manUnitedWins = 0;

for (let match of matchReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man united won: ${manUnitedWins} matches`);
