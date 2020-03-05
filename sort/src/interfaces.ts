export interface Sortable {
  swap(leftIndex: number, rightIndex: number): void;
  length: number; // Note length is a getter which makes it a property
  compare(leftIndex: number, rightIndex: number): Boolean;
}
