
type MyCircularQueue struct {
    maxSize int
    curSize int
    head *Node
}

type Node struct {
    val int
    next *Node
    prev *Node
}


/** Initialize your data structure here. Set the size of the queue to be k. */
func Constructor(k int) MyCircularQueue {
    return MyCircularQueue{k, 0, nil}
}


/** Insert an element into the circular queue. Return true if the operation is successful. */
func (this *MyCircularQueue) EnQueue(value int) bool {
    if this.IsFull() {
        return false
    }
    this.curSize++
    if this.head == nil {
        this.head = &Node{val: value}
        this.head.next = this.head
        this.head.prev = this.head
    } else {
        last := &Node{
            value,
            this.head,
            this.head.prev,
        }
        this.head.prev.next = last
        this.head.prev = last        
    }    
    return true
}


/** Delete an element from the circular queue. Return true if the operation is successful. */
func (this *MyCircularQueue) DeQueue() bool {
    if this.curSize == 0 {
        return false
    }
    this.curSize--
    
    if this.curSize == 0 {
        this.head = nil
    } else {        
        this.head.prev.next = this.head.next
        this.head.next.prev = this.head.prev
        this.head = this.head.next
    }
    return true
}


/** Get the front item from the queue. */
func (this *MyCircularQueue) Front() int {
    if this.head == nil {
        return - 1
    }
    return this.head.val
}


/** Get the last item from the queue. */
func (this *MyCircularQueue) Rear() int {
    if this.head == nil {
        return -1
    }
    return this.head.prev.val
}


/** Checks whether the circular queue is empty or not. */
func (this *MyCircularQueue) IsEmpty() bool {
    return this.curSize == 0
}


/** Checks whether the circular queue is full or not. */
func (this *MyCircularQueue) IsFull() bool {
    return this.maxSize == this.curSize
}