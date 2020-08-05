package main

import "strings"

type Node struct {
	Char     byte
	Quantity int
	Next     *Node
	Prev     *Node
}

func TryRemove(n *Node, k int) *Node {
	if n.Quantity < k {
		return n.Next
	}

	n.Quantity %= k
	if n.Quantity == 0 {
		if n.Prev != nil && n.Next != nil && n.Prev.Char == n.Next.Char {
			n.Prev.Quantity += n.Next.Quantity
			n.Prev.Next = n.Next.Next
			if n.Next.Next != nil {
				n.Next.Next.Prev = n.Prev
			}
			return n.Prev
		} else {
			if n.Prev != nil {
				n.Prev.Next = n.Next
			}
			if n.Next != nil {
				n.Next.Prev = n.Prev
			}
		}
	}

	return n.Next
}

func constructList(s string) *Node {
	head := &Node{
		Char:     s[0],
		Quantity: 1,
	}

	cur := head
	for i := 1; i < len(s); i++ {
		if s[i] != s[i-1] {
			cur.Next = &Node{
				Char:     s[i],
				Quantity: 1,
				Prev:     cur,
			}
			cur = cur.Next
		} else {
			cur.Quantity++
		}
	}

	return head
}

func removeDuplicates(s string, k int) string {
	head := constructList(s)
	cur := head

	for cur != nil {
		cur = TryRemove(cur, k)
	}

	var b strings.Builder
	for head != nil {
		b.WriteString(strings.Repeat(string(head.Char), head.Quantity))
		head = head.Next
	}

	return b.String()
}
