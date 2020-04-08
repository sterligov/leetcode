package main

import (
	"sort"
)

type Node struct {
	Childs        map[byte]*Node
	Sym           byte
	WordFrequency *Word
}

type Word struct {
	Word  string
	Times uint
}

func (n *Node) AddWord(w *Word) {
	if len(w.Word) == 0 {
		return
	}

	curNode := n
	for i := 0; i < len(w.Word); i++ {
		if _, ok := curNode.Childs[w.Word[i]]; !ok {
			tail := w.Word[i:]
			for i := 0; i < len(tail)-1; i++ {
				curNode.Childs[tail[i]] = &Node{
					Childs: make(map[byte]*Node),
					Sym:    tail[i],
				}
				curNode = curNode.Childs[tail[i]]
			}
			lastSym := tail[len(tail)-1]
			curNode.Childs[lastSym] = &Node{
				Childs:        make(map[byte]*Node),
				Sym:           lastSym,
				WordFrequency: w,
			}
			return
		}
		curNode = curNode.Childs[w.Word[i]]
	}

	if curNode.WordFrequency == nil {
		curNode.WordFrequency = w
	} else {
		curNode.WordFrequency.Times += w.Times
	}
}

func (n *Node) FindByPrefix(word string, nAnswer int) []string {
	curNode := n
	for i := 0; i < len(word); i++ {
		if _, ok := curNode.Childs[word[i]]; !ok {
			return []string{}
		}
		curNode = curNode.Childs[word[i]]
	}
	found := curNode.dfs()
	sort.Slice(found, func(i, j int) bool {
		if found[i].Times == found[j].Times {
			return found[i].Word < found[j].Word
		}
		return found[i].Times > found[j].Times
	})

	result := make([]string, 0, nAnswer)
    for i := 0; i < nAnswer && i < len(found); i++ {
		result = append(result, found[i].Word)
	}
	return result
}

func (n *Node) dfs() []*Word {
	found := make([]*Word, 0, 100)
	stack := make([]*Node, 0, 100)
	stack = append(stack, n)
	for len(stack) > 0 {
		curNode := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if curNode.WordFrequency != nil {
			found = append(found, curNode.WordFrequency)
		}
		for _, v := range curNode.Childs {
			stack = append(stack, v)
		}
	}
	return found
}

type AutocompleteSystem struct {
	Trie     *Node
	Sentence []byte
}

func Constructor(sentences []string, times []int) AutocompleteSystem {
	as := AutocompleteSystem{
		Trie: &Node{
			Childs: make(map[byte]*Node),
		},
		Sentence: make([]byte, 0, 100),
	}

	for i := 0; i < len(sentences); i++ {
		w := &Word{sentences[i], uint(times[i])}
		as.Trie.AddWord(w)
	}

	return as
}

func (this *AutocompleteSystem) Input(c byte) []string {
	if c == '#' {
		this.Trie.AddWord(&Word{string(this.Sentence), 1})
		this.Sentence = make([]byte, 0, 100)
		return []string{}
	}
	this.Sentence = append(this.Sentence, c)
	return this.Trie.FindByPrefix(string(this.Sentence), 3)
}
