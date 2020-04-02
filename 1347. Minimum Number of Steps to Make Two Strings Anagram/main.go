package main

func minSteps(s string, t string) int {
	if s == t {
		return 0
	}

	m1 := make(map[byte]int, len(s))
	m2 := make(map[byte]int, len(s))

	for i := 0; i < len(s); i++ {
		m1[s[i]]++
		m2[t[i]]++
	}

	ans := 0
	for k, v := range m1 {
		if _, ok := m2[k]; ok {
			if m2[k] < v {
				ans += v - m2[k]
			}
		} else {
			ans += v
		}
	}

	return ans
}
