import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('./original.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man united won: ${manUnitedWins} matches`);
