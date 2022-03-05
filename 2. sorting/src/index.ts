import { NumbersCollections } from "./NumbersCollection";
import { Sorting } from "./Sorting";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";

// const obj1 = new NumbersCollections([9, 5, 4, 1, 50, -10, -8]);

// obj1.sort();
// console.log(obj1.data);

// const obj2 = new StringCollection("fhvncgAb");
// obj2.sort();
// console.log(obj2);

const list = new LinkedList();
list.add(20);
list.add(22);
list.add(6);
list.add(2);
list.add(-20);

list.sort();

list.print();
