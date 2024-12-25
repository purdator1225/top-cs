class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){

        this.head = null;

    }

    append(data) {
        if(this.head ===null){
            const newNode = new Node(data);

            this.head= newNode
        }

        //when this.head has a node already, check through the next element of the node
        else {
            let current = this.head;
            while (current.next !== null) {
                //it keeps checking if the next is empty and sets the current to the next, until it finds one that is empty then sets it as newNode
                current = current.next

            }

            current.next = newNode;
        }
    }

    display(){
        let current = this.head;
        while(current !==null) {
            console.log (current.data)
            //same as above, it sets current to the next with a while loop;
            current = current.next
        }
    }
    
}