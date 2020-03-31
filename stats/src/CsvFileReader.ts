import fs from 'fs';

export class CsvFileReader {
  data: String[][] = [];
  constructor(public filename: String) {}

  read(): void {
    this.data = fs
      .readFileSync(`${this.filename}`, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
