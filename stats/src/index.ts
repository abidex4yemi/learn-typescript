import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/consoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analizers/WinsAnalysis';

// const csvFileReader = new CsvFileReader('./original.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('./original.csv');
matchReader.load();

// const consoleReport = new ConsoleReport();
// const winsAnalysis = new WinsAnalysis('Leicester');
// const htmlReport = new HtmlReport('winsReport.html');
const summary = Summary.winsAnalysisWithHtmlReport(
  'Man United',
  'winsReport.html'
);

summary.buildAndPrintReport(matchReader.matches);
