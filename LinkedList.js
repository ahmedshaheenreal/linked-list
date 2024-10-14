import Node from "./Node.js";

export default class LinkedList {
  size = 0;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.size++;
  }
  pop() {
    if (this.size < 2) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
    }
  }
  // The unshift method takes a value as a parameter and assigns it as the head of the list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }
  get(index) {
    return this.getTarget(index).data;
  }
  set(index, val) {
    this.getTarget(index).data = val;
  }

  insert(index, val) {
    // The insert method takes an index number and a value as parameters,
    //and inserts the value at the given index in the list.
    //It returns true on successful insert or false}
    const newNode = new Node(val);
    let curr = this.getTarget(index);
    newNode.next = curr.next;
    newNode.prev = curr;
    curr.next.prev = newNode;
    curr.next = newNode;
    this.size++;
  }
  remove(index) {
    if (index === 0) {
      this.shift();
    }
    if (index === this.size - 1) {
      this.shift();
    } else {
      let curr = this.getTarget(index);
      curr.next.prev = curr.prev;
      curr.prev.next = curr.next;
      curr = null;
      this.size--;
    }
  } // The remove method takes an index number as a parameter and removes the node at the given index in the list
  getTarget(index) {
    let count = 0;
    let curr = null;
    if (index >= this.size) throw new Error("index greater than size");
    const tailDistance = this.size - index - 1; //get the distance from the end to the target element so we can reduce the time
    if (tailDistance < index) {
      curr = this.tail;
      while (tailDistance > count) {
        curr = curr.prev;
        count++;
      }
    } else {
      curr = this.head;
      while (index > count) {
        curr = curr.next;
        count++;
      }
    }
    return curr;
  }
  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
