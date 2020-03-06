import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Yemi');
// charactersCollection.sort();
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.addToTail(10);
// linkedList.addToTail(1);
// linkedList.addToTail(2);
// linkedList.addToTail(0);

// linkedList.sort();

// console.log(linkedList.print());
