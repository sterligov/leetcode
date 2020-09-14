package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	var prevTail, tail, cur, res *ListNode

	cur = head

	for cur != nil {
		cur, head, tail = reverseList(cur, k)
		if prevTail != nil {
			prevTail.Next = head
		} else {
			res = head
		}
		prevTail = tail
	}

	return res
}

func reverseList(head *ListNode, k int) (*ListNode, *ListNode, *ListNode) {
	var (
		prev *ListNode
		i    int
	)

	cur := head

	for cur != nil && i < k {
		next := cur.Next
		cur.Next = prev
		prev, cur = cur, next
		i++
	}

	// reverse back
	if cur == nil && i != k {
		cur = prev
		prev = nil
		for cur != nil {
			next := cur.Next
			cur.Next = prev
			prev, cur = cur, next
			i++
		}
	}

	return cur, prev, head
}
