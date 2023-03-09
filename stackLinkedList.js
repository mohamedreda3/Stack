class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.top) return null;
        this.top = this.top.next;
        this.length--;
    }

    peek() {
        return this.top.value;
    }

    length() {
        return this.length;
    }

    print() {
        let current = this.top;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const stack = new StackLinkedList();
stack.push(5)
stack.push(52)
stack.push(152)
stack.pop();
stack.push(1512)

stack.print();
console.log("top:", stack.peek());