package main

func isIsomorphic(s string, t string) bool {
	m1 := make(map[byte]byte, 0)
	m2 := make(map[byte]byte, 0)
	for i := 0; i < len(s); i++ {
		_, ok1 := m1[s[i]]
		_, ok2 := m2[t[i]]
		if !ok1 && !ok2 {
			m1[s[i]] = t[i]
			m2[t[i]] = s[i]
		}
		if m1[s[i]] != t[i] || m2[t[i]] != s[i] {
			return false
		}
	}
	return true
}
