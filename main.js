import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.insert(2, "New mid value");

list.remove(1);

list.unshift("Add to beginning");

list.traverse();
