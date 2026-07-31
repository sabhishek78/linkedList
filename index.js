class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendNode(node) {
        if (!this.head) {
            this.head = node;
            return;
        }

        let tempNode = this.head;

        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }

        tempNode.next = node;
    }

    prependNode(node) {
        node.next = this.head;
        this.head = node;
    }

    getListLength() {
        let current = this.head;
        let length = 0;

        while (current !== null) {
            length++;
            current = current.next;
        }

        return length;
    }

    insertNode(node, position) {
        const listLength = this.getListLength();

        // Insert at the beginning
        if (position <= 1) {
            this.prependNode(node);
            return;
        }

        // Insert at the end (or beyond the end)
        if (position > listLength) {
            this.appendNode(node);
            return;
        }

        let currNode = this.head;
        let prevNode = null;
        let currPos = 1;

        while (currPos < position) {
            prevNode = currNode;
            currNode = currNode.next;
            currPos++;
        }

        prevNode.next = node;
        node.next = currNode;
    }

    printList() {
        let current = this.head;
        let listString = "";

        while (current !== null) {
            listString += current.value;

            if (current.next !== null) {
                listString += " --> ";
            }

            current = current.next;
        }

        console.log(listString);
    }
}

// Create a new list
const list = new LinkedList();

// Add nodes
list.appendNode(new Node(10));
list.appendNode(new Node(20));
list.appendNode(new Node(30));

console.log("Initial List:");
list.printList();

// Prepend
list.prependNode(new Node(5));

console.log("\nAfter prepend:");
list.printList();

// Insert in the middle (before 20)
list.insertNode(new Node(15), 4);

console.log("\nAfter inserting 15 at position 4:");
list.printList();

// Insert at beginning
list.insertNode(new Node(1), 1);

console.log("\nAfter inserting 1 at position 1:");
list.printList();

// Insert beyond the end (appends)
list.insertNode(new Node(40), 100);

console.log("\nAfter inserting 40 at position 100:");
list.printList();

console.log("\nList Length:", list.getListLength());
