import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Goody');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();

const linkedList = new LinkedList();
linkedList.addToTail(10);
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(0);

const sorter = new Sorter(linkedList);
sorter.sort();

console.log(linkedList.print());
