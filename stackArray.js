class Stack {
    constructor() {
        this.values = new Array();
        this.currentItem = -1;
    }

    push(value) {
        this.currentItem++;
        this.values[this.currentItem] = value;
    }

    peek() {
        return this.value[this.currentItem]
    }

    pop() {
        this.values.length--;
        this.currentItem--;
    }

    length() {
        return this.currentItem + 1;
    }

    removeAll() {
        this.values.length = 0;
        this.currentItem = 0;
    }

    print() {
        return this.values;
    }
}

const stack = new Stack;
stack.push(10);
stack.push(110);
stack.push(1);
stack.push(1);
console.log(stack.print());
console.log(stack.length());

stack.pop();
console.log(stack.print());
console.log(stack.length());

stack.removeAll();
console.log(stack.print());
console.log(stack.length());
