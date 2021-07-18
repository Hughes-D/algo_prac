
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    front(){
        if (this.head == null){
            return null;
        }
        return this.head.val;
    }

    removeFront(){
        if (this.head == null){
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

    addFront(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = node;
        return this;
    }
}

sll1 = new SLL()
node1 = new Node(6)
node2 = new Node(10)

//establish head of SLL
this.head = node1;
//connect the two nodes together 
node1.next = node2;

// Remove Front
